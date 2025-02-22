import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from '../src/plugins/fontawesome'


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
