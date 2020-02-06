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
    redirect:"/index/list",
    children:[
      {
        path:"list",
        component:()=>import("../views/index/list/list.vue"),
        redirect:"/index/list/know",
        children:[
          {
            path:"file",
            component:()=>import("../views/index/list/file/file.vue"),
            meta:{show:true}
          },
          {
            path:"know",
            component:()=>import("../views/index/list/know/know.vue"),
            meta:{show:true}
          },
          {
            path:"collect",
            component:()=>import("../views/index/list/collect/collect.vue"),
            meta:{show:true}
          },
          {
            path:"atten",
            component:()=>import("../views/index/list/atten/atten.vue"),
            meta:{show:true}
          },
          {
            path:"person",
            component:()=>import("../views/index/list/person/person.vue"),
            meta:{show:true}
          }
        ]
      },
      {
        path:"addknow",
        component:()=>import("../views/index/addknow/addknow.vue")
      },
      {
        path:"addfile",
        component:()=>import("../views/index/addfile/addfile.vue")
      },
      {
        path:"detail",
        component:()=>import("../views/index/detail/detail.vue")
      },
      {
        path:"search",
        component:()=>import("../views/index/search/search.vue")
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
