import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Path to your Vuex store file
import router from './router.js';

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
