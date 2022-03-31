import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/main.js";

import "./assets/css/tailwind.css";
import "./assets/css/index.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
