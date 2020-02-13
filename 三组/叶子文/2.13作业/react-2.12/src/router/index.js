import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import Home from '../views/Home/Home'

function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/home" component={Home}></Route>

        <Redirect path="/" to="/login"></Redirect>
      </Switch>
    </BrowserRouter>
  )
}

export default router