import React, { Component } from 'react'
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom"
import Home from "../views/home"
import Login from "../views/login"
import Register from "../views/register"


export default class index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Home}/>
                    <Redirect path="/" to="/login"/>

                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}



