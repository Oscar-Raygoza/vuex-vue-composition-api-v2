import Vue from "vue";
import VueCompositionAPI, { provide ,createApp, h } from "@vue/composition-api";

import App from "./App.vue";
import router from "./router";

import store from "./store";

Vue.use(VueCompositionAPI);

const app = createApp({
  setup(){
    provide("vuex-store", store);
  },
  router,
  store,
  render: () => h(App),
});

app.mount("#app");
