<template>
	<div class="classroom mb-5">
		<div class="header mt-5">
			<h2>不仅仅是教室</h2>
			<p>
				我们有精致的教学环境和现代化的教学设备<br />这里是教室,
				同时也是您的温馨小家
			</p>
		</div>
		<v-container grid-list-xl>
			<v-layout row wrap>
				<v-flex xs12 sm4 class="column">
					<div class="card">
						<img
							src="http://ipic-1253962968.file.myqcloud.com/2019-04-22-Img.jpg"
						/>
						<div class="title">
							<h4>
								标题
							</h4>
							<p>说明</p>
							<hr />
						</div>
					</div>
					<div class="card">
						<img
							src="http://ipic-1253962968.file.myqcloud.com/2019-04-22-Img-5.jpg"
						/>
						<div class="title">
							<h4>
								标题
							</h4>
							<p>说明</p>
							<hr />
						</div>
					</div>
				</v-flex>
				<v-flex xs12 sm4>
					<div class="card">
						<img
							src="http://ipic-1253962968.file.myqcloud.com/2019-04-22-Img-3.jpg"
						/>
						<div class="title">
							<h4>
								标题
							</h4>
							<p>说明</p>
							<hr />
						</div>
					</div>
				</v-flex>
				<v-flex xs12 sm4 class="column">
					<div class="card">
						<img
							src="http://ipic-1253962968.file.myqcloud.com/2019-04-22-Img-2.jpg"
						/>
						<div class="title">
							<h4>
								标题
							</h4>
							<p>说明</p>
						</div>
						<hr />
					</div>
					<div class="card">
						<img
							src="http://ipic-1253962968.file.myqcloud.com/2019-04-22-Img-6.jpg"
						/>
						<div class="title">
							<h4>
								标题
							</h4>
							<p>说明</p>
						</div>
						<hr />
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" scoped>
	.classroom {
		background: url('http://ipic-1253962968.file.myqcloud.com/2019-04-20-bg.svg') no-repeat;
		background-position: 115px 69px;
	}

	.header {
		h2 {
			position: relative;
			margin-bottom: 10px;

			&::after {
				position: absolute;
				left: 50%;
				top: -9px;
				transform: translateX(-50%);
				content: '';
				height: 2px;
				width: 48px;
				background: #0077FF;
			}
		}

		p {
			color: #DCDCDC;
		}

		& > * {
			text-align: center;
		}
	}

	.card {
		margin-bottom: 10px;

		img {
			width: 100%;
			border-radius: 3px;
            mask-image: linear-gradient(143deg,rgba(49,57,236,1) 0%,rgba(255,0,97,1) 100%);
		}

		.title {
			h4 {
				font-size: 16px;
				color: #fff;
				font-weight: bold;
				line-height: 24px;
				margin-top: 10px;
			}

			p {
				font-size: 14px;
				color: #878F9D;
				margin-bottom: 10px;
			}
		}

		hr {
			border: none;
			height: 1px;
			background: rgba(255, 255, 255, 0.3);
		}
	}
    .column {
        display flex;
        flex-direction : column;
        justify-content space-between;
    }
</style>
