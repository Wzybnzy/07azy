import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('@/views/index/index.vue')
  },
  {
    path:'/detail',
    component:()=>import('@/views/detail/detail.vue')
  },
  {
    path:'/registry',
    component:()=>import('@/views/registry/registry.vue')
  },
  {
    path:'/login',
    component:()=>import('@/views/login/login.vue'),
    children:[
      {
        path:'/login/ment',
        component:()=>import('@/views/login/ment/ment.vue')
      },
      {
        path:'/login/base',
        component:()=>import('@/views/login/base/base.vue')
      },
      {
        path:'/login/collect',
        component:()=>import('@/views/login/collect/collect.vue')
      },
      {
        path:'/login/guanzhu',
        component:()=>import('@/views/login/guanzhu/guanzhu.vue')
      },
      {
        path:'/login/geren',
        component:()=>import('@/views/login/geren/geren.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
