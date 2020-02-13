import React, { Component } from 'react'
import axios from "axios"
export default class Login extends Component {
    state = {
        name: '',
        pwd: ''
    }
    render() {
        let { name, pwd } = this.state;
        return (
            <div className="registry">
                <p>
                    <input placeholder="请输入用户名" value={name} name="name" onChange={this.handleChange.bind(this)} />
                </p>
                <p>
                    <input type="password" placeholder="请输入密码" value={pwd} name="pwd" onChange={this.handleChange.bind(this)} />
                </p>

                <button onClick={this.handleSubmit.bind(this)}>注册</button>
            </div>
        )
    }
    handleChange(e) {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    async handleSubmit() {
        let { name, pwd } = this.state;
        let res = await axios.post('/registry', {
            name, pwd
        });
        if (res.data.code == 1) {
            this.props.history.go(-1)
        } else if (res.data.code == 2) {
            this.props.history.push("/registry")
        }
    }

}

