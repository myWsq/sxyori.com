<template>
	<v-layout justify-space-around align-center>
		<my-logo></my-logo>
		<div>
			<nuxt-link
				v-for="item in list"
				:key="item.to"
				:to="item.to"
				class="nav-link"
				>{{ item.text }}</nuxt-link
			>
		</div>
		<div v-if="!me">
			<v-btn flat round nuxt to="/login">登录</v-btn>
			<v-btn round outline nuxt to="/register">立即注册</v-btn>
		</div>
		<div v-else>
			<v-menu offset-y>
				<v-btn flat slot="activator"
					>Hi! {{ me.username }}
					<v-icon class="ml-3"> expand_more</v-icon></v-btn
				>
				<v-list>
					<v-list-tile nuxt to="/dashboard">
						<v-list-tile-title>
							<v-icon>face</v-icon>
							我的
						</v-list-tile-title>
					</v-list-tile>
					<v-list-tile @click="onLogout">
						<v-list-tile-title>
							<v-icon> exit_to_app</v-icon>
							注销</v-list-tile-title
						>
					</v-list-tile>
				</v-list>
			</v-menu>
		</div>
	</v-layout>
</template>

<script>
	import navList from './TheNavList.js'
	import MyLogo from './Logo.vue'
	import { mapState, mapActions } from 'vuex'

	export default {
		components: {
			MyLogo
		},
		computed: {
			...mapState(['me']),
			list() {
				return navList
			}
		},
		methods: {
			...mapActions(['logout']),
			onLogout() {
				this.$router.push('/')
				this.logout()
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.nav-link {
		text-decoration: none;
		color: #C3C3C3;
		font-weight: 500;

		&.nuxt-link-exact-active {
			color: #fff;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				bottom: -5px;
				left: 0;
				right: 0;
				height: 2px;
				background: #0077FF;
			}
		}

		& + & {
			margin-left: 2.5em;
		}
	}
</style>
