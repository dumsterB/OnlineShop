<template>
  <div id="">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="register" height="300px">
            <v-form ref="form"  lazy-validation class="reg">
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

              <v-btn color="error" class="mr-4" @click="loginUser">
                Reset Form
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
      <div>
        <h1>email:abdc@gmail.com</h1> <br>
        <h1>password:123</h1>
      </div>
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
  loginUser(){
      this.$store.dispatch('loginUser',{
        email:this.email,
        password:this.password
      })

    }
// async  reset() {
//   const newUser = {
//       password: this.password,
//       email:this.email
//     };
//   //  window.location.reload()
//     axios.post("http://localhost:3000/login", newUser)
//       .then(res=>{
// if(res.status===200){
// localStorage.setItem('token',res.data.token);
// this.$router.push('/')
// }
//       },err=>{
//         console.log(err.response);
//         this.error=err.response.data.err
//       })
//   }
}
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
