import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import store from './vuex/vuex'
Vue.config.productionTip = false
let den = {
    lu:function(){
       if(window.localStorage.token){
          return true
       }
       else{
          return false
       }
    }
}
router.beforeEach((to,from,next) => {
       if(to.matched.some(item => item.meta.fn)){
          if(den.lu()){
             next()
          }
          else{
             next('/login')
          }
       }
       else{
          next()
       }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
