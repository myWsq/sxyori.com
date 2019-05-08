import Cookie from 'js-cookie';

export const state = () => {
    return {
        me: null,
        /** @type { {type, text} } */
        notify: null
    }
}

export const mutations = {
    setMe(state, me) {
        state.me = me
    },
    setNotify(state, payload) {
        if (typeof payload === 'string') {
            state.notify = {
                type: 'error',
                text: payload
            }
        } else {
            state.notify = payload
        }
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('getMe')
    },
    login({ commit }, payload) {
        return this.$axios.post('/api/auth', payload)
    },
    logout({ commit }) {
        if (process.client) {
            localStorage.removeItem('token')
            Cookie.remove('token')
        }
        commit('setMe', null)
    },
    async getMe({ commit }) {
        try {
            const { data } = await this.$axios.get('/api/auth')
            if (!data.code) {
                commit('setMe', data.body)
            }
        } catch (e) {}
    }
}
