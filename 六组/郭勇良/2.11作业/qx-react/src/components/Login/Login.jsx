import React, { Component } from 'react'
import Axios from 'axios';

export default class Login extends Component {
    state={
        name:"",
        pwd:""
    }
    render() {
        let {name,pwd}=this.state
        return (
            <div>
              <p>用户名：<input type="text" value={name} name='name' onChange={this.handleChange.bind(this)}/></p> 
              <p>密码：<input type="password" value={pwd} name='pwd' onChange={this.handleChange.bind(this)}/></p>
              <p><button onClick={this.Submit.bind(this)}>登录</button></p> 
              <button onClick={this.zc.bind(this)}>注册</button>  
            </div>
        )
    }
    handleChange(e){
        let name=e.target.name
        this.setState({
            [name]:e.target.value
        })
    }
    async Submit(){
        let {name,pwd}=this.state
        let res=await Axios.post("/login",{name,pwd})
      if(res.data.code===1){
        alert("登录成功")
        this.props.history.push("/index")
      }
        
    }
    zc(){
        this.props.history.push("/registry")
    }
}
