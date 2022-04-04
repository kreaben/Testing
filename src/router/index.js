import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Administracion from "../views/Administracion.vue";
import Login from "../views/Login.vue";
import Registrar from "../views/Registrar.vue";
import { getAuth } from "firebase/auth";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/administracion",
    name: "Administracion",
    component: Administracion,
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/registrar",
    name: "Registar",
    component: Registrar
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const sesionActiva = getAuth().currentUser;
  console.log(sesionActiva);
  const rutaRestringida = to.meta.restringida;

  if (sesionActiva && rutaRestringida) {
    next();
  } else if (!sesionActiva && rutaRestringida) {
    next("/home");
  }

  next();
});

export default router;
