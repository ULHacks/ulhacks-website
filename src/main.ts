import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from './App.vue';

library.add(faEnvelope, faInstagram);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
