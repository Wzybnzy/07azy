import React, { Component } from 'react'
import axios from 'axios'

export default class componentName extends Component {
  state = {
    user: "",
    pwd: ""
  }
  render() {
    let { user, pwd } = this.state
    return (
      <div className="register">
        <div>
          <input type="text" value={user} name="user" onChange={this.handChange.bind(this)} />
          <input type="text" value={pwd} name="pwd" onChange={this.handChange.bind(this)} />
          <span onClick={this.registerClick.bind(this)}>注册</span>
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
    let { user, pwd } = this.state
    let res = await axios.post("/register", { user, pwd });
    if (res.data.code === 1) {
      console.log("注册成功")
      this.props.history.push("/login")
    } else {
      console.log(res.data.msg)
    }
  }
}
