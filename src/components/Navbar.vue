<template>
  <div>
    <b-navbar class="nav p-2" toggleable="lg" type="dark" variant="">
      <b-navbar-brand href="#">Curso AlfaWeb</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/administracion">Administracion</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/registrar">Registrar</b-nav-item>
        
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
      
      <span @click="logout" v-b-tooltip.hover title="Exit"><b-avatar icon="door-closed"> </b-avatar
      ></span>
    </b-navbar>
  </div>

</template>

<script>
import { getAuth } from '@firebase/auth';
export default {
  name: "Navbar",
  methods:{
     logout(){
        getAuth().signOut().then((response)=>{
        alert("Te has desblogueado con exito")
          user= false 
          if(this.$route.meta.requiresAuth)
          this.$router.push("/login");      
      })
    }
  }
};
</script>

<style >
.nav {
  background-color: #563d7c;
}
span {
  color: #fff;
}
</style>