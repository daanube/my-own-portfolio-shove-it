import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
   icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
const app = createApp(App);

// Use plugins
app.use(vuetify);
app.use(router);

app.mount("#app");

