<template>
	<div class="form-bg">
		<v-container>
			<header>
				<p>YORI</p>
				<h2>注册账户</h2>
			</header>
			<form @submit.prevent="onSubmit">
				<v-layout column align-center>
					<input
						v-model="form.username"
						@input="error.username = ''"
						required
						placeholder="请输入您的用户名"
						:class="{ invalid: error.username }"
					/>
					<input
						v-model="form.nickName"
						@input="error.nickName = ''"
						required
						placeholder="请输入您的姓名"
						:class="{ invalid: error.nickName }"
					/>

					<input
						required
						@input="error.password = ''"
						v-model="form.password"
						type="password"
						placeholder="请输入您的密码"
						:class="{ invalid: error.password }"
					/>
					<v-layout align-center style="width:100%">
						<input
							required
							type="tel"
							@input="error.mobile = ''"
							v-model="form.mobile"
							placeholder="请输入您的手机号"
							:class="{ invalid: error.mobile }"
						/>
						<v-btn
							@click="onSendSms"
							:disabled="!form.mobile"
							large
							round
							color="rgba(255,255,255,0.2)"
							>发送验证码</v-btn
						>
					</v-layout>
					<input
						required
						@input="error.smsCode = ''"
						v-model="form.smsCode"
						placeholder="请输入您收到的验证码"
						:class="{ invalid: error.smsCode }"
					/>
					<v-btn large round type="submit" class="submit" block>
						立即注册
					</v-btn>
				</v-layout>
				<p>已有账户? <nuxt-link to="/login">立即登录</nuxt-link></p>
			</form>
		</v-container>
		<sms-confirm-dialog ref="smsConfirm"></sms-confirm-dialog>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import SmsConfirmDialog from '../components/DialogSmsConfirm.vue'
export default {
	head: {
		title: '注册'
	},
	components: {
		SmsConfirmDialog
	},
	data() {
		return {
			form: {
				username: '',
				password: '',
				nickName: '',
				mobile: '',
				smsCode: '',
				gender: 1
			},
			error: {
				username: '',
				password: '',
				nickName: '',
				mobile: '',
				smsCode: ''
			},
			smsSendLoading: false
		}
	},
	methods: {
		async onSendSms() {
			this.smsSendLoading = true
			this.$refs.smsConfirm.open(this.form.mobile)
			this.smsSendLoading = false
		},
		async onSubmit() {
			const { data } = await this.$axios.post('/api/user', this.form)
			if (data.code === 1) {
				const err = data.message[0]
				this.$set(this.error, err.property, true)
			} else if (!data.code) {
                this.$notify.success('注册成功');
				this.$router.push('/login')
			}
		}
	}
}
</script>

<style lang="stylus" scoped></style>
