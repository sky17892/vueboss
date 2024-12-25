import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import './assets/main.css';
import './assets/base.css';
import './assets/sweetalert2.min.css';
import './assets/im.css';
import './assets/all.min.css';


loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');