<template>
	<div>
		<nuxt-link
			v-for="item in list"
			:key="item.to"
			:to="item.to"
			class="nav-link"
			>{{ item.text }}</nuxt-link
		>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						text: '首页',
						to: '/'
					},
					{
						text: '关于我们',
						to: '/about'
					},
					{
						text: '学院风采',
						to: '/students'
					}
				]
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
			margin-left: 1.5em;
		}
	}
</style>
