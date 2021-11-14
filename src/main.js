import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/SpaceTourism";

createApp(App).use(store).use(router).mount("#app");
