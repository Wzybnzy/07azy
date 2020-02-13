import React, { Component } from 'react'
import {Switch,Redirect,Route} from "react-router-dom"
import Home from "../views/Home/Home"
import Login from "../views/Login/Login"
import Registry from "../views/Registry/Registry"
export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/registry" component={Registry}></Route>
                <Redirect to="/login"></Redirect>
            </Switch>
        )
    }
}
