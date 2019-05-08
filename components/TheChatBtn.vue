<template>
	<div>
		<v-btn
			color="primary"
			large
			icon
			class="chat-btn"
			@click="visible = !visible"
		>
			<v-icon>{{ visible ? 'clear' : 'forum' }}</v-icon>
		</v-btn>
		<v-slide-y-transition>
			<div v-show="visible" class="chat-main">
				<header>
					<h1>你好! 👋 {{ me && me.nickName }}</h1>
					<v-btn icon class="close-btn" @click="visible = false">
						<v-icon>clear</v-icon>
					</v-btn>
				</header>
				<div class="need-login" v-if="!me">
					<h2>您需要登录后才能发起对话</h2>
					<v-btn color="primary" nuxt to="/login" @click="visible = false" large
						>登录</v-btn
					>
				</div>
				<the-chat-modal v-else></the-chat-modal>
			</div>
		</v-slide-y-transition>
	</div>
</template>

<script>
import TheChatModal from './TheChatModal.vue'
import { mapState } from 'vuex'
export default {
	components: {
		TheChatModal
	},
	data() {
		return {
			visible: false
		}
	},
	computed: {
		...mapState(['me'])
	}
}
</script>

<style lang="stylus" scoped>
.chat-btn {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 1;
	width: 60px;
	height: 60px;

	& >>> .v-btn__content {
		.v-icon {
			font-size: 2em;
		}
	}
}

.chat-main {
	position: fixed;
	display: flex;
	flex-direction: column;
	height: 600px;
	width: 350px;
	bottom: 100px;
	right: 40px;
	z-index: 2;
	background: #292a35;
	box-shadow: 0 0 1px 1px $primary-color;
	border-radius: 32px;
	overflow: hidden;

	@media screen and (max-width: 900px) {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
        border-radius: 0;
	}
}

.need-login {
	padding: 1em 2em;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.close-btn {
	position: absolute;
	top: 10px;
	right: 10px;
}

header {
	background: $primary-color linear-gradient(-45deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.3));
	padding: 1em 2em;
	position: relative;
}

h1 {
	font-size: 2em;
}

h2 {
	font-size: 1.5em;
}
</style>
