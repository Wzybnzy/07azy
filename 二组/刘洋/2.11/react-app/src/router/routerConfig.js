import Login from '../views/login/login'
import Register from '../views/register/register'
import Index from '../views/index/index'
import A from '../views/index/a/a'
import B from '../views/index/b/b'
import C from '../views/index/c/c'
import D from '../views/index/d/d'
const router=[{
    path:"/",
    to:"/login"
},{
    path:"/login",
    component:Login
},{
    path:"/register",
    component:Register
},{
    path:"/index",
    component:Index,
    children:[{
        path:"/index/a",
        component:A,
    },{
        path:"/index/b",
        component:B,
    },{
        path:"/index/c",
        component:C,
    },{
        path:"/index/d",
        component:D,
    }]
}]

export default router