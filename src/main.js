import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './tailwind.css'

import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAnglesDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

library.add(faAnglesDown)
library.add(faAngleDown)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(autoAnimatePlugin)
app.use(MotionPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
