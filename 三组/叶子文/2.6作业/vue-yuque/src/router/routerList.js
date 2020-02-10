const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/Home/Index/Index.vue'),
        meta: { show: true },
        children: [
          {
            path: 'att',
            name: 'att',
            component: () => import(/* webpackChunkName: "att" */ '../views/Home/Index/Att/Att.vue'),
            meta: { show: true }
          },
          {
            path: 'collect',
            name: 'collect',
            component: () => import(/* webpackChunkName: "collect" */ '../views/Home/Index/Collect/Collect.vue'),
            meta: { show: true }
          },
          {
            path: 'doc',
            name: 'doc',
            component: () => import(/* webpackChunkName: "doc" */ '../views/Home/Index/Doc/Doc.vue'),
            meta: { show: true }
          },
          {
            path: 'know',
            name: 'know',
            component: () => import(/* webpackChunkName: "know" */ '../views/Home/Index/Know/Know.vue'),
            meta: { show: true }
          },
          {
            path: 'pim',
            name: 'pim',
            component: () => import(/* webpackChunkName: "pim" */ '../views/Home/Index/Pim/Pim.vue'),
            meta: { show: true }
          },
        ]
      },
      {
        path: 'adddoc',
        name: 'adddoc',
        component: () => import(/* webpackChunkName: "adddoc" */ '../views/Home/Adddoc/Adddoc.vue')
      },
      {
        path: 'addknow',
        name: 'addknow',
        component: () => import(/* webpackChunkName: "addknow" */ '../views/Home/Addknow/Addknow.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "detail" */ '../views/Home/Detail/Detail.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ '../views/Home/Search/Search.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register/Register.vue')
  }
]

export default routes