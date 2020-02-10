import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: '/zc',
    component: () => import("../views/Zc/Zc.vue")
  },
  {
    path: "/home",
    component: () => import("../views/Home/Home.vue"),
    children: [
      {
        path: "wdang",
        component: () => import("../views/Home/Wdang/Wdang.vue")
      },
      {
        path: "zsku",
        component: () => import("../views/Home/Zsku/Zsku.vue")
      },
      {
        path: "shoucang",
        component: () => import("../views/Home/Shoucang/Shoucang.vue")
      },
      {
        path: "guanzhu",
        component: () => import("../views/Home/Guanzhu/Guanzhu.vue")
      },
      {
        path: "my",
        component: () => import("../views/Home/My/My.vue")
      },
    ]
  },
  {
    path: "/detail",
    component: () => import("../views/Detail/Detail.vue")
  },
  {
    path: "/bjwd",
    component: () => import("../views/Bjwd/Bjwd.vue")
  },
  {
    path: "/bjzsku",
    component: () => import("../views/Bjzsku/Bjzsku.vue")
  },
  {
    path: "/",
    redirect: "/login"
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
