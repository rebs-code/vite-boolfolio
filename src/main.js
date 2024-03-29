import { createApp } from 'vue';
//file di partenza stili progetto
import './assets/scss/style.scss';
//file di partenza Vue
import App from './App.vue';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import the router instance
import { router } from './router';

createApp(App).use(router).mount('#app');
