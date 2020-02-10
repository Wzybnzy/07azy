import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/list"
  },
  {
    path:"/list",
    component:()=>import("@/views/list/list.vue"),
    redirect:"/list/dom",
    children:[
      {
        path:"attention",
        component:()=>import('@/views/list/attention/attention.vue')
      },
      {
        path:"collect",
        component:()=>import('../views/list/collect/collect.vue')
      },
      {
        path:"dom",
        component:()=>import('@/views/list/dom/dom.vue')
      },
      {
        path:"know",
        component:()=>import('@/views/list/know/know.vue')
      },
      {
        path:"usermsg",
        component:()=>import('@/views/list/usermsg/usermsg.vue')
      }
    ]
  },
  {
    path:"/detail",
    component:()=>import("@/views/detail/detail.vue")
  },
  {
    path:"/login",
    component:()=>import("@/views/login/login.vue")
  },
  {
    path:"/registry",
    component:()=>import("@/views/registry/registry.vue")
  },
  {
    path:"/addupdate",
    component:()=>import("@/views/addupdate/addupdate.vue")
  },
  {
    path:"/changefile",
    component:()=>import("@/views/changefile/changefile.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
