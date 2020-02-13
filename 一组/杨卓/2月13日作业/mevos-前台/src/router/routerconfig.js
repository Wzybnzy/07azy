import Login from "../view/Login/Login"
import Register from "../view/Register/Register"
import Home from "../view/Home/Home"

const routes=[
    {
        path:'/',
        to:'/login'
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/home',
        component:Home
    },
]
export default routes;