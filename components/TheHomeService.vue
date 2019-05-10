<template>
	<div class="service-container">
		<div class="header">
			<p class="p1 mt-5">OUR SERVICE</p>
			<h2>
				了解我们<br />
				的一站式服务
			</h2>
		</div>
		<v-container class="mx-0" grid-list-xs>
			<v-layout wrap justify-center align-center>
				<v-flex xs12 sm3 class="my-5">
					<v-layout column align-center>
						<v-icon class="mb-3">ballot</v-icon>
						<h3>注册账户完成报名</h3>
						<h4>在线咨询或拨打我们的报名电话 均可完成报</h4>
					</v-layout>
				</v-flex>
				<v-flex xs1>
					<img
						class="path"
						src="http://ipic-1253962968.file.myqcloud.com/2019-04-20-Path.svg"
					/>
				</v-flex>
				<v-flex xs12 sm3 class="my-5">
					<v-layout column align-center>
						<v-icon class="mb-3">local_library</v-icon>
						<h3>6个月专业学习</h3>
						<h4>6个月为平均学习时长 根据您自身的情况可能略有不同</h4>
					</v-layout>
				</v-flex>
				<v-flex xs1>
					<img
						class="path reserve"
						src="http://ipic-1253962968.file.myqcloud.com/2019-04-20-Path.svg"
					/>
				</v-flex>
				<v-flex xs12 sm3 class="my-5">
					<v-layout column align-center>
						<v-icon class="mb-3">school</v-icon>
						<h3>通过考核 分配工作</h3>
						<h4>
							学习完成并通过我们的考核认证 我们将负责帮您推荐至您心仪的岗位
						</h4>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>

		<hr class="my-5" />
		<div class="mb-5" style="text-align: center">
			<p class="p2">如果您希望获得更详细的信息，请联系我们</p>
			<v-btn outline round nuxt to="/contact">CONTACT US</v-btn>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang='stylus' scoped>
.service-container {
	padding: 0 8%;
	background-image: url('../assets/home-service.svg');
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.header {
	& > * {
		text-align: center;
	}
}

.p1 {
	color: #dcdcdc;
	font-weight: 300;
}

.p2 {
	color: #fff;
	font-weight: 500;
	text-align: center;

	.v-btn {
		margin-top: 17px;
	}
}

hr {
	border: none;
	height: 1px;
	width: 80px;
	background: rgba(231, 235, 239, 0.5);
}

.v-icon {
	font-size: 2em;
	padding: 1em;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 50%;
}

.path {
	max-width: 100%;

	&.reserve {
		transform: rotate(180deg);
	}
}

h3, h4 {
	text-align: center;
}

h4 {
	color: rgba(135, 143, 157, 1);
}
</style>
