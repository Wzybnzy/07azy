import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Login from '../views/login'
import Registry from '../views/registry'
import Home from '../views/home'
function RootRouter(){
    return(<Switch>
            <Route path="/login" component={Login}/>
            <Route path="/registry" component={Registry}/>
            <Route path="/home" component={Home}/>
            <Redirect path="/" to="/login"/>
        </Switch>)
        
   
}

export default RootRouter;