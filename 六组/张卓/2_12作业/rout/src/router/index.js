import React, { Component } from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Login from './../views/login'
import Registry from './../views/registry'
import Home from './../views/home/home'

export default class index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/registry" component={Registry}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Redirect path="/" to="/login"></Redirect>
                </Switch>
            </BrowserRouter> 
        )
    }
}
