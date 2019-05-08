<template>
	<div class="modal">
		<template v-if="!loading">
			<div id="modal-main" v-scrollbar>
				<div
					v-for="item in messages"
					class="message"
					:class="{ me: me.username === item.from }"
					:key="item.id"
				>
					<span>
						{{ item.text }}
					</span>
				</div>
			</div>
			<div class="footer">
				<input
					autofocus
					v-model="curMessage"
					placeholder="请输入内容 (按下Enter键发送)"
					@keyup.enter="onSend"
				/>
				<v-btn
					flat
					icon
					:disabled="!curMessage"
					color="primary"
					@click="onSend"
				>
					<v-icon>send</v-icon>
				</v-btn>
			</div>
		</template>
		<div v-else class="loading-mask">
			<v-progress-circular
				indeterminate
				:size="32"
				:width="4"
				color="primary"
			></v-progress-circular>
			<p>连接中...</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { Event, Realtime, TextMessage } from 'leancloud-realtime'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

export default {
	data() {
		return {
			loading: true,
			curMessage: '',
			messages: [],
			conversation: null,
			ps: null
		}
	},
	async mounted() {
		this.loading = true

		const realtime = new Realtime({
			appId: '1CvE26OkPOnyKgl9ERfW0YWK-gzGzoHsz',
			appKey: '8DbXF8lP1zRqNTcVHKEAN9Uw'
		})
		const client = await realtime.createIMClient(this.me.username)

		client.on(Event.MESSAGE, (message, conversation) => {
			this.conversation = conversation
			this.messages.push(message)
			this.$nextTick(() => {
				this.updatePs()
			})
		})

		this.conversation = await client.createTemporaryConversation({
			members: ['admin'],
			ttl: 3600
		})

		await this.fetch()
		// this.ps = new PerfectScrollbar('#modal-main')

		this.loading = false
	},
	methods: {
		async fetch() {
			this.messages = await this.conversation.queryMessages()
		},
		async onSend() {
			if (this.curMessage) {
				const msg = this.curMessage
				this.curMessage = ''
				const message = await this.conversation.send(new TextMessage(msg))

				this.messages.push(message)

				this.$nextTick(() => {
					this.updatePs()
				})
			}
		},
		updatePs() {
			const el = document.getElementById('modal-main')
			el.scrollTop = el.scrollHeight + el.clientHeight
			this.ps.update()
		}
	},
	computed: {
		...mapState(['me'])
	},
	directives: {
		scrollbar(el, binding, { context }) {
			context.ps = new PerfectScrollbar(el)
		}
	}
}
</script>

<style lang="stylus" scoped>
.modal {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}

#modal-main {
	position: relative;
	height: 90%;
	overflow: hidden;
	overscroll-behavior: none;
}

.footer {
	display: flex;
	padding: 0.5em 1em;
	border-top: 1px solid rgba(255, 255, 255, 0.3);

	input {
		flex-grow: 1;
		outline: none;
	}
}

.loading-mask {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
}

div.message {
	margin: 1em;

	&.me {
		text-align: right;

		span {
			background-color: #039BE5;
			color: #fff;
		}
	}

	span {
		display: inline-block;
		color: #555;
		background: #F5F5F5 linear-gradient(45deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.1));
		padding: 0.5em 1em;
		border-radius: 10px;
	}
}
</style>
