import Login from '../views/login/login';
import Registry from '../views/registry/registry';
import Home from '../views/home/home';

import First from '../views/home/first/first';
import Guanli from '../views/home/guanli/guanli';
import Myyvding from '../views/home/myyvding/myyvding';
import Roomyv from '../views/home/roomyv/roomyv';
import Xitong from '../views/home/xitong/xitong';
import Yvding from '../views/home/yvding/yvding';
import Yvshen from '../views/home/yvshen/yvshen';

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/home/first',
                component: First,
            },
            {
                path: '/home/guanli',
                component: Guanli,
            },
            {
                path: '/home/myyvding',
                component: Myyvding,
            },
            {
                path: '/home/roomyv',
                component: Roomyv,
            },
            {
                path: '/home/xitong',
                component: Xitong,
            },
            {
                path: '/home/yvding',
                component: Yvding,
            },
            {
                path: '/home/yvshen',
                component: Yvshen,
            },
            {
                path: '/home',
                redirect: '/home/first',
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
export default routes;
