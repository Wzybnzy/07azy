import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//配置路由
const routes = [
          {
            path:"/home",
            component:()=>import('../views/home/home.vue')
          },
          {
            path:"/login",
            component:()=>import('../views/login/login.vue')
          },
          {
            path:"/registry",
            component:()=>import('../views/registry/registry.vue')
          },
          {path:'/',redirect:'/home'}
]
const router = new Router({
      routes
})
export default router