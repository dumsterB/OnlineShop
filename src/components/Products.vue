<template>
  <div id="product">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-container >
            <v-row>
              <v-col cols="2">
                <div class="" v-for="color of products.colors" :key="color.img">
                  <a href="#" class="">
              <img @click="changeImg(color)" :src="color.img" alt = "shoeimage">
           </a>
                </div>
              </v-col>
              <v-col cols="10">
                <div class="img-display ">
                  <div class="">
                    <img :src="currentImg" height="300" width="500" class="mainImg" alt="shoe image">
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col>
          <div class="product-content">
            <h2 class="product-title">{{products.title}}</h2>
            <a href="#" class="product-link">visit nike store</a>
            <div class="product-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div>

            <div class="product-price">
              <p class="new-price">Total count Price: <span>{{totalProduct}} $</span></p>
              <p class="new-price">New Price: <span>{{products.price}} $</span></p>
            </div>

            <div class="product-detail">
              <h2>about this item: </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente
                architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit.
                Unde.
              </p>
              <ul>
                <li class="d-flex">Color:
                     <div class="" v-for="color of products.colors" :key="color.img">
                       <a href="#" class="">
                    <v-btn small @click="changeColor(color)" :class="color.color">{{color.color}}</v-btn>
                </a>
                     </div>
                <li>Available: <span>in stock</span></li>
                <li>Category: <span>Shoes</span></li>
                <li>Shipping Area: <span>All over the world</span></li>
                <li>Shipping Fee: <span>Free</span></li>
              </ul>
            </div>

            <div class="purchase-info">
              <input type="number" min="0" v-model="products.count" >
              <button type="button" class="btn" @click="products.count++">
                    Add to Cart <i class = "fas fa-shopping-cart"></i>
                  </button>
              <button type="button" class="btn">Compare</button>
            </div>
<div class="">
  <v-btn @click="buy" class="primary">Buy</v-btn>
</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>
<script>
import {mapGetters} from 'vuex'
  export default {
    props: ['id'],
    name: '',
    data: () => ({
      sum:'',
      currentImg:``
    }),
    computed: {
      products() {
        const id = this.id
        return this.$store.getters.adById(id)
      },
      total(){
    return   this.$store.getters.total
  },
  totalProduct(){
  let sum= 0;
return  sum += this.products.count * this.products.price
},
...mapGetters(['allProducts'])

},
methods:{
  buy(){
    this.allProducts.push(this.products)
  },
      changeImg(color){
       this.currentImg=color.img
       console.log(color);
     },
     changeColor(value){
     this.currentImg=value.img
     }
},
mounted() {
  this.currentImg=this.products.colors[0].img

}
  }

</script>
<style  scoped>

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  .dark{
    background: black!important;
    color: white;
  }

  .gold{
    background:#FFD54F!important;
  }
  body {
    line-height: 1.5;
  }
  .mainImg {
    height: 350px;
    width: 250px;
  }
  img {
    width: 100px;
  }
  .img-display {
    overflow: hidden;
  }
  .img-showcase {
    display: flex;
    width: 500px;
    transition: all 0.5s ease;
  }
  .img-showcase img {
    width: 400px;
    height: 400px;
  }

  .img-item:hover {
    opacity: 0.8;
  }
  .product-content {
    padding: 2rem 1rem;
  }
  .product-title {
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 1rem 0;
  }
  .product-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 80px;
    background: #12263a;
  }
  .product-link {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #256eff;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
  }
  .product-link:hover {
    opacity: 0.9;
  }
  .product-rating {
    color: #ffc107;
  }
  .product-rating span {
    font-weight: 600;
    color: #252525;
  }
  .product-price {
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
  }
  .product-price span {
    font-weight: 400;
  }
  .last-price span {
    color: #f64749;
    text-decoration: line-through;
  }
  .new-price span {
    color: #256eff;
  }
  .product-detail h2 {
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
  }
  .product-detail p {
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
  }
  .product-detail ul {
    margin: 1rem 0;
    font-size: 0.9rem;
  }
  .product-detail ul li {
    margin: 0;
    list-style: none;
    background: url(https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png)
      left center no-repeat;
    background-size: 18px;
    padding-left: 1.7rem;
    margin: 0.4rem 0;
    font-weight: 600;
    opacity: 0.9;
  }
  .product-detail ul li span {
    font-weight: 400;
  }
  .purchase-info {
    margin: 1.5rem 0;
  }
  .purchase-info input,
  .purchase-info .btn {
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
  }
  .purchase-info input {
    width: 60px;
  }
  .purchase-info .btn {
    cursor: pointer;
    color: #fff;
  }
  .purchase-info .btn:first-of-type {
    background: #256eff;
  }
  .purchase-info .btn:last-of-type {
    background: #f64749;
  }
  .purchase-info .btn:hover {
    opacity: 0.9;
  }
  .social-links {
    display: flex;
    align-items: center;
  }
  .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #000;
    border: 1px solid #000;
    margin: 0 0.2rem;
    border-radius: 50%;
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.5s ease;
  }
  .social-links a:hover {
    background: #000;
    border-color: transparent;
    color: #fff;
  }

  @media screen and (min-width: 992px) {
    .card {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
    }
    .card-wrapper {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .product-imgs {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .product-content {
      padding-top: 0;
    }
  }

</style>
