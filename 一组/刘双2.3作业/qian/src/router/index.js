import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:"/",
    component:()=>import('../views/Login/Login.vue')
  },
  {
    path:"/registry",
    component:()=>import('../views/registry/registry.vue')
  },
  {
    path:"/home",
    component:()=>import('../views/home/home.vue'),
    children:[
      {
        path:"list",
        component:()=>import('../views/home/list/list.vue'),
        children:[
          {
            path:"file",
            component:()=>import('../views/home/list/file/file.vue')
          },
          {
            path:"know",
            component:()=>import('../views/home/list/know/know.vue')
          }
        ]
      }
    ]
  },
  {
    path:"/detial",
    component:()=>import('../views/detial/detial.vue')
  },
  {
    path:"/addknow",
    component:()=>import('../views/addknow/addknow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
