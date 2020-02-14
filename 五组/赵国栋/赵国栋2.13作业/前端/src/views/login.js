import React, { Component } from 'react'
import axios from "axios"

export default class login extends Component {
    state={
        phone:"",
        pwd:""
    }
    render() {
        let {phone,pwd}=this.state
        return (
            <div>
                <input placeholder="请输入手机号码" name="phone" value={phone} onChange={this.ipt.bind(this)}/>
                <input placeholder="请输入密码" name="pwd" value={pwd} onChange={this.ipt.bind(this)}/>
                <button onClick={this.submit.bind(this)}>登录</button>
                
            </div>
        )
    }

    ipt(e){
        let name=e.target.name
        this.setState({
            [name]:e.target.value
        })
    }
    async submit(){
        let {phone,pwd}=this.state
        let res=await axios.post("/login",{
            phone,pwd
        })
        if(res.data.code==1){
            window.localStorage.user=JSON.stringify({
                token:res.data.token,
                uid:res.data.uid
            })
            this.props.history.push("/home")
        }else{
            alert("手机号或密码错误，请重新登录")
        }
    }
}
