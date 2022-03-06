<template>
  <div>
    <Navbar />
    <router-view />
  </div>

</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  body {
    color: white;
    background-color: #343a40;
  }

  h1 {
    text-align: center;
    margin: 4% 0;
    padding: 2%;
    -webkit-box-shadow: 0px 0px 15px -6px #ffffff; 
    box-shadow: 0px 0px 15px -3px #ffffff;
  }

  button {
    display: block;
    margin: 5% 0;
    padding: 3%;
    background-color: #343a40;
    border: 1px solid white;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: tomato;
  }
</style>
