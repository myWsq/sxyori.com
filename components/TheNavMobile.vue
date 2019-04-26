<template>
	<v-layout>
		<v-layout justify-space-between align-center>
			<my-logo></my-logo>
			<div>
				<v-btn flat icon @click="menuVisible = !menuVisible">
					<v-icon>{{ menuVisible ? 'clear' : 'menu' }}</v-icon>
				</v-btn>
			</div>
		</v-layout>
		<v-fade-transition>
			<div class="menu" v-show="menuVisible" @click="menuVisible = false">
				<v-toolbar>
					<v-layout justify-space-between align-center>
						<my-logo></my-logo>
						<div>
							<v-btn
								flat
								icon
								@click="menuVisible = !menuVisible"
							>
								<v-icon>{{
									menuVisible ? 'clear' : 'menu'
								}}</v-icon>
							</v-btn>
						</div>
					</v-layout>
				</v-toolbar>

				<v-list>
					<v-list-tile
						v-for="(item, i) in list"
						:key="i"
						nuxt
						:to="item.to"
					>
						<v-list-tile-title>{{ item.text }}</v-list-tile-title>
					</v-list-tile>
					<v-divider class="mb-3 mt-1"></v-divider>
					<v-list-tile>
						<v-btn flat block round nuxt to="/login">登录</v-btn>
					</v-list-tile>
					<v-list-tile>
						<v-btn outline block round nuxt to="/register"
							>注册</v-btn
						>
					</v-list-tile>
				</v-list>
			</div>
		</v-fade-transition>
	</v-layout>
</template>

<script>
	import navList from './TheNavList.js'
	import MyLogo from './Logo.vue'

	export default {
		data() {
			return {
				menuVisible: false
			}
		},
		components: {
			MyLogo
		},
		computed: {
			list() {
				return navList
			}
		},
		methods: {}
	}
</script>

<style lang="stylus" scoped>
	.menu {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 100vh;

		.v-list {
			background: linear-gradient(226deg, #292a2e 0%, #1f2024 100%) !important;
		}
	}
</style>
