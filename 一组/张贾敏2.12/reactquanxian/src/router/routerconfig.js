// import  React from "react"

import Login from "../views/Login/Login.js"

import Home from "../views/Home/Home.js"

import  Registry from "../views/Registry/Registry"

import Reserve from "../views/Home/Reserve/Reserve"
import Appr from "../views/Home/Appr/Appr"
import Mange from "../views/Home/Mange/Mange"
import Myappr from "../views/Home/Myappr/Myappr"
import Myreserve from "../views/Home/Myreserve/Myreserve"
import System from "../views/Home/System/System"

let routes=[
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/reserve",
                component:Reserve
            },
            {
                path:"/home/appr",
                component:Appr
            },
            {
                path:"/home/mange",
                component:Mange
            },
            {
                path:"/home/myappr",
                component:Myappr
            },
            {
                path:"/home/myreserve",
                component:Myreserve
            },
            {
                path:"/home/system",
                component:System
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
        from:"/",
        to:"/home"
    }
]

export default routes