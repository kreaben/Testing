import Vue from "vue";
import Vuex from "vuex";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { querystring } from "@firebase/util";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    curso: []
  },
  mutations: {
    SET_USER(state, user){
      state.user = user;
    },
    SET_CURSOS(state, curso){
      state.curso= curso
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
    },
     get_Cursos({commit}) {
       const { curso }= state
       if (curso.lenght === 0){
      const db= getFirestore();
      const q = query(collection(db, curso));
      onSnapshot(q, (querySnapshot)=>{
        const curso= [];
        querySnapshot.forEach(doc =>{
          const curso = {id: doc.id, data: doc.data()}
        });
        commit("SET_CURSOS", curso)
      })
    }
  },
  
  },
  getters:{
    totalDeCupos(state){
      const curso= this;
      return curso.reduce((a,b)=>{
        return a + b.data.cupos
      },0)
      }
    }
});
