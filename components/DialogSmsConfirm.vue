<template>
	<v-layout row justify-center>
		<v-dialog v-model="dialog" persistent max-width="500">
			<v-card>
				<v-card-title class="headline">确认发送</v-card-title>
				<v-card-text>
					<p>
						您将发送验证码短信至: <strong>{{ mobile }}</strong>
					</p>
					<div class="captcha" @click="getCaptchaSrc">
						<v-progress-circular
							v-if="!captchaSrc"
							indeterminate
							color="primary"
						></v-progress-circular>
						<img :src="captchaSrc" v-else />
					</div>
					<v-text-field
						v-model="captchaCode"
						label="请输入图中字符"
					></v-text-field>
				</v-card-text>
				<v-card-actions class="pa-3">
					<v-spacer></v-spacer>
					<v-btn flat @click.native="dialog = false">取消</v-btn>
					<v-btn
						color="primary"
						:disabled="!captchaCode"
						@click.native="onSubmit"
						>确定</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				dialog: false,
				mobile: '',
				captchaCode: '',
				captchaSrc: '',
				submitLoading: false
			}
		},
		methods: {
			...mapMutations(['setNotify']),
			open(mobile) {
				this.getCaptchaSrc()
				this.dialog = true
				this.mobile = mobile
				this.captchaCode = ''
				this.submitLoading = false
			},
			async getCaptchaSrc() {
				this.captchaSrc = ''
				const { data } = await this.$axios.get('/api/auth/sms/captcha')
				if (!data.code) {
					this.captchaSrc = data.body
				}
			},
			async onSubmit() {
				this.submitLoading = true
				const { data } = await this.$axios.post('/api/auth/sms/', {
					mobile: this.mobile,
					captchaCode: this.captchaCode
				})
				if (!data.code) {
                    this.submitLoading = false
                    this.dialog = false;
					this.setNotify({
						type: 'success',
						text: '发送成功'
					})
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.captcha {
		background: #fff;
		cursor: pointer;
		padding: 1em;
	}
</style>
