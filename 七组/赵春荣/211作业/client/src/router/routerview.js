import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink, Link } from 'react-router-dom';

export default class RouterView extends Component {
    render() {
        let { routes } = this.props;
        let redirect = routes.filter(v => v.redirect);
        routes = routes.filter(v => !v.redirect);
        return (
            <div className="RouterViews">
                <Switch>
                    {routes.map((v, i) => {
                        if (v.children) {
                            return (
                                <Route
                                    key={i}
                                    path={v.path}
                                    render={props => {
                                        return (
                                            <v.component
                                                routes={v.children}
                                                {...props}
                                            ></v.component>
                                        );
                                    }}
                                ></Route>
                            );
                        } else {
                            return <Route path={v.path} key={i} component={v.component}></Route>;
                        }
                    })}
                    {redirect.map((v, i) => {
                        return <Redirect key={i} from={v.path} to={v.redirect}></Redirect>;
                    })}
                </Switch>
            </div>
        );
    }
}
