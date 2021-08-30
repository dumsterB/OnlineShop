import store from '../store/store.js'

export default function(to,from,next){
    if(store.state.links){
        next()
    }else{
        next({name:'Login'})
    }
}
