import React from "react"

import {BrowserRouter} from "react-router-dom"

import routes from "./routerconfig"
import Routerview from "./routerview"

function Rooter(){
    return <BrowserRouter>
        <Routerview routes={routes}></Routerview>
    </BrowserRouter>
}
export default Rooter

// import React from "react"

// import {BrowserRouter,Switch,Redirect,Route} from "react-router-dom"

// import Login from "../views/Login/Login"

// import Home from "../views/Home/Home"
// import registry from "../views/registry/registry"

// function R