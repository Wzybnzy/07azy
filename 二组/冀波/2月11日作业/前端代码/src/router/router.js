import React, { Component } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import Login from '../views/Login'
import Registry from '../views/Registry'
import Home from '../views/Home/Home.js'
export default class router extends Component {
  render() {
    return (
      <div>
           <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/registry" component={Registry}/>
            <Route path="/home" component={Home}/>
            <Redirect path="/" to="/login"/>
        </Switch>
      </div>
    )
  }
}
