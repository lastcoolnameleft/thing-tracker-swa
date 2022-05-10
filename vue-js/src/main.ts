import { createApp } from "vue";
import { createPinia } from "pinia";
import { Config } from "./config";

import App from "./App.vue";
import router from "./router";
import 'bootstrap/scss/bootstrap.scss'

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Maybe not the best way to do this, but it works.
for (const key in Config) {
    app.config.globalProperties[key] = Config[key];
};

app.mount("#app");
