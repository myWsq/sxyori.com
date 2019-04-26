import Notifications from 'vue-notification/dist/ssr.js'
import Vue from 'vue'
import validateError from '../error/validate.json'
Vue.use(Notifications)

export default function({ $axios, redirect, store }) {
    $axios.onResponse(res => {
        switch (res.data.code) {
            case 1:
                const err = Object.keys(res.data.message[0].constraints)[0]
                store.commit('setNotify', {
                    type: 'error',
                    text: validateError[err] || res.data.message[0].constraints[err]
                })
                break
            case 4:
                store.commit('setNotify', '图形验证码错误, 点击刷新')
                break
            case 5:
                store.commit('setNotify', '验证码无效')
                break
            default:
                store.commit('setNotify', res.data.message)
        }
    })
}
