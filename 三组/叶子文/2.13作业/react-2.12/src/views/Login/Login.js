import React, { Component } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'

export default class Login extends Component {
  state = {
    tel: "",
    pwd: "",
    flag: false
  }
  render() {
    let { tel, pwd, flag } = this.state;
    return (
      <div className="login">
        <div className="form">
          <Input placeholder="请输入手机号" value={tel} name="tel" onChange={this.handChange.bind(this)} />
          <Input placeholder="请输入密码" value={pwd} name="pwd" onChange={this.handChange.bind(this)} />
          <Button type="primary" onClick={this.loginClick.bind(this)}>登录</Button>
          {
            flag && <Button type="primary" onClick={() => { this.props.history.push("/register") }}>注册</Button>
          }
        </div>
      </div>
    )
  }
  handChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  async loginClick() {
    let { tel, pwd } = this.state;
    let res = await axios.post("/login", { tel, pwd });
    if (res.data.code === 1) {
      console.log(res.data.msg);
      localStorage.setItem("token", res.data.token);
      this.props.history.push("/home");
    } else {
      console.log(res.data.msg);
      this.setState({
        flag: true
      })
    }
  }
}
