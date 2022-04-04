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
    ...mapActions(["inciar_Sesion", "get_User"]),
    async iniciarSesion(){
     
     try {
       const {usuario}= this;
       await this.inciar_Sesion(usuario);
       await this.get_User(usuario)
       this.usuario.mail=""
       this.usuario.password=""
       alert("usuario identificado")
     } catch (error) {
       alert("algo salio mal")
     }
   }
  }
}  
</script>