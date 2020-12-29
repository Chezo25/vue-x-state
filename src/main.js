const { createApp } = require('vue');
import App from "./App.vue";
import store from "./store";

createApp({
    store,
})(App).mount("#app");