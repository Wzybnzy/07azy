import React from 'react';
import './App.scss';
import Home from './views/home/Home'
import Detail from './views/detail/Detail'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './mock/index'
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/detail/:id" component={Detail} />
                <Redirect from="/" to="/home" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
