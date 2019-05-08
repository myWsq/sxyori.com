<template>
	<div>
        <bg-circle top='10%' left='30%' size="50px"></bg-circle>
        <bg-circle top='20%' left='50%' size="600px"></bg-circle>
        <bg-circle top='80%' left='40%' size="80px"></bg-circle>
		<div class="top">
			<v-container>
				<h3>{{ me.nickName }}</h3>
				<p>{{ me.username }}</p>
			</v-container>
		</div>
		<div class="bottom">
			<v-container>
				<div>
					<nuxt-link to="/dashboard" class="nav-link"
						>基本信息</nuxt-link
					>
					<nuxt-link to="/dashboard/secure" class="nav-link"
						>安全设置</nuxt-link
					>
					<nuxt-link to="/dashboard/learn" class="nav-link"
						>学习进度</nuxt-link
					>
				</div>
				<nuxt-child></nuxt-child>
			</v-container>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState(['me'])
		}
	}
</script>

<style lang="stylus" scoped>
	.top {
		height: 30vh;
		background: linear-gradient(226deg, rgba(41, 42, 46, 1) 0%, rgba(31, 32, 36, 1) 100%);

		& >>> .container {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}

		h3 {
			font-weight: 400;
			font-size: 1.3em;
			color: rgba(220, 220, 220, 1);
		}

		p {
			margin-bottom: 0;
			color: rgba(79, 80, 89, 1);
		}
	}

	.bottom {
		background: rgba(41, 42, 46, 1);
        position relative;
	}

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
