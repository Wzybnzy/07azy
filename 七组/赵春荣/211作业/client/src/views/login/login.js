import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    dl = () => {
        let obj = {
            name: this.refs.name.value,
            pwd: this.refs.pwd.value,
        };
        let { name, pwd } = obj;
        if (!name || !pwd) {
            alert('信息不可为空');
            return;
        }
        axios
            .post('/login', {
                name,
                pwd,
            })
            .then(res => {
                console.log(res);
                if (res.data.code === 1) {
                    alert('登陆成功');
                    window.localStorage.token = res.data.token;
                    window.localStorage.uid = res.data.uid;
                    window.localStorage.name = name;
                    this.props.history.push({
                        pathname: '/home',
                        query: {
                            name: name,
                        },
                    });
                } else if (res.data.code === 3) {
                    alert('该用户不存在 请注册');
                    this.props.history.push('/registry');
                }
            });
    };
    render() {
        return (
            <div>
                用户名：<input type="text" ref="name"></input>
                <br></br>
                密码：<input type="password" ref="pwd"></input>
                <br></br>
                <button onClick={this.dl}>登陆</button>
            </div>
        );
    }
}
