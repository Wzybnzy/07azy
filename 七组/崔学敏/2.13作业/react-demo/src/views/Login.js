import React, { Component } from 'react'
// import axios from 'axios';
import httpAxios from '../utils/request.js'
export default class Login extends Component {
    state = {
        phone: '',
        pwd: ''
    }
    render() {
        let { phone, pwd } = this.state;
        return (
            <div className="login">
                <div className="cont">
                    <input type="text" placeholder="请输入手机号" value={phone} name='phone' onChange={this.handleChange.bind(this)} /><br />
                    <input type="text" placeholder="请输入密码" value={pwd} name='pwd' onChange={this.handleChange.bind(this)} /><br />
                    <button onClick={this.handleLogin.bind(this)}>登录</button><br />
                    <button onClick={this.goToRegistry.bind(this)}>注册</button>
                </div>
            </div>
        )
    }
    handleChange(e) {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    async handleLogin() {
        let { phone, pwd } = this.state;
        let res = await httpAxios.post('/login', { phone, pwd });
        if (res.data.code == 1) {
            window.localStorage.user = JSON.stringify({ token: res.data.token, uid: res.data.uid });
            this.props.history.push('/home')
        }
    }
    goToRegistry() {
        this.props.history.push('/zc')
    }

}
