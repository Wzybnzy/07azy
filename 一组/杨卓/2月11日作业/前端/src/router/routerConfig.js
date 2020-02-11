import Home from "../views/Home/Home"
// 用户
import Login from "../views/Login/Login"
import Register from "../views/Register/Register"
// 列表
import Reserve from "../views/Home/Reserve/Reserve"
import Myreserve from "../views/Home/Myreserve/Myreserve"
import Systemset from "../views/Home/Systemset/Systemset"
import Reserveapproval from "../views/Home/Reserveapproval/Reserveapproval"
import Reserveset from "../views/Home/Reserveset/Reserveset"
import Regionalset from "../views/Home/Regionalset/Regionalset"


const routes=[
    {
        path:"/login",
        component:Login,
    },
    {
        path:"/register",
        component:Register
    },
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/reserve",
                component:Reserve//预定会议室
            },
            {
                path:"/home/myreserve",
                component:Myreserve//我的预定
            },
            {
                path:"/home/systemset",
                component:Systemset//系统设置
            },
            {
                path:"/home/reserveapproval",
                component:Reserveapproval//预定审批（管理员）
            },
            {
                path:"/home/reserveset",
                component:Reserveset//会议室预定管理（管理员）
            },
            {
                path:"/home/regionalset",
                component:Regionalset//区域建筑物管理（管理员）
            },
            {
                path:"",
                to:"/home/reserve"
            }
        ]
    },
    
    {
        path:"/",
        to:"/login"
    }
]

export default routes;