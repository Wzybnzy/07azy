import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/login.vue';
import Registry from '../views/registry/registry.vue';
import Home from '../views/home/home.vue';

import Addfile from '../views/home/addfile/addfile.vue';
import Detail from '../views/home/detail/detail.vue';
import Serach from '../views/home/serach/serach.vue';
import List from '../views/home/list/list.vue';

import File from '../views/home/list/file/file.vue';
import Know from '../views/home/list/know/know.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/home/addfile',
                name: 'addfile',
                component: Addfile,
                meta: {
                    show: false,
                },
            },
            {
                path: '/home/detail',
                name: 'detail',
                component: Detail,
                meta: {
                    show: false,
                },
            },
            {
                path: '/home/serach',
                name: 'serach',
                component: Serach,
                meta: {
                    show: false,
                },
            },
            {
                path: '/home/list',
                name: 'list',
                component: List,
                meta: {
                    show: true,
                },
                children: [
                    {
                        path: 'file',
                        name: 'file',
                        component: File,
                        meta: {
                            show: true,
                        },
                    },
                    {
                        path: 'know',
                        name: 'know',
                        component: Know,
                        meta: {
                            show: true,
                        },
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/registry',
        name: 'registry',
        component: Registry,
    },
    {
        path: '/',
        redirect: '/home',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
