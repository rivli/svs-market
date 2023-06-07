import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import icon from './components/icons/icon.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('iconic', icon)

app.mount('#app')
