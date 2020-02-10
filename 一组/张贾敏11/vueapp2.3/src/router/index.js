import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/home/home.vue"),
    children: [
      {
        path: "gr",
        name: "gr",
        component: () => import("../views/home/gr/gr.vue")
      },
      {
        path: "sc",
        name: "sc",
        component: () => import("../views/home/sc/sc.vue")
      },
      {
        path: "know",
        name: "know",
        component: () => import("../views/home/know/know.vue")
      }, {
        path: "knowbook",
        name: "knowbook",
        component: () => import("../views/home/knowbook/knowbook.vue")
      }
      , {
        path: "gz",
        name: "gz",
        component: () => import("../views/home/gz/gz.vue")
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login/login.vue")
  },
  {
    path: '/registry',
    name: 'registry',
    component: () => import("../views/registry/registry.vue")
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import("../views/detail/detail.vue")
  },
  {
    path: '/bj',
    name: 'bj',
    component: () => import("../views/bj/bj.vue")
  },
  {
    path: '/bjwd',
    name: 'bjwd',
    component: () => import("../views/bjwd/bjwd.vue")
  },
  {
    path: '/bjj',
    name: 'bjj',
    component: () => import("../views/bjj/bjj.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
