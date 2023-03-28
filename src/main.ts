import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import roteador from "@/roteador";

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(roteador)
    .mount("#app");
