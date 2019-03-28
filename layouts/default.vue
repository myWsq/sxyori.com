<template>
	<v-app dark>
		<v-toolbar app class="toolbar-container">
			<logo></logo>
			<v-spacer></v-spacer>
			<the-nav-pc></the-nav-pc>
			<v-spacer></v-spacer>
			<user-info></user-info>
		</v-toolbar>
		<v-content>
			<nuxt></nuxt>
		</v-content>
	</v-app>
</template>

<script>
	import Logo from '../components/Logo.vue'
	import UserInfo from '../components/UserInfo.vue'
	import TheNavPc from '../components/TheNavPc.vue'
	export default {
		components: {
			Logo,
			UserInfo,
			TheNavPc
		}
	}
</script>

<style lang='stylus' scoped>
	.toolbar-container >>> .v-toolbar__content {
		padding 0 8%;
	}
</style>
