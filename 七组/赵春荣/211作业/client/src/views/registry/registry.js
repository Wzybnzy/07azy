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
            .post('/registry', {
                name,
                pwd,
            })
            .then(res => {
                console.log(res);
                if (res.data.code === 1) {
                    alert('注册成功');
                    this.props.history.push('/login');
                } else if (res.data.code === 3) {
                    alert('该用户已注册 请重新注册');
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
                <button onClick={this.dl}>注册</button>
            </div>
        );
    }
}
