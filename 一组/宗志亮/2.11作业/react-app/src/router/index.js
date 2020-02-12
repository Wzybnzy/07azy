import React from 'react';
import {BrowserRouter,Switch,Redirect,Route} from 'react-router-dom';
import Login from '../views/Login';
import Registry from '../views/Registry';
import Home from '../views/Home/Home';

function RootRouter(){
    return <BrowserRouter>
      <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/registry' component={Registry}/>
          <Route path='/home' component={Home}/>
          <Redirect path='/' to='/login'/>
      </Switch>
    </BrowserRouter>
}

export default RootRouter;