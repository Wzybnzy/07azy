import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/login.vue';
import Registry from '../views/registry/registry.vue';
import Home from '../views/home/home.vue';

import Addfile from '../views/home/addfile/addfile.vue';
import Addknow from '../views/home/addknow/addknow.vue';
import Detail from '../views/home/detail/detail.vue';
import Serach from '../views/home/serach/serach.vue';
import List from '../views/home/list/list.vue';

import File from '../views/home/list/file/file.vue';
import Know from '../views/home/list/know/know.vue';
import Cang from '../views/home/list/cang/cang.vue';
import Watck from '../views/home/list/watck/watck.vue';
import Info from '../views/home/list/info/info.vue';

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
                path: '/home/addknow',
                name: 'addknow',
                component: Addknow,
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
                    {
                        path: 'cang',
                        name: 'cang',
                        component: Cang,
                    },
                    {
                        path: 'watck',
                        name: 'watck',
                        component: Watck,
                    },
                    {
                        path: 'info',
                        name: 'info',
                        component: Info,
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
        redirect: '/login',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
