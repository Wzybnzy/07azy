import React, { Component } from 'react';
import axios from '../../utils/request';
import RouterView from '../../router/routerview';

export default class Home extends Component {
    state = {
        role: '',
        name: '',
        list: '',
    };
    componentDidMount() {
        let id = window.localStorage.uid;
        axios
            .get('/getuserinfo', {
                params: {
                    id,
                },
            })
            .then(res => {
                console.log(res.data[0].role_name);
                this.setState({
                    role: res.data[0].role_name,
                    name: window.localStorage.name,
                });
            });

        axios
            .get('/getuserpower', {
                params: {
                    id,
                },
            })
            .then(res => {
                this.setState({
                    list: res.data.data,
                });
            });
    }
    jump = url => {
        this.props.history.push(url);
    };

    render() {
        let { role, name, list } = this.state;
        return (
            <div className="home">
                <header>
                    姓名：{name} 身份：{role}
                </header>
                <div className="left">
                    {list &&
                        list.map((v, i) => {
                            return (
                                <p
                                    key={i}
                                    onClick={() => {
                                        this.jump(v.url);
                                    }}
                                >
                                    {v.power_name}
                                </p>
                            );
                        })}
                </div>
                <div className="right">
                    <RouterView routes={this.props.routes}></RouterView>
                </div>
            </div>
        );
    }
}
