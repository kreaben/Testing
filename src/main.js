import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpkIXoYQoQnN5WplcQXwbjbfe5NMxEVo0",
  authDomain: "prueba-776f8.firebaseapp.com",
  projectId: "prueba-776f8",
  storageBucket: "prueba-776f8.appspot.com",
  messagingSenderId: "1033681763468",
  appId: "1:1033681763468:web:47205fdd9d9f8f88064fa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");