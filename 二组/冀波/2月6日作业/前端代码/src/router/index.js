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
        meta: {
          show: true
      },
        children:[
          {
            path:'/home/list/file',
            name:'file',
            component:()=>import('../views/home/list/file/file.vue'),
            meta: {
              show: true
          },
          },
          {
            path:'/home/list/know',
            name:'know',
            component:()=>import('../views/home/list/know/know.vue'),
            meta: {
              show: true
          },
          }
        ]
      },
      {
        path:'/home/search',
        name:'search',
        component: () => import('../views/home/search/search.vue'),
        meta: {
          show: false
      },
      },
      {
        path:'/home/detail',
        name:'detail',
        component: () => import('../views/home/detail/detail.vue'),
        meta: {
          show: false
      },
      },
      {
        path: '/home/addfile',
        name: 'addfile',
        component: () => import('@/views/home/addfile/addfile.vue'),
        meta: {
          show: false
      },
    },
    {
        path: '/home/addknow',
        name: 'addknow',
        component: () => import('@/views/home/addknow/addknow.vue'),
        meta: {
          show: false
      },
    }
    ]
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


