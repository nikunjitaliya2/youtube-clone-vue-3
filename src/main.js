import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/dist/quasar.css'

const app = createApp(App)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})


app.use(createPinia())
app.use(router)

app.mount('#app')