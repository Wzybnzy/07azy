import React, { Component } from 'react'
import {Route,Redirect,Switch} from "react-router-dom";
import Login from '../views/Login/Login';
import Registry from '../views/Registry/Registry';
import Index from '../views/Index/Index';
export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/registry" component={Registry}></Route>
                <Route path="/index" component={Index}></Route>
                <Redirect to='/login'></Redirect>
            </Switch>
        )
    }
}
