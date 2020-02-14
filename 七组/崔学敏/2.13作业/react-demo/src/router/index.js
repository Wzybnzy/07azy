import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';

import Registry from '../views/Registry';

const RouterConfig=()=>{
    return <BrowserRouter>
    <Switch>
        <Route path="/deng" component={Login}/>
        <Route path="/zc" component={Registry}/>
        <Route path="/home" component={Home}/>
        <Redirect path="/" to="/deng"/>
    </Switch>
    </BrowserRouter>
}
export default RouterConfig;