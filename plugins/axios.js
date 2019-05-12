import Vue from 'vue'
import validateError from '../error/validate.json'
const cookieparser = process.server ? require('cookieparser') : undefined

export default function({ $axios, redirect, store, req }, inject) {
    const notify = function(msg) {
        store.commit('setNotify', msg)
    }

    notify.success = text => {
        notify({
            type: 'success',
            text
        })
    }
    inject('msg', notify)
    $axios.onRequest(config => {
        if (process.client) {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers['Authorization'] = token
                // $axios.setHeader('Authorization', token)
            }
        } else if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            const token = parsed.token
            if (token) {
                config.headers['Authorization'] = token
                // $axios.setHeader('Authorization', token)
            }
        }
    })
    $axios.onResponse(res => {
        switch (res.data.code) {
            case 1:
                const err = Object.keys(res.data.message[0].constraints)[0]
                store.commit('setNotify', {
                    type: 'error',
                    text:
                        validateError[err] ||
                        res.data.message[0].constraints[err]
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
