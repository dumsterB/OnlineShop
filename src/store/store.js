import Vue from "vue";
import Vuex from "vuex";
import auth from '@/router/auth'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        allProducts: [],
        allData:[],
        startAlert:'Start to inspire',
        access:false,
        user: [],
        profile: {
            auth: false,
            email: "Abadon",
            accessLevel: -1
        },
        users: {
            Behruz: {
                name: 'Behruz',
                email: 'behruz@gmail.com',
                password: 'behruzPassword',
                role: 'Doctor'
            },
            Dumster: {
                name: 'Dumster',
                password: 'dumsterPassword',
                email: 'dumster@gmail.com',
                role: 'Admin'
            },
            Ohangaran: {
                name: 'Ohangaran',
                email: 'ohangaran@gmail.com',
                password: 'ohangaranPassword',
                role: 'User'
            }
        },
        products: [
            {
                title: "iPhone 12 Pro",
                path: "/iphone12pro",
                promo: true,
                price: '500',

                count: 1,
                colors: [
                    {
                        color: "red",
                        img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-silver.png",
                        choose: false
                    },
                    {
                        color: "gold",
                        img:
                            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
                        choose: false
                    },
                    {
                        color: "dark",
                        img:
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000",
                        choose: false
                    }
                ],
                description: "",
                id: `12pro`,
                img:
                    "https://microscancomputers.com/wp-content/uploads/2018/08/iphone-11-vs-11pro-vs-11-pro-max.jpg",
                img2:
                    "https://microscancomputers.com/wp-content/uploads/2018/08/iphone-11-vs-11pro-vs-11-pro-max.jpg"
            },
            {
                title: " iPhone 12 Pro Max",
                path: "/ordiphone12promax",
                description: "",
                id: `12promax`,
                price: '500',

                count: 1,
                img:
                    "https://www.notik.ru/img/catalog_img/78155/big/1_appleiphone_12_pro_maxiphone_12_pro_maxmgdc3rua.jpg",
                colors: [
                    {
                        color: "red",
                        img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-silver.png",
                        choose: false
                    },
                    {
                        color: "gold",
                        img:
                            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
                        choose: false
                    },
                    {
                        color: "dark",
                        img:
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000",
                        choose: false
                    }
                ],
            },
            {
                title: "iPhone 11",
                path: "/iphone11",
                description: "",
                id: `iphone11`,
                price: '500',

                count: 1,
                img:
                    "https://iphone-cdma.com/image/cache/catalog/iphone/iphone-11/iphone-11-cdma-gsm-a2223-128gb-black-intertelecom-720x720.jpg",
                colors: [
                    {
                        color: "red",
                        img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-silver.png",
                        choose: false
                    },
                    {
                        color: "gold",
                        img:
                            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
                        choose: false
                    },
                    {
                        color: "dark",
                        img:
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000",
                        choose: false
                    }
                ],
            },
            {
                title: "IPhone X",
                path: "/orders",
                description: "",
                id: `iphonex`,
                count: 1,
                price: '500',

                img:
                    "https://www.bt-deluxe.ru/upload/iblock/55b/55b8ae8de6461a5b194b168028ff2379.jpg  ",
                colors: [
                    {
                        color: "red",
                        img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-silver.png",
                        choose: false
                    },
                    {
                        color: "gold",
                        img:
                            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
                        choose: false
                    },
                    {
                        color: "dark",
                        img:
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000",
                        choose: false
                    }
                ],
            },
            {
                title: "IPhone 7",
                path: "/orders",
                description: "",
                id: `iphone7`,
                count: 1,
                price: '500',

                img:
                    "https://i.ndtvimg.com/video/images/vod/medium/2016-09/big_430454_1473307705.jpg?downsize=600:450&output-quality=80 ",
                colors: [
                    {
                        color: "red",
                        img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-silver.png",
                        choose: false
                    },
                    {
                        color: "gold",
                        img:
                            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
                        choose: false
                    },
                    {
                        color: "dark",
                        img:
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000",
                        choose: false
                    }
                ],
            },
            {
                title: "IPhone 8",
                path: "/orders",
                description: "",
                id: `iphone8`,
                count: 1,
                price: '500',

                img: "https://assets.swappie.com/swappie-product-iphone-8-gold.png ",
                colors: [
                    {
                        color: "red",
                        img: "https://cdn.alzashop.com/Foto/f16/RI/RI012i1b31.jpg",
                        choose: false
                    },
                    {
                        color: "gold",
                        img:
                            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
                        choose: false
                    },
                    {
                        color: "dark",
                        img:
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000",
                        choose: false
                    }
                ]
            },
            {
                title: "IPhone 5",
                path: "/orders",
                description: "",
                id: `iphone5`,
                count: 1,
                price: '500',

                img:
                    "https://www.mytrendyphone.eu/images2/iPhone-5-Silicone-Case-Clear-12012013-1-p.jpg  ",
                colors: [
                    {
                        color: "red",
                        img: "https://cdn.alzashop.com/Foto/f16/RI/RI012i1b31.jpg",
                        choose: false
                    },
                    {
                        color: "gold",
                        img:
                            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
                        choose: false
                    },
                    {
                        color: "dark",
                        img:
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000",
                        choose: false
                    }
                ]
            },
            {
                title: "IPhone 6",
                path: "/orders",
                description: "",
                id: `iphone6`,
                count: 1,
                price: '500',
                img:
                    "https://www.cellsmart.co.za/wp-content/uploads/2020/08/iPhone-6-Space-Grey.jpg  ",
                colors: [
                    {
                        color: "red",
                        img: "https://cdn.alzashop.com/Foto/f16/RI/RI012i1b31.jpg",
                        choose: false
                    },
                    {
                        color: "gold",
                        img:
                            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
                        choose: false
                    },
                    {
                        color: "dark",
                        img:
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000",
                        choose: false
                    }
                ]
            }
        ],
        links: [
            {title: "login", beforeEnter: auth, path: "/login"},
            {title: "register", beforeEnter: auth, path: "/register"},
            {title: "home", beforeEnter: auth, path: "/"},
            {title: "orders", beforeEnter: auth, path: "/orders"},
            {title: "products", beforeEnter: auth, path: "/products"}
        ],
    },
    mutations: {
        Start(state,payload){
         let nameUser= prompt('write your name')
            alert(state.startAlert.concat('', ' '+ nameUser + ' '+ payload))
        },
        setState(state, payload) {
            Object.keys(payload).forEach(key => {
                if (key in state) {
                    state[key] = payload[key];
                }
            });
        },
        addUser(state, payload) {
            const newTask = {
                username: payload.username,
                password: payload.password
            };
            state.user.push(newTask)
        },
        submitProduct: (state, payload) => {
            const newUser = {
                password: payload.password,
                name: payload.name,
                email: payload.email
            };
            axios.post("http://localhost:3000/register", newUser)
                .then(response => {
                    console.log(response)
                }, err => {
                    console.log(err.response)
                })
        },
        createUser:(state,payload)=>{
          const newUser1={
              name:payload.name,
              email:payload.email,
              chekbox:payload.chekbox,
              items:payload.items,
          }
          state.allData.push(newUser1)
            console.log(newUser1)
        },
        loginUser: (state, payload) => {
            const newUser = {
                password: payload.password,
                email: payload.email
            };
            axios.post("http://localhost:3000/login", newUser)
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        localStorage.setItem('token', res.data.token);
                    }
                }, err => {
                    console.log(err.response);
                })
        }
    },
    actions: {
        SET_AUTH({state, commit}, authState) {
            commit("setState", {
                profile: {
                    ...state.profile,
                    auth: authState
                }
            });
        },
        // LOGIN_COMPARE({state, commit}, {username, password}) {
        //     const userProps = state.users[username];
        //     const AuthDone = userProps.name == username && userProps.password == password
        //     commit('addUser', commit)
        //     if (AuthDone) {
        //         commit("setState", {
        //             profile: {
        //                 ...state.profile,
        //                 auth: true,
        //                 accessLevel: userProps.role
        //             }
        //         });
        //     }
        // },
        submitProduct: (contex, payload) => {
            contex.commit("submitProduct", payload)
        },
        loginUser: (contex, payload) => {
            contex.commit("loginUser", payload)
            const userProps = contex.users[payload.email];
            const authDone = userProps.email == payload.email && userProps.password == payload.password
            if (authDone) {
                contex.commit("setState", {
                    profile: {
                        ...contex.profile,
                        auth: true,
                        accessLevel: userProps.role
                    }
                })
            }

        },


    },
    getters: {
        products(state) {
            return state.products;
        },
        total: state => state.products.reduce((acc, val) => acc + val.count * val.price, 0),
        allProducts: state => state.allProducts,
        totalProduct: state => state.allProducts.length,
        adById(state) {
            return adId => {
                return state.products.find(product => product.id === adId);
            };
        },
        allData(state){
            return state.allData
        }
    }
});

export default store;
