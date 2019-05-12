<template>
	<v-app dark>
		<div class="toolbar-container">
			<the-nav-mobile v-show="$vuetify.breakpoint.smAndDown"></the-nav-mobile>
			<the-nav-pc v-show="!$vuetify.breakpoint.smAndDown"></the-nav-pc>
		</div>
		<v-content id="top" class="content" app>
			<nuxt></nuxt>
		</v-content>
		<v-footer class="mt-3">
			<v-container>
				<v-layout justify-space-between class="main-content">
					<my-logo></my-logo>
					<div>
						<nuxt-link
							to="/dashboard"
							v-if="me && (me.role === 'ADMIN' || me.role === 'SUPER_ADMIN')"
							>控制台</nuxt-link
						>
						<a to="javascript:;" @click="onScrollTop">回到顶部</a>
					</div>
				</v-layout>
			</v-container>
		</v-footer>
		<v-snackbar v-model="notifyVisible" top :color="notify && notify.type">
			{{ notify && notify.text }}
			<v-btn flat @click.native="notifyVisible = false">CLOSE</v-btn>
		</v-snackbar>
		<the-chat-btn></the-chat-btn>
	</v-app>
</template>

<script>
import TheNavPc from '../components/TheNavPc.vue'
import TheNavMobile from '../components/TheNavMobile.vue'
import MyLogo from '../components/Logo.vue'
import TheChatBtn from '../components/TheChatBtn.vue'

import { mapState, mapMutations } from 'vuex'
export default {
	components: {
		TheNavPc,
		TheNavMobile,
		MyLogo,
		TheChatBtn
	},
	computed: {
		...mapState(['notify', 'me']),
		notifyVisible: {
			get() {
				return !!this.notify
			},
			set(newValue) {
				if (!newValue) {
					this.setNotify(null)
				}
			}
		}
	},
	methods: {
		...mapMutations(['setNotify']),
		onScrollTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}
	}
}
</script>

<style lang='stylus' scoped>
.toolbar-container {
	display: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;
}

.v-footer {
	height: auto !important;
	z-index: 1;

	a {
		text-decoration: none;
		color: #878F9D;
	}

	a + a {
		margin-left: 1em;
	}
}
</style>
