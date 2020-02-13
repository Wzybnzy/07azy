import React from "react"

import {BrowserRouter,Switch,Redirect,Route} from "react-router-dom"

import Home from "../views/Home/Home"

import Login from "../views/Login/Login"

import Registry from "../views/Registry/Registry"

function RootRouter(){
    return <BrowserRouter>
        <Switch>
             <Route path="/login" component={Login}></Route>
             <Route path="/registry" component={Registry}></Route>
             <Route path="/home" component={Home}></Route>
             <Redirect path="/" to="/login"></Redirect>
        </Switch>
    </BrowserRouter>
}

export default RootRouter
