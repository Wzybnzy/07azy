import React, { Component } from 'react'
import axioshttp from "../../request/reuquest"

export default class Login extends Component {
    state={
        phone:'',
        pwd:""
    }
    header(e){
     console.log(e,"1111111111")
     let phone=e.target.name;
     this.setState({
         [phone]:e.target.value
     })
    }

  async loginfn(){
        let {phone,pwd}=this.state;
        console.log(phone,pwd)
        let res=await axioshttp.post("/login",{phone:phone,pwd:pwd}) 
        console.log(res)
        if(res.data.code===1){
            window.localStorage.token=res.data.token
            window.localStorage.phone=res.data.phone
            this.props.history.push("/home")
        }else if(res.data.code===2){
            alert("手机号没有被注册过了，请先注册")
        }else if(res.data.code===3){
            alert("参数不能为空")
        }else if(res.data.code===4){
            alert("输入的参数类型不对")
        }else{
            alert("登录错误")
        }
    }

    registryfn(){
        this.props.history.push("/registry")
    }
    render() {
        return (
            <div>
               手机号: <input type="text" placeholder="请输入手机号" value={this.state.phone} name="phone" onChange={this.header.bind(this)}/>
               密码: <input type="text" placeholder="请输入密码" value={this.state.pwd} name="pwd" onChange={this.header.bind(this)}/>
               <button onClick={this.loginfn.bind(this)}>登录</button>
               <button onClick={this.registryfn.bind(this)}>注册</button>
            </div>
        )
    }
}
