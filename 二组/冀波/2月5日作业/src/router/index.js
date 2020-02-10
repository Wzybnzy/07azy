import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'
Vue.use(VueRouter) 

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'/login',
    children:[
      {
        path:'/home/list',
        name:'home',
        component: () => import('../views/home/list/list.vue'),
        children:[
          {
            path:'/home/list/file',
            name:'file',
            component:()=>import('../views/home/list/file/file.vue')
          },
          {
            path:'/home/list/know',
            name:'know',
            component:()=>import('../views/home/list/know/know.vue')
          }
        ]
      }
    ]
  },
  {
    path:'/detail',
    name:'detail',
    component: () => import('../views/home/detail/detail.vue')
  },
  {
    path: '/addfile',
    name: 'addfile',
    component: () => import('@/views/home/addfile/addfile.vue')
},
{
    path: '/addknow',
    name: 'addknow',
    component: () => import('@/views/home/addknow/addknow.vue')
},
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path:'/registry',
    name:'registry',
    component: () => import('../views/registry/registry.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


