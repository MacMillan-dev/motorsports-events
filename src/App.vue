<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/createEvent"
      ><button @click="showModalForm">Create event</button></router-link
    >
    <router-link to="/support">Support</router-link>
  </nav>

  <router-view />
</template>
<script>
//import Modal from "./components/Modal.vue";
export default {
  // components:{Modal},
  // data(){
  //   return{
  //     showModal: false
  //   }
  // },
  // methods: {
  //   showModalForm(){
  //     this.showModal = !this.showModal
  //   }
  // }
};
</script>
<style>
body{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

nav {
  padding: 15px;
    display: flex;
    gap: 50px;
    padding-right: 50px;
    align-items: baseline;
    background-color: #3a5a40;
    justify-content: flex-end;
    position:sticky;
    top:0;
  /*box-shadow: 0 5px 10px rgba(0, 0,0, 0.9);*/
}
nav button{
  color:#fff;
  background-color:#2a9d8f;
  padding:10px;
  border:none;
  border-radius:6px;
  font-weight:700;
  cursor:pointer;
}
nav button:hover{
  transform: scale(0.97);
}
nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition: 0.4s ease-in-out;
}
nav a:hover{
  color:#ccc;
}
nav a.router-link-exact-active {
  color: #fff;
}
nav a.router-link-exact-active:hover{
  color:#ccc;
}
</style>
