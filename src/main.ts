import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag-next";
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)
app.use(BootstrapIconsPlugin);

app.use(VueGtag, {
  property: {
    id: "UA-217737194-1"
  }
});

app.mount('#app')
