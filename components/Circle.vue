<template>
	<div class="circle" :style="style"></div>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: '30px'
		},
		left: {
			type: String,
			default: '0'
		},
		top: {
			type: String,
			default: '0'
		}
	},
	computed: {
		style() {
			return {
				height: this.size,
				width: this.size,
				top: this.top,
				left: this.left
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.circle {
	position: fixed;
	background: linear-gradient(
		143deg,
		rgba(49, 57, 236, 1) 0%,
		rgba(255, 0, 97, 1) 100%
	);
	opacity: 0.2;
    border-radius 50%;
}
</style>
