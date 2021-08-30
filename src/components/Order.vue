<template>
  <div id="">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="register" height="300px">
            <v-form ref="form"  lazy-validation class="reg">
              <v-text-field
                  v-model="name"
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
      <br>
<div class="d-flex justify-center" v-for="(item,index) of users" :key="item.id">
 <p class="mr-10">name:  {{item.name}}</p>
   <p>password:  {{item.password}}</p>
  <p class="ml-10">value: {{item.value}}</p>
  <v-btn class="warning ml-10"  small @click="edit(item)">edit</v-btn>
  <v-btn class="red ml-10"  dark small @click="remove(index)">delete</v-btn>

</div>
      <v-divider></v-divider>

      <pre>{{users}}</pre>

      <div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    password:'',
    name:'',
    users:[],
  }),
  methods: {
    loginUser(){
   const newUser={
     name:this.name,
     password:this.password,
     value:false,
     id:Date.now()
   }
this.users.push(newUser)
    },
    edit(item){
  const el= this.users.find((el)=>el.id===item.id)
      console.log(el)
    },
    remove(index){
     this.users.splice(index,1)
    }
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
