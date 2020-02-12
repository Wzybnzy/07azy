import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import List from './list/List'
import My from './my/My'


export default class Home extends Component {
    render() {
        return (
            <div className="wrap home-page">
                <main>
                    <Switch>
                        <Route path="/home/list" component={List} />
                        <Route path="/home/my" component={My} />
                        <Redirect from="/home" to="/home/list" />
                    </Switch>
                </main>
                <footer>
                    <NavLink to="/home/list">选车</NavLink>
                    <NavLink to="/home/my">我的</NavLink>
                </footer>
            </div>
        )
    }
}
