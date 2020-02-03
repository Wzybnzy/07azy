import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/login"
  },
  {
    path: '/login',
    component:()=>import("../views/login/login.vue")
  },
  {
    path: '/register',
    component:()=>import("../views/register/register.vue")
  },
  {
    path: '/index',
    redirect:"/index/start",
    component:()=>import("../views/index/index.vue"),
    children:[
      {
        path:"start",
        redirect:"/index/start/doc",
        component:()=>import("../views/index/start/start.vue"),
        children:[
          {
            path:"attention",
            component:()=>import("../views/index/start/attention/attention.vue"),
          },{
            path:"doc",
            component:()=>import("../views/index/start/doc/doc.vue"),
          },{
            path:"collect",
            component:()=>import("../views/index/start/collect/collect.vue"),
          },{
            path:"person",
            component:()=>import("../views/index/start/person/person.vue"),
          },{
            path:"know",
            component:()=>import("../views/index/start/know/know.vue"),
          }
        ]
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
