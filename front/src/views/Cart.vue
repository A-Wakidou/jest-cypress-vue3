<template>
  <div>
    <h1>Panier</h1>
    <div class="cart">
      <div class="products">
        <h2>Produits :</h2>
        <div class="products-grid" v-for="datas in data" :key="datas.id">
          <div>
            <img :src="datas.product_image" alt="">
          </div>
          <div>
            <p>{{datas.product_name}}</p> 
            <p>Nombre : {{datas.product_quantity}}</p>
            <p>Prix : {{datas.product_price}}€</p>
            <p>Total : {{datas.product_price*datas.product_quantity}}€</p>
            <button @click="deleteProduct(datas.id)">Supprimer</button>
          </div>
        </div>
      </div>
      <div class="text-cart">
        <h2>Total :</h2>
        <p>Prix total : {{totalPrice}}€</p>
        <p class="delivery">Livraison offerte</p>
        <button>Valider </button>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: '',
      totalPrice: 0
    }
  },
  methods: {
    deleteProduct(id) {
      console.log(id)
      axios.post('http://localhost:3000/cart/deleteProduct', {id:id})
        .then( this.$router.go() )
    }
  },
  mounted() {
    // var vm = this
    axios.get('http://localhost:3000/cart/getCart')
      .then(response => {
        this.data = response.data.response
        for(var i=0; i<this.data.length; i++) {
          this.totalPrice += this.data[i].product_price*this.data[i].product_quantity
        }
      })
  }
}
</script>

<style scoped>

  .cart {
    padding: 0 10%;
    margin: 0 5%;
    display: grid;
    grid-template-columns: 40% 50%;
    grid-gap: 10%;
  }

  .products div {
    margin: 3% 0;
  }

  .products-grid {
    display:grid;
    grid-template-columns: 50% 50%;
    background-color: #343a40;
    color: white;
    border-radius: 5px;
  }

    .products-grid img {
      width: 100%;
      height: 100%;
    }

    .products-grid div:nth-child(2) {
      padding: 5%;
    }

    .delivery {
      color: rgb(139, 139, 139)
    }

</style>