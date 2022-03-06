<template>
  <div class="navbar">
    <div class="logo"> <router-link id="home-link" to="/"> <img src="@/assets/logo.png" alt="">  </router-link> </div>
    <div class="shopping-cart"> <router-link id="cart-link" to="/cart"> <img src="@/assets/cart.svg" alt=""> </router-link></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

  .navbar {
    text-align: center;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    border: 1px solid whitesmoke;
    height: 75px;
  }

  .logo img {
    width: 5%
  }

  .shopping-cart img {
    width: 6%;
  }

  img {
    cursor: pointer;
  }

</style>