import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Order from '../components/Order'
import Products from '../components/Products'
import Register from '../components/Register'
import Login from '../components/Login'
// import store from '@/store/store'
// import roles from '@/router/roles'
import Test from '@/components/Test'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
            meta: {
                layout: 'Default'
            }
        },
        {
            path: '/test',
            component: Test,
            name: 'Test',
            meta: {
                layout: 'Default'
            }
        },
        {
            path: '/register',
            component: Register,
            name: 'Register',
            meta: {
                layout: 'Auth'
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'Login',
            meta: {
                layout: 'Auth'
            }
        },
        {
            path: '/order',
            component: Order,
            name: 'Order',
            meta: {
                layout: 'Default'
            }
        },

        {
            path: '/products/:id',
            component: Products,
            name: 'Products',
            props: true,
            meta: {
                layout: 'Default'
            }
        },
    ],
    mode: 'history'
})


// router.beforeEach((to, from, next) => {
//
//     if (to.name == "Login") {
//         next();
//         return
//     }
//     if (to.name == "Register") {
//         next();
//         return
//     }
//     const userAccessLevel = store.state.profile.accessLevel
//     const AllowRoutes=((roles[userAccessLevel] || {}).routes || [])
//     if(AllowRoutes.includes(to.name)){
// next()
//     }else{
// next(false)
//     }
// })
 export default router
