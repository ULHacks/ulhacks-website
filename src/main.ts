import './index.css';
import 'aos/dist/aos.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router';

library.add(faEnvelope, faInstagram);

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

AOS.init();
