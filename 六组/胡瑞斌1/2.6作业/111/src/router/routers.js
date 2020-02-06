const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue')
    },
    {
        path: '/home',
        name: 'home',
        children: [
            {
                path: 'list',
                name: 'list',
                component: () => import('../views/list/list.vue'),
                children: [
                    {
                        path: 'wd',
                        name: 'wd',
                        meta: {
                            show: true
                        },
                        component: () => import('../views/list/wd.vue')
                    },
                    {
                        path: 'know',
                        name: 'know',
                        meta: {
                            show: true
                        },
                        component: () => import('../views/list/know.vue')
                    },
                    {
                        path: 'sc',
                        name: 'sc',
                        meta: {
                            show: true
                        },
                        component: () => import('../views/list/sc.vue')
                    },
                    {
                        path: 'zd',
                        name: 'zd',
                        meta: {
                            show: true
                        },
                        component: () => import('../views/list/zd.vue')
                    }
                ]
            },
            {
                path: 'detail',
                name: 'detail',
                meta: {
                    show: false
                },
                component: () => import('@/views/home/detail.vue')
            },
            {
                path: 'search',
                name: 'search',
                meta: {
                    show: false
                },
                component: () => import('@/views/home/search.vue')
            },
            {
                path: 'addfile',
                name: 'addfile',
                meta: {
                    show: false
                },
                component: () => import('@/views/home/addfile.vue')
            },
            {
                path: 'addknow',
                name: 'addknow',
                meta: {
                    show: false
                },
                component: () => import('@/views/home/addknow.vue')
            }
        ],
        component: () => import('../views/home.vue')
    },
    {
        path: '/',
        redirect: '/login'
    }
]

export default routes