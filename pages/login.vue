<template>
	<div class="form-bg">
		<v-container>
			<header>
				<p>YORI</p>
				<h2>账户登录</h2>
			</header>
			<form @submit.prevent="onSubmit">
				<v-layout column align-center>
					<input
						id="login-username"
						v-model="form.username"
						@input="error.username = ''"
						required
						placeholder="请输入您的用户名"
						:class="{ invalid: error.username }"
					/>
					<input
						required
						id="login-password"
						@input="error.password = ''"
						v-model="form.password"
						type="password"
						placeholder="请输入您的密码"
						:class="{ invalid: error.password }"
					/>
					<v-btn large round type="submit" class="submit" block>
						立即登录
					</v-btn>
				</v-layout>
				<p>还没账户? <nuxt-link to="/register">立即注册</nuxt-link></p>
			</form>
		</v-container>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Cookie from 'js-cookie'

export default {
	head: {
		title: '登录'
	},
	middleware: 'noAuth',
	data() {
		return {
			form: {
				username: '',
				password: ''
			},
			error: {
				username: '',
				password: ''
			}
		}
	},
	computed: {
		from() {
			return this.$route.query.from || '/'
		}
	},
	methods: {
		...mapActions(['login', 'getMe']),
		async onSubmit() {
			const { data } = await this.login(this.form)
			if (data.code === 1) {
				const err = data.message[0]
				this.$set(this.error, err.property, true)
			} else if (!data.code) {
				const token = data.body
				window.localStorage.setItem('token', token)
				Cookie.set('token', token)
				await this.getMe()
				this.$router.push(this.from)
			}
		}
	}
}
</script>

<style lang="stylus" scoped></style>
