import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/deng',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/zc',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: "/home/list",
        name: 'list',

        meta: {
          show: true
        },
        component: () => import('../views/home/List.vue'),
        children: [
          {
            path: 'gz',
            name: 'gz',
            meta: {
              show: true
            },
            component: () => import('../views/home/list/GZ.vue')
          },
          {
            path: 'zsk',
            name: 'zsk',
            meta: {
              show: true
            },
            component: () => import('../views/home/list/ZSK.vue')
          },
          {
            path: 'my',
            name: 'my',
            meta: {
              show: true
            },
            component: () => import('../views/home/list/My.vue')
          },
          {
            path: 'sc',
            name: 'sc',
            meta: {
              show: true
            },
            component: () => import('../views/home/list/SC.vue')
          },
          {
            path: 'wd',
            name: 'wd',
            meta: {
              show: true
            },
            component: () => import('../views/home/list/WD.vue'),

          },
          {
            path: 'wd',
            redirect: 'wd'
          },
          {
            path:'/home/list',
            redirect:'wd'
          }
        ]
      },
       {
        path: '/home',
        redirect: '/home/list'
      },
      {
        path: "/home/detail",
        name: 'detail',
        meta: {
          show: false
        },
        component: () => import('../views/home/Detail.vue')
      },
      {
        path: "/home/search",
        name: 'search',
        meta: {
          show: false
        },
        component: () => import('../views/home/Search.vue')
      },
      {
        path: "/home/edmtzsk",
        name: 'edmtzsk',
        meta: {
          show: false
        },
        component: () => import('../views/home/EdmtZSK.vue')
      },
      {
        path: "/home/edmtwd",
        name: 'edmtwd',
        meta: {
          show: false
        },
        component: () => import('../views/home/Edmtwd.vue')
      }
    ]
  }
]
// const list=['zsk'];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//   console.log(to,'to********');
//   console.log(from,'from********');
//   if(list.includes(to.name)){ //需要守卫
//     // 判断是否登录
//     if(!window.localStorage.user.token){ //没有登录
//         next('/login');
//     } else {
//       next();
//     }
//   } else {
//     next();

//   }
export default router
