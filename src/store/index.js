import Vue from "vue";
import Vuex from "vuex";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async registrar_Usuario(context, usuario) {
      const { email, password } = usuario;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado con exito!");
    }
  }
});
