<template>
  <div>
    <h1>Registrar Usuario</h1>
    <b-container class="bv-example-row">
      <div>
        <input v-model="usuario.email" class="m-2" placeholder="E-mail" />
        <input
          v-model="usuario.password"
          class="m-2"
          placeholder="Password"
          type="password"
        />

        <b-button @click="registrar_Usuario" class="m-3" variant="success"
          >Registrar</b-button
        >
        <b-button class="m-3" variant="danger">Limpiar Formulario</b-button>
        <b-button class="m-3" variant="warning">Limpiar Validación</b-button>
      </div>
    </b-container>
    <span v-if="error">{{error}}</span>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
      error : null,
    };
  },
  methods: {
    ...mapActions(["register_User", "register_Profile"]),
    async registrar_Usuario(){
      try {
        const { usuario }= this;
        await this.register_User(usuario);
        delete usuario.password;
        await this.register_Profile(usuario);
        this.usuario.email="";
        this.usuario.password="";
        this.error = "";
        alert("Usuario creado con exito");
      } catch (error) {
        alert("algo salio mal")
        this.error= error.code.split("auth/")[1].replaceAll("-", " ")
      }
    },
  },
};
</script>

<style>
</style>