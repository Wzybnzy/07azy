import React, { Component } from 'react'
import httpAxios from '../utils/request.js'

export default class Registry extends Component {
    state = {
        phone: '',
        pwd: ''
    }
  render() {
    let { phone, pwd } = this.state;

    return (
      <div className="registry">
        <div className="cont">
                    <input type="text" placeholder="请输入手机号" value={phone} name='phone' onChange={this.handleChange.bind(this)} /><br />
                    <input type="text" placeholder="请输入密码" value={pwd} name='pwd' onChange={this.handleChange.bind(this)} /><br />
                   
                    <button onClick={this.handleZc.bind(this)}>注册</button><br/>
                    <button onClick={this.goToLogin.bind(this)}>去登录</button>
                    
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
async handleZc(){
    let { phone, pwd } = this.state;
let res=await httpAxios.post('/registry',{phone,pwd});
if(res.data.code==1){
    alert(res.data.mes)
}else{
  alert(res.data.mes)
}
}
goToLogin(){
    this.props.history.push('/deng')
}
}
