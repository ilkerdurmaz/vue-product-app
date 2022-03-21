import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";
import "./assets/loading.css";

let myApp = createApp(App);

myApp.config.globalProperties.$filters = {
  currencyTL(value) {
    return (
      parseFloat(value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
      }) + "₺"
    );
  },
};

myApp.use(store).use(router).mount("#app");
