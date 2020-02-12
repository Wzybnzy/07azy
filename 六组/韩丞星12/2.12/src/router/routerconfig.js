import Index from "../view/index"
import Home from "../view/home/home"
import Reserveroom from "../view/reserveroom/reserveroom"
import Myreserve from "../view/myreserve/myreserve"
import Reserveknow from "../view/reserveknow/reserveknow"
import SSet from "../view/set/set"
import Login from "../login/login"
import Registry from "../registry/registry"
const routes=[
    {
        path:'/index',
        component:Index,
        children:[
            {
                path:'/index/home',
                component:Home
            },
            {
                path:'/index/reserveroom',
                component:Reserveroom
            },
            {
                path:'/index/myreserve',
                component:Myreserve
            },
            {
                path:'/index/reserveknow',
                component:Reserveknow
            },
            {
                path:'/index/set',
                component:SSet
            }
        ]
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/registry",
        component:Registry
    },
    {
        path:'/',
        to:"/login"
    }
]
export default routes