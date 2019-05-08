import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import Dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import fromNow from 'dayjs/plugin/relativeTime'
import Circle from '../components/Circle.vue';

Dayjs.locale('zh-cn')
Dayjs.extend(fromNow)
Vue.prototype.$day = Dayjs
Vue.component('bg-circle', Circle)

Vue.use(Vuetify, {
    theme: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
    }
})
