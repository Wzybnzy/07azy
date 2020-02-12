import React, { Component } from 'react'
import axios from "axios"
export default class Login extends Component {
    state={
        name:"",
        pwd:"",
        flag:false
    }
    changevalue(e){
        let key=e.target.name
        this.setState({
            [key]:e.target.value
        })
    }
    async login(){
        let {name,pwd}=this.state
        let res=await axios.post('/login',{name,pwd})
        console.log(res)
        if(res.data.code===1){
            window.localStorage.token=res.data.token
            window.localStorage.name=name
            this.props.history.push('/index/home')
        }else{
            this.setState({flag:true})
        }
    }
    registry(){
        this.props.history.push("/registry")
    }
    render() {
        let {name,pwd,flag}=this.state
        return (
            <div className="login">
                <p>账号: <input type="text" value={name} name="name" onChange={this.changevalue.bind(this)} /></p>
                <p>密码: <input type="text" value={pwd} name="pwd" onChange={this.changevalue.bind(this)} /></p>
                <button onClick={this.login.bind(this)}>登录</button>
                {flag?<p onClick={this.registry.bind(this)}>注册</p>:""}
            </div>
        )
    }
}
