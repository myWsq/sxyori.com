<template>
	<v-container grid-list-xl>
		<v-layout row wrap justify-space-between align-center class="inner">
			<v-flex xs12 sm9>
				<h3>现在报名可免费试学一个月</h3>
				<p>
					更多优惠信息请阅读我们的最新公告，您可以点击右下角的咨询按钮发起在线咨询。
				</p>
			</v-flex>
			<v-flex xs12 sm3>
				<v-btn large block round class="submit" nuxt to="/register">立即注册</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {}
</script>

<style lang="stylus" scoped>
	h3 {
		font-size: 40px;
	}

	.inner {
		padding: 0 8%;
	}

	.submit {
		background-color: rgba(0, 119, 255, 1) !important;
		box-shadow: 0px 15px 25px 0px rgba(0, 119, 255, 0.15) !important;
	}
</style>

