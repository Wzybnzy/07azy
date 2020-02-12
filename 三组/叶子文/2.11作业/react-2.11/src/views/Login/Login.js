import React, { Component } from 'react'
import axios from 'axios'

export default class componentName extends Component {
  state = {
    user: "",
    pwd: "",
    isShow: false
  }
  render() {
    let { user, pwd, isShow } = this.state;
    return (
      <div className="login">
        <div>
          <input type="text" value={user} name="user" onChange={this.handChange.bind(this)} />
          <input type="text" value={pwd} name="pwd" onChange={this.handChange.bind(this)} />
          <span onClick={this.loginClick.bind(this)}>登录</span>
          {isShow && <span onClick={this.toRegister.bind(this)}>注册</span>}
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
  toRegister() {
    this.props.history.push("/register")
  }
  async loginClick() {
    let { user, pwd } = this.state;
    let res = await axios.post("/login", { user, pwd });
    if (res.data.code === 1) {
      console.log("登录成功");
      localStorage.setItem("name", user);
      localStorage.setItem("uId", res.data.uId);
      localStorage.setItem("token", res.data.token);
      this.props.history.push("/home")
    } else {
      console.log(res.data.msg)
      this.setState({
        isShow: true
      })
    }
  }
}
