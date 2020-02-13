import React, { Component } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'

export default class Register extends Component {
  state = {
    tel: "",
    pwd: ""
  }
  render() {
    let { tel, pwd } = this.state;
    return (
      <div className="register">
        <div className="form">
          <Input placeholder="请输入手机号" value={tel} name="tel" onChange={this.handChange.bind(this)} />
          <Input placeholder="请输入密码" value={pwd} name="pwd" onChange={this.handChange.bind(this)} />
          <Button type="primary" onClick={this.registerClick.bind(this)}>注册</Button>
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
  async registerClick() {
    let { tel, pwd } = this.state;
    let res = await axios.post("/register", { tel, pwd });
    if (res.data.code === 1) {
      console.log(res.data.msg);
      this.props.history.push("/login");
    } else {
      console.log(res.data.msg);
    }
  }
}
