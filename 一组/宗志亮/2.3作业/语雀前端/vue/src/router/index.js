import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component:Home
  },
  {
    path:'/registry',
    name:'registry',
    component:()=>import('../views/Registry.vue')
  },{
    path:'/list',
    component:()=>import('../views/List.vue'),
    redirect:'/list/wd',
    children:[
      {
        path: 'wd',
        component: () => import('../views/list/Wd.vue')
      },{
        path: 'zsk',
        component: () => import('../views/list/Zsk.vue')
      },{
        path: 'collect',
        component: () => import('../views/list/Collect.vue')
      },{
        path: 'gz',
        component: () => import('../views/list/Gz.vue')
      },{
        path: 'my',
        component: () => import('../views/list/My.vue')
      },
    ]
  },{
    path:'/bjwd',
    component:()=>import('../views/Bjwd.vue')
  },{
    path:'/bjzsk',
    component:()=>import('../views/Bjzsk.vue')
  },{
    path:'/detail',
    component:()=>import('../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
