<template>
	<div>
		<form class="plain" @submit.prevent="onSubmit">
			<label>
				<input
					v-model="form.nickName"
					placeholder="请输入您的姓名"
					:class="{ invalid: error.nickName }"
					@input="error.nickName = ''"
					required
				/>
				<input
					v-model="form.wechat"
					:class="{ invalid: error.wechat }"
					@input="error.wechat = ''"
					placeholder="请输入您的微信号(选填)"
				/>
				<input
					v-model="form.qq"
					placeholder="请输入您的QQ号(选填)"
					:class="{ invalid: error.qq }"
					@input="error.qq = ''"
				/>
				<v-btn type="submit" class="submit" large round>
					提交
				</v-btn>
			</label>
		</form>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import validateError from '../../error/validate.json'

export default {
	head: {
		title: '基本信息'
	},
	data() {
		return {
			form: {
				nickName: '',
				wechat: '',
				qq: ''
			},
			error: {
				nickName: '',
				wechat: '',
				qq: ''
			}
		}
	},
	computed: {
		...mapState(['me'])
	},
	created() {
		this.form.nickName = this.me.nickName
		this.form.wechat = this.me.wechat
		this.form.qq = this.me.qq
	},
	methods: {
		async onSubmit() {
			const { data } = await this.$axios.put('/api/user', this.form)
			if (data.code === 1) {
				const err = data.message[0]
				this.$set(this.error, err.property, true)
			} else if (!data.code) {
				setTimeout(() => {
					this.$store.dispatch('getMe')
				}, 1000)
				this.$msg.success('修改成功')
			}
		}
	}
}
</script>

<style lang="stylus" scoped></style>
