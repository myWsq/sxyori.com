<template>
	<div>
		<form class="plain" @submit.prevent="onSubmit">
			<label>
				<input
					v-model="form.mobile"
					placeholder="请输入新的手机号"
					:class="{ invalid: error.mobile }"
					@input="error.mobile = ''"
					required
				/>
				<input
					v-model="form.smsCode"
					:class="{ invalid: error.smsCode }"
					@input="error.smsCode = ''"
					placeholder="请输入您的验证码(选填)"
				/>
				<v-btn
					@click="onSendSms"
					:disabled="!form.mobile"
					large
					round
					color="rgba(255,255,255,0.2)"
					>发送验证码</v-btn
				>
				<v-btn type="submit" class="submit" large round>
					修改绑定手机
				</v-btn>
			</label>
		</form>
		<sms-confirm-dialog ref="smsConfirm"></sms-confirm-dialog>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import validateError from '../../error/validate.json'
import SmsConfirmDialog from '@/components/DialogSmsConfirm.vue'

export default {
	head: {
		title: '安全设置'
	},
	components: {
		SmsConfirmDialog
	},
	data() {
		return {
			form: {
				mobile: '',
				smsCode: ''
			},
			error: {
				mobile: '',
				smsCode: ''
			}
		}
	},
	computed: {
		...mapState(['me'])
	},
	methods: {
		async onSubmit() {
			const { data } = await this.$axios.post('/api/user/mobile', this.form)
			if (data.code === 1) {
				const err = data.message[0]
				this.$set(this.error, err.property, true)
			} else if (!data.code) {
				this.$msg.success('修改成功')
			}
		},
		async onSendSms() {
			this.smsSendLoading = true
			this.$refs.smsConfirm.open(this.form.mobile)
			this.smsSendLoading = false
		}
	}
}
</script>

<style lang="stylus" scoped></style>
