<template>
	<v-app dark>
		<v-toolbar fixed class="toolbar-container" app>
			<the-nav-mobile
				v-if="$vuetify.breakpoint.smAndDown"
			></the-nav-mobile>
			<the-nav-pc v-else></the-nav-pc>
		</v-toolbar>
		<v-content id="top" class="content" app>
			<nuxt></nuxt>
		</v-content>
		<v-footer class="mt-5">
			<v-container>
				<v-layout justify-space-between>
					<my-logo></my-logo>
					<div>
						<nuxt-link to="/dashboard">控制台</nuxt-link>
						<a to="javascript:;" @click="onScrollTop">回到顶部</a>
					</div>
				</v-layout>
			</v-container>
		</v-footer>
		<v-snackbar v-model="notifyVisible" top :color="notify && notify.type">
			{{notify && notify.text}}
			<v-btn flat @click.native="notifyVisible = false"
				>CLOSE</v-btn
			>
		</v-snackbar>
        <the-chat-btn></the-chat-btn>
	</v-app>
</template>

<script>
	import TheNavPc from '../components/TheNavPc.vue'
	import TheNavMobile from '../components/TheNavMobile.vue'
    import MyLogo from '../components/Logo.vue'
    import TheChatBtn from '../components/TheChatBtn.vue';

	import { mapState, mapMutations } from 'vuex'
	export default {
		components: {
			TheNavPc,
			TheNavMobile,
            MyLogo,
            TheChatBtn
		},
		computed: {
			...mapState(['notify']),
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
	.toolbar-container >>> .v-toolbar__content {
		padding: 20px 8%;
	}

	.v-footer {
		height: auto !important;

		a {
			text-decoration: none;
			color: #878F9D;
		}

		a + a {
			margin-left: 1em;
		}
	}
</style>
