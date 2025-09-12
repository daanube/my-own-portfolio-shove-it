import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// /* add fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'
// /* import all the icons in Free Solid, Free Regular, and Brands styles */
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// library.add(fas, far)

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App);

// Use plugins
app.use(vuetify);
app.use(router);

app.mount("#app");

