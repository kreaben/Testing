<template>
  <div>
    <h1>Login Usuario</h1>
    <b-container class="bv-example-row">
      <div>
        <input class="m-2" placeholder="E-mail" v-model="usuario.email" />
        <input
          class="m-2"
          placeholder="Password"
          v-model="usuario.password"
          type="password"
        />
        <b-button class="m-3" variant="success" @click="iniciarSesion"
          >Iniciar</b-button
        >

        <b-button class="m-3" variant="danger">Limpiar Formulario</b-button>
        <b-button class="m-3" variant="warning">Limpiar Validación</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["inciar_Sesion"]),
    async iniciarSesion() {
      const { email, password } = this.usuario;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password).then(
        (response) => {
          console.log("Bienvenido de vuelta");
          this.$router.push("/");
        }
      );
    },
  },
};
</script>


<style>
</style>