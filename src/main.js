import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//  1. 导入createPinia
import { createPinia } from 'pinia'

// 2. 执行方案得到实例
const pinia = createPinia()

// 3， 将实例添加到app应用中
createApp(App).use(pinia).mount('#app')
