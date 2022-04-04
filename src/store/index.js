import Vue from "vue";
import Vuex from "vuex";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user){
      state.user = user;
    }
  },
  actions: {
    async register_User(context, usuario) {
      const { email, password } = usuario;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
    },
    async register_Profile(context, usuario){
      const db = getFirestore();
      await addDoc(collection(db, "usuario"), usuario);
    },
    async inciar_Sesion(context, usuario){
      const { email, password } = usuario;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    },
    async get_User({commit}, usuario){
      const {email}= usuario;
      const db = getFirestore();
      const q = query(collection(db, "usuario"), where("email", "==", email));

      const querySnapshot= await getDocs(q);
      querySnapshot.forEach((doc) => {
        const user={
          id: doc.id,
          data: doc.data()
        };
        commit("SET_USER", user)
      })
    }
  }
});
