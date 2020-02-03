import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
     {
       path:"/",
       redirect:"/login"
     },
     {
       path:"/home",
       component:()=>import("../views/home/home.vue"),
       redirect:"/home/file",
       children:[
         {
           path:"file",
           component:()=>import("../views/home/file/file.vue")
         },
         {
          path:"know",
          component:()=>import("../views/home/know/know.vue")
        },
        {
          path:"sc",
          component:()=>import("../views/home/sc/sc.vue")
        },
        {
          path:"gz",
          component:()=>import("../views/home/gz/gz.vue")
        },
        {
          path:"self",
          component:()=>import("../views/home/self/self.vue")
        }
       ]
     
     },
     {
      path:"/login",
      component:()=>import("../views/login/login.vue")
     },
     {
      path:"/registry",
      component:()=>import("../views/registry/registry.vue")
     }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
