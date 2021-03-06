import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - Yori 优瑞',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: ['~/assets/style/app.styl'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/vuetify', '@/plugins/axios'],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        proxy: true,
        credentials: true
    },

    proxy: {
        '/api/': {
            target: 'http://localhost:3002',
            pathRewrite: { '^/api/': '' }
        }
    },

    /*
     ** Build configuration
     */
    build: {
        transpile: ['vuetify/lib'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ['~assets/style/variables.styl']
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
