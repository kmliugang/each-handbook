import { createApp } from 'vue'

import 'normalize.css/normalize.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'


import App from './App.vue'
import router from './router'
import store from './store'
import directives from './directives'

const app = createApp(App);
directives(app)

app.directive('bgColor', {
    mounted(el){
        // el.style.background='grey'
    }
})


app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')

