import React, { Component } from 'react'
import {Switch,Redirect,Route} from "react-router-dom"
import Index from "../components/Index/Index"
import Login from "../components/Login/Login"
import Registry from "../components/Registry/Registry"
export default class Router extends Component {
    render() {
        return (
          <Switch>
              <Route path="/index" component={Index}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/registry" component={Registry}></Route>
              <Redirect to="/login"></Redirect>
          </Switch>
        )
    }
}
