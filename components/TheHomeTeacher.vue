<template>
	<v-container class="teacher" v-if="src.length > 0">
		<h2>我们的教师团队</h2>
		<v-layout row wrap justify-space-between>
			<v-flex xs12 sm6>
				<p>
					他们刻苦钻研教材，植根于三尺讲台；他们积极深入教研，解决工作困惑；他们热爱并推广阅读，润泽自己和学生的心灵；他们追求典雅端正的行为，浸润学生成长。
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
		<div
			v-swiper:mySwiper="swiperOption"
			class="mt-5 pb-5"
			@slideChange="onSlideChange"
		>
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item, i) in src" :key="i">
					<img :src="item.img" />
				</div>
			</div>
		</div>
		<div class="information">
			<h3>{{ src[activeIndex].name }}</h3>
			<p>{{ src[activeIndex].introduction }}</p>
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
	methods: {
		onSlideChange() {
			this.activeIndex = this.mySwiper.realIndex
		}
	},
	props: ['src'],
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
			activeIndex: 0
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
	position: relative;

	&::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(143deg, rgba(49, 57, 236, 1) 0%, rgba(255, 0, 97, 1) 100%);
        transition-duration: inherit;
		opacity: .5;
	}

	img {
		max-width: 100%;
	}

	& > * {
		text-align: center;
	}

	&-active {
		transform: translateY(3%);
        &::after {
            opacity: 0;
        }
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
