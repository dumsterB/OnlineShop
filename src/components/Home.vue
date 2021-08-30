<template>
  <div id="app">
    <div class="Home">
      <v-container fluid>
        <v-row>
          <v-col md="7">
            <div class="mains">
              <div class="inner">
                <div class="about">
                  <h1 class="personality">
                    We are
                    <span style="color: #64b5f6"
                          class="personality">Dumster company</span
                          >
                        </h1>
                        <h3 class="occupation">A Web Design & Developers</h3>
                        <v-divider class="hr"></v-divider>
                        <p style="text-align: left">
                          Love To Develop Programs & Elegant Websites. Feels great when
                          working project comes to an end. Work for money. Behaves well with
                          seniors as well as juniors. Like to help others. Hobbies are
                          reading, singing, watching web, surfing youtube & google.
                        </p>
                      </div>
                      <div class="buttons">
                        <a
                          class="btn1"
                          href="mailto:sahilsingh9832@gmail.com"
                          style="text-decoration: none; font-weight: bold"
                          >Contact with us</a
                        >
                        <a
                          class="btn2"
                          href="#projects"
                          style="text-decoration: none; font-weight: bold"
                          >Products </a
                        >
                      </div>
                    </div>
                  </div>
                </v-col>
            <v-col md="5">
           <div class="image">
           </div>
            </v-col>
          </v-row>
        </v-container>
          <v-container fluid grid-list-md>
              <h1 >Популярные тренды</h1>
            <v-layout row wrap>
              <v-flex
                xs6
                md6
                lg3
                v-for="product of products"
                :to="product.path"
                :key="product.id"
              >
                <v-card flat tile>
              <v-card class="mx-auto mr-5 ml-5"
                      max-width="250"
                >
                <v-img class="white--text align-end"
                       height="250px"
                       :src="product.img">
                  <v-card-title class="textCard">{{product.title}}</v-card-title>
                </v-img>
                <v-card-subtitle class="pb-0">
                  {{product.description}}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text :to="'/products/' + product.id">
                    Share
                  </v-btn>

                  <v-btn color="orange" text>
                    Explore
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
     </v-flex>
   </v-layout>
        </v-container>
      </div>
    </div>
</template>
<script>
  export default {
    name: '',
    data: () => ({
      selected: ''
    }),
    methods: {
      changeColor(color) {
        this.selected = color
      }
    },
    computed: {
      products() {
        return this.$store.getters.products
      }
    }
  }
</script>
<style lang="scss" scoped>

  .hr {
    padding: 2px !important;
    border: none;
    font-size: 1px;
    background: yellow;
    width: 500px;
  }
  .mains {
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 100px;
  }

  .inner {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .inner * {
    color: black;
    padding: 0.4rem;
  }

  .about p {
    line-height: 25px;
    font-size: 20px;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
  }

  .buttons * {
    padding: 0.6rem 1.2rem;
    margin: 0.3rem;
    border: 1px solid rgb(44, 202, 223);
    border-radius: 3px;
    font-size: 0.8rem;
  }

  .btn1 {
    background-color: #0fbcf9;
    color: #fff;
    padding: 15px;
    width: 200px;
    text-align: center;
  }

  .btn2 {
    background-color: #fff;
    color: #31c1fa;
    padding: 15px;
  }
  .personality {
    font-size: 50px;
  }
  .occupation {
    font-size: 30px;
  }
  @import url('https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Uchen&display=swap');
  .image {
    background-image: url('./../../public/2008.i101.026.voice assistant isometric composition.jpg');
    opacity: inherit;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
  }
  .description {
    align-items: center;
    justify-content: center;
  }
  .brand {
    font-size: 50px;
    font-weight: 800;
    font-family: 'Otomanopee One', sans-serif;
  }
  .desc {
    font-size: 30px;
    margin-top: 50px;
    font-weight: 600;
    color: #64b5f6;
    font-family: 'Uchen', serif;
  }
  .texts {
    color: #1e88e5;
    font-size: 15px;
    display: flex;
  }
  .textCard {
    color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .search {
    margin-top: 10px;
    font-size: 15px;
    color: red;
    margin-right: 5px;
  }
  .cardsProducts {
    padding: 5px;
    margin: 5px;
  }

</style>
