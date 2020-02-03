import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path: '/index',
    component:()=>import('../views/index/index.vue'),
    redirect:"/index/file",
    children:[
      {
        path:"file",
        component:()=>import("../views/index/file/file.vue")
      },
      {
        path:"know",
        component:()=>import("../views/index/know/know.vue")
      },
      {
        path:"collect",
        component:()=>import("../views/index/collect/collect.vue")
      },
      {
        path:"atten",
        component:()=>import("../views/index/atten/atten.vue"),
      },
      {
        path:"person",
        component:()=>import("../views/index/person/person.vue")
      }
    ]
  },
  {
    path: '/login',
    component:()=>import('../views/login/login.vue') 
  },
  {
    path: '/registry',
    component:()=>import('../views/registry/registry.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
