/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'
const app = createApp(App)
const vuetify = createVuetify()
registerPlugins(app)
app.use(vuetify)
app.mount('#app')
