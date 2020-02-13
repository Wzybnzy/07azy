import React from "react"
// import Home from "../views/Home/Home"
// // 用户
// import Login from "../views/Login/Login"
// import Register from "../views/Register/Register"
// // 列表
// import Reserve from "../views/Home/Reserve/Reserve"
// import Myreserve from "../views/Home/Myreserve/Myreserve"
// import Systemset from "../views/Home/Systemset/Systemset"
// import Reserveapproval from "../views/Home/Reserveapproval/Reserveapproval"
// import Reserveset from "../views/Home/Reserveset/Reserveset"
// import Regionalset from "../views/Home/Regionalset/Regionalset"
// 按需加载
import Loadable from 'react-loadable'
function Loading(){
    return <div>Loading....</div>
}
//首页
const Home=Loadable({
    loader:()=>import("../views/Home/Home"),
    loading:Loading
})
// 用户
const Login=Loadable({
    loader:()=>import("../views/Login/Login"),
    loading:Loading
})
const Register=Loadable({
    loader:()=>import("../views/Register/Register"),
    loading:Loading
})
//列表
const Reserve=Loadable({//预定会议室
    loader:()=>import("../views/Home/Reserve/Reserve"),
    loading:Loading
})
const Myreserve=Loadable({//我的预定
    loader:()=>import("../views/Home/Myreserve/Myreserve"),
    loading:Loading
})
const Systemset=Loadable({//系统设置
    loader:()=>import("../views/Home/Systemset/Systemset"),
    loading:Loading
})
const Reserveapproval=Loadable({//预定审批（管理员）
    loader:()=>import("../views/Home/Reserveapproval/Reserveapproval"),
    loading:Loading
})
const Reserveset=Loadable({//会议室预定管理（管理员）
    loader:()=>import("../views/Home/Reserveset/Reserveset"),
    loading:Loading
})
const Regionalset=Loadable({//区域建筑物管理（管理员）
    loader:()=>import("../views/Home/Regionalset/Regionalset"),
    loading:Loading
})


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