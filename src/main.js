import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";


//import '.../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '.../bootstrap';
//import '.../sass/main.scss';

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
