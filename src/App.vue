<template>

  <div id="">
    <v-app>
      <v-navigation-drawer app v-model="toggle">
            </v-navigation-drawer>

      <v-app-bar class="blue lighten-2" dark app>
   <v-app-bar-nav-icon @click="toggle=!toggle"></v-app-bar-nav-icon>
        <v-toolbar-title class="toolbarTitle">Dumster</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon >
          <v-icon>mdi-basket</v-icon><span>{{totalProduct}}</span>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>


        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

          <v-list>
            <v-list-item v-for="n in 5"
                         :key="n"
                         @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main>
        <v-container fluid>
<component :is="layout"></component>
                <router-view ></router-view>

        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>

</template>


<script>
import {mapGetters} from 'vuex'
  export default {
    name: '',
    data: () => ({
      open:false,
      toggle:false,
    }),
    computed: {
   layout(){
     const layoutName=this.$route.meta.layout || 'Default';
     return ()=>import (`@/layouts/${layoutName}.vue`)
   },
   ...mapGetters(['totalProduct'])

    },

  }

</script>

<style scoped>

  .navbar {
    background: #cf4639 !important;
  }


</style>
