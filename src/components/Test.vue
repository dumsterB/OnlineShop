<template>
  <div id="app">
    <div class="d-flex ">
      <v-btn @click="Start">Start</v-btn>
      <v-btn class="primary ma-5" @click="filter('first')">First</v-btn>
      <v-btn class="warning ma-5" @click="filter('second')">Second</v-btn>
      <v-btn class="danger ma-5" @click="filter('third')">Third</v-btn>
    </div>
    All DATA

    <pre>{{ newData }}</pre>
    <div class="text-center ">
      <h1>next option</h1>
      <v-card class="pa-10 mt-5 align-center" elevation="0" width="600">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
          ></v-text-field>

          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>

          <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Item"
              required
          ></v-select>

          <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
          ></v-checkbox>

          <v-btn
              color="success"
              class="mr-4"
              :disabled="!disable"
              @click="createUser"
          >
            Create
          </v-btn>

        </v-form>
      </v-card>
      <v-list>
        <v-card v-for="item of allData" :key="item.title">
          <p>{{ item.title }}</p><br>
          <p>{{ item.email }}</p><br>
          <p>{{ item.chekbox }}</p>
        </v-card>
      </v-list>
    </div>
    <div>
      <div class="text-center ">
        <h1>next option</h1><br>
        <div>
          <p v-for="(el, i) in list" :key="i">
            {{ el.name }} - <small>{{ el.price }}руб.</small>
            <v-btn @click="minus(el)">-</v-btn>
            <b>{{ el.count }}</b>
            <v-btn @click="plus(el)">+</v-btn>
            <b>{{ el.sum }} руб.</b>
          </p>
          <br>
          <b>Всего: {{ totalPrice }} руб.</b>
        </div>
      </div>

    </div>
    <div class="text-center ">
      <h1>next option</h1><br>
      <div v-for=" item of list1" :key="item.task" class="d-flex" style="">
        <p :class="[!item.checkbox ? 'grayColor' : 'own']" @click="fun2(item)">{{ item.task }}</p>
        <v-text-field v-if="item.checkbox">{{ item.task }}</v-text-field>
        <v-text-field
            v-model="item.checkbox"
            v-if="!item.checkbox"
            type="checkbox"
            :label="item.task"
            @click="checkboxDetermine(item)"
            required
        ></v-text-field>
      </div>
    </div>
    <div class="text-center ">
      <h1>next option</h1><br>
      <div v-for=" item of assigments" :key="item.answer" class="d-flex" style="">
        {{ item.answer }} ) <p>{{ item.question }}</p>
        <v-text-field v-model="item.val" label="Ответ"></v-text-field>
        <v-btn @click="isTrue(item)">Проверить?</v-btn>
      </div>
    </div>
    <div class="text-center ">
      <h1>next option</h1><br>
      <div v-for=" item of tests" :key="item.right" class="d-flex" style="">
        <v-card class="pa-5">
          <h4 v-text="item.question"></h4>
          <v-radio-group v-model="radioGroup">
            <v-radio
                v-for="n in item.answers"
                :key="n"
                :label="`Radio ${n}`"
                :value="n"
            ></v-radio>
          </v-radio-group>
          <v-btn @click="checkTest(item,radioGroup)">Проверить</v-btn>
        </v-card>
      </div>
    </div>
    <div class="text-center ">
      <h1>next option</h1><br>
      <v-dialog
          v-model="dialog"
          width="500"
          transition="scroll-x-reverse-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
          >
            Click Me
          </v-btn>
        </template>

        <v-card  transition="scroll-x-reverse-transition">
          <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "Test",
  data() {
    return {
      filteredData: ['no data'],
      dialog:false,
      newData: [],
      radioGroup:'',
      assigments: {
        first: {
          question: 'Вопрос 1',
          answer: 'Ответ 1'
        },
        second: {
          question: 'Вопрос 2',
          answer: 'Ответ 2'
        },
        third: {
          question: 'Вопрос 3',
          answer: 'Ответ 3'
        }
        ,
      },
      tests: [
        {
          question: 'Вопрос 1',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: 3, // номер правильного ответа
        },
        {
          question: 'Вопрос 2',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: 1, // номер правильного ответа
        },
        {
          question: 'Вопрос 3',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
            'Ответ 4',
            'Ответ 5',
          ],
          right: 5, // номер правильного ответа
        },
      ],
      first: [
        {
          title: 'dumster',
          number: 1
        },
        {
          title: 'dumster',
          number: 2
        },
        {
          title: 'dumster',
          number: 3
        },
      ],
      list:
          [{'name': 'товар 1', 'price': 50}, {'name': 'товар 2', 'price': 100}],
      total: 0,
      second: [
        {
          title: 'behruz',
          number: 1
        },
        {
          title: 'behruz',
          number: 2
        },
        {
          title: 'behruz',
          number: 3
        },
      ],
      list1:
          [{task: 'first', checkbox: false}, {task: 'second', checkbox: false}, {task: 'third', checkbox: false}],
      third: [
        {
          title: 'ohangaran',
          number: 1
        },
        {
          title: 'ohangaran',
          number: 2
        },
        {
          title: 'ohangaran',
          number: 3
        },
      ],
      valid
  :
    false, totalPrice
  :
    0,
        name
  :
    '',
        nameRules
  :
    [
      v => !!v || 'Name is required',
    ],
        email
  :
    '',
        emailRules
  :
    [
      v => !!v || 'E-mail is required',
    ],
        select
  :
    null,
        input1
  :
    false,
        items
  :
    [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
        checkbox
  :
    false,
  }
  },
  computed: {
    disable() {
      return this.name.trim() && this.email.trim() && this.items && this.checkbox === true
    },
    minus(value) {
      const smth = this.list.find(ell => ell.name == value.name && ell.price == value.price)
      return smth.reduce((val) => this.totalPrice * val.price,)
    },
    ...mapGetters(['allData'])
  },
  methods: {
    checkTest(allOptions,selected){
      console.log(allOptions,selected)
     const choosed= selected.substring(6)
      console.log(choosed)
      if(choosed==allOptions.right){
        alert('uu jala molodes')
      }else{
        console.log(false)
      }
    },
    isTrue(item) {
      if (item.answer === item.val) {
        alert('ooo correct congratulations:)')
      }
    },
    fun2(item) {
      console.log(item)
      if (item.checkbox) {
        this.input1 = true

      }
    },
    ...mapMutations(['createUser']),
    validate() {
      this.$refs.form.validate()
    },
    checkboxDetermine(value) {
      value.checkbox = true

    },
    plus(value) {
      console.log(value)
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    Start() {
      this.$store.commit('Start', 'hello')
    },
    filter(value) {
      //    //first option

      //    if(value==='first'){
      // this.filteredData=this.first
      //    }else if(value==='second'){
      //      this.filteredData=this.second
      //    }

      //end

      //next option

      this.filteredData = [...this.first, ...this.second, ...this.third]
      if (value === 'first') {
        this.newData = this.filteredData.filter(ell => ell.title == 'dumster')
      } else if (value === 'second') {
        this.newData = this.filteredData.filter(ell => ell.title == 'behruz')
      } else {
        this.newData = this.third
      }
    },

  }
}
</script>

<style scoped>
.grayColor {
  color: gray;
}

.own {
  color: black;
}
#app{
  overflow: hidden;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>