<template>
	<v-container fill-height>

        <bg-circle top='10%' left='30%' size="50px"></bg-circle>
        <bg-circle top='20%' left='10%' size="500px"></bg-circle>
        <bg-circle top='20%' left='60%' size="800px"></bg-circle>
        <div class="img-mask"></div>
		<div class="text">
			<p>GET IN TOUCH</p>
			<h2 class="mb-5">联系我们</h2>
			<p class="mb-3">
				如您有任何疑问, 可通过以下方式或点击右下角的按钮发起在线聊天咨询我们.<br />
				如您有意愿参加优瑞培训, 请与我们联系完成报名.
			</p>
			<h3 class="mb-3">Send your request</h3>
			<p>
				<v-icon>email</v-icon>
				<a href="mailto:3420256840@qq.com">3420256840@qq.com</a>
			</p>
			<p>
				<v-icon>phone</v-icon>
				<span>152-3409-7981 陈优老师</span>
			</p>
			<p>
				<v-icon>phone</v-icon>
				<span>176-9601-1338 贺瑞老师</span>
			</p>

			<p><v-icon>location_on</v-icon> 太原市体育南路君泰时代公馆B座16层</p>
		</div>

	</v-container>
</template>

<script>
export default {
    head:{
        title:'联系我们'
    },
}
</script>

<style lang="stylus" scoped>
.img-mask {
	width: 550px;
	height: 900px;
	background-image: url('http://ipic-1253962968.file.myqcloud.com/2019-05-08-desktop-2325627_1920.jpg');
	position: fixed;
	border-radius: 0px 0px 280px 280px;
	transform: rotate(57deg);
	top: -100px;
	right: -50px;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			143deg,
			rgba(49, 57, 236, 1) 0%,
			rgba(255, 0, 97, 1) 100%
		);
		border-radius: 0px 0px 280px 280px;
		opacity: 0.5;
	}
}

.text {
	position: relative;
	display: flex;
	flex-direction: column;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

p {
    color: #fff;
}

a {
	color: inherit;
}
</style>

