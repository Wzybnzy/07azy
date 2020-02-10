import Vue from 'vue'
import VueRouter from 'vue-router'
 
Vue.use(VueRouter)

const routes = [
      {
          path:"/login",
          name:"login",
          component: () => import('./../views/login.vue')
      },
      {
        path:"/registry",
        name:"registry",
        component: () => import('../views/registry.vue')
      },
      {
        path:"/home",
        name:"home",
        component: () => import('../views/home/home.vue'),
        children:[
              {
                path:"list",
                name:"list",
                component: () => import('../views/home/list/list.vue'), 
                children:[
                      {
                        path:"file",
                        name:"file",
                        component: () => import('../views/home/list/file/file.vue')
                      },
                      {
                        path:"konw",
                        name:"konw",
                        component: () => import('../views/home/list/konw/konw.vue')
                      },
                ],  
              },
              {
                path:"detail",
                name:"detail",
                component: () => import('../views/home/detail/detail.vue'), 
              },
              {
                path:"search",
                name:"search",
                component: () => import('../views/home/search/search.vue'), 
              },
              {
                path:"addfile",
                name:"addfile",
                component: () => import('../views/home/addfile/addfile.vue'), 
              },
              {
                path:"addkonw",
                name:"addkonw",
                component: () => import('../views/home/addkonw/addkonw.vue'), 
              },
              {
                path:"/home",
                redirect:"/home/list"
              }
        ],
      },
     
      {
        path:"/",
        redirect:"/login"
      }
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
