<template>
	<v-container class="teacher">
		<h2>我们的教师团队</h2>
		<v-layout row wrap justify-space-between>
			<v-flex xs12 sm6>
				<p>
					Adwords Keyword research for beginners when you embark on
					your first PPC journey, you need to keep a small number of
					keywords at first.
				</p>
			</v-flex>
			<v-layout justify-end>
				<v-btn class="swiper-btn-prev" icon>
					<v-icon>navigate_before</v-icon>
				</v-btn>
				<v-btn class="swiper-btn-next" icon>
					<v-icon>navigate_next</v-icon>
				</v-btn>
			</v-layout>
		</v-layout>
		<div v-swiper:mySwiper="swiperOption" class="mt-5 pb-5" @slideChange="onSlideChange">
			<div class="swiper-wrapper">
				<div
					class="swiper-slide"
					v-for="(item, i) in swiperSlides"
					:key="i"
				>
					<img :src="item.img" />
				</div>
			</div>
		</div>
		<div class="information">
			<h3>{{ swiperSlides[activeIndex].name }}</h3>
			<p>{{ swiperSlides[activeIndex].introduction }}</p>
		</div>
	</v-container>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import Vue from 'vue'

	export default {
		created() {
			if (process.browser) {
				const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
				Vue.use(VueAwesomeSwiper)
			}
        },
        methods:{
            onSlideChange(){
               this.activeIndex = this.mySwiper.realIndex;
            }
        },
		data() {
			return {
				swiperOption: {
					loop: true,
					roundLengths: true,
					centeredSlides: true,
					slidesPerView: 'auto',
					spaceBetween: 40,
					grabCursor: true,
					navigation: {
						nextEl: '.swiper-btn-next',
						prevEl: '.swiper-btn-prev'
					}
                },
                activeIndex: 0,
				swiperSlides: [
					{
						name: '贺瑞1',
						introduction: '设计师',
						img:
							'http://ipic-1253962968.file.myqcloud.com/2019-04-22-Rectangle%20Copy.jpg'
					},
					{
						name: '贺瑞2',
						introduction: '设计师',
						img:
							'http://ipic-1253962968.file.myqcloud.com/2019-04-22-Rectangle%20Copy.jpg'
					},
					{
						name: '贺瑞3',
						introduction: '设计师',
						img:
							'http://ipic-1253962968.file.myqcloud.com/2019-04-22-Rectangle%20Copy.jpg'
					},
					{
						name: '贺瑞4',
						introduction: '设计师',
						img:
							'http://ipic-1253962968.file.myqcloud.com/2019-04-22-Rectangle%20Copy.jpg'
					},
					{
						name: '贺瑞5',
						introduction: '设计师',
						img:
							'http://ipic-1253962968.file.myqcloud.com/2019-04-22-Rectangle%20Copy.jpg'
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.teacher {
		min-height: 100vh;
		background: url('http://ipic-1253962968.file.myqcloud.com/2019-04-22-bg.svg') no-repeat;
	}

	.swiper-slide {
		transition-duration: 0.3s;
		transform: translateY(0);
		width: 263px;

		img {
			filter: blur(2px);
		}

		& > * {
			text-align: center;
		}

		&-active {
			img {
				filter: none;
			}

			transform: translateY(3%);
		}
	}

	.swiper-btn-prev, .swiper-btn-next {
		background: rgba(0, 119, 255, 1);
		box-shadow: 0px 15px 25px 0px rgba(0, 119, 255, 0.15);
	}

	.information {
		& > * {
			text-align: center;
		}
	}
</style>
