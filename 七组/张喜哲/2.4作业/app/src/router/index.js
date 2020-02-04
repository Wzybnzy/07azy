import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue'),
    },
    {
        path: '/addknow',
        name: 'addknow',
        component: () => import('../views/addknow.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        children: [
            {
                path: '/home',
                redirect: '/home/list',
            },
            {
                path: '/home/list',
                component: () => import('../views/home/list.vue'),
            },
            {
                path: '/home/file',
                component: () => import('../views/home/file.vue'),
            },
            {
                path: '/home/collect',
                component: () => import('../views/home/collect.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
