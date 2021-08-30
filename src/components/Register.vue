<template>
  <div id="">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="register" height="400px">
            <v-form ref="form"  lazy-validation class="reg">
              <v-text-field
                v-model="name"
                :counter="10"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
              <v-btn color="error" class="mr-4" @click="submitProduct">
                Reset Form
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
checkbox:'',
email:'',
password:'',
name:'',
users:[],
    error:''
}),
methods: {
  submitProduct(){
this.$store.dispatch('submitProduct',this)
    this.email="";
    this.password = "";
    this.name = "";
  }
// async  reset() {
//   const newUser = {
//       checkbox: this.checkbox,
//       password: this.password,
//       name: this.name,
//       email:this.email
//     };
//   //  window.location.reload()
//   await  axios.post("http://localhost:3000/register", newUser)
//       .then(response => {
//         this.error = '';
//         this.$router.push('/');
//         console.log(response)
//       }, err => {
//         console.log(err.response)
//         this.error = err.response.data.error
//       })
//   }
},

}
</script>
<style lang="scss" scoped>
.register {
  padding: 30px;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.reg {
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
