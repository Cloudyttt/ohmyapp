import { createApp } from "vue";
import App from "./App.vue";
import router from "./config/router";
import '~/assets/style/index.stylus'
// import 'vant/lib/index.css';

const app = createApp(App);

app.use(router);

app.mount("#app");
