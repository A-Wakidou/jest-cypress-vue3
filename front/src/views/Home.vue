<template>
  <div>
      <h1>Achat Figurines</h1>
      <div class="grid">
        <div class="card" v-for="items in apiDatas" :key="items.id">
            <div>
                <img :src="items.image"> 
            </div>
            <div class="card-text">
                <h2>{{items.name}}</h2>
                <p>Prix : {{items.price}} $</p>
                <p>En stock : {{items.quantity}}</p>
                <input type="number" v-model="nbAddToCart" min=1 max=30>
                <button @click="addToCart(items)">Ajouter au panier</button>
            </div>
        </div>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            apiDatas: null,
            nbAddToCart: 1,
        }
    },
    methods: {
        addToCart(item) {
            if(item.quantity<this.nbAddToCart) {
                alert('Quantité en stock insuffisante')
            }
            else {
                this.errorNbAddToCart = false
                item.nbAddToCart = this.nbAddToCart
                axios.post('http://localhost:3000/cart/addProduct', {item})
                    .then(() => {
                        this.$router.push('/cart')
                    })
            }
        }
    },
    mounted() {
        var vm = this
        axios.get('https://rickandmortyapi.com/api/character')
            .then( (response) => {
                vm.apiDatas = response.data.results
                vm.apiDatas.forEach(element => { 
                    element.price = Math.floor(Math.random() * 40)
                    element.quantity = Math.floor(Math.random() * 20)
                });
            })
    }
}
</script>

<style scoped>

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

    .error {
        color: red;
    }
    
    .grid {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 3%;
        justify-content: center;
        align-items: center;
    }

    .card {
        -webkit-box-shadow: 0px 0px 15px -6px #ffffff; 
        box-shadow: 0px 0px 15px -3px #ffffff;
        display:grid;
        grid-template-columns: 50% 50%;
        background-color: #343a40;
        color: white;
        border-radius: 5px;
    }

        .card:hover {
            transform: scale(1.05);
            transition: 0.2s
        }

        .card img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }

        .card-text {
            padding: 5%;
        }

</style>