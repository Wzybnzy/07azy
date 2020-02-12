import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import Home from '../views/Home/Home'


export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/home" component={Home}></Route>

          <Redirect path="/" to="login"></Redirect>
        </Switch>
      </BrowserRouter>
    )
  }
}
