import React, { Component } from 'react'

import axioshttp from "../../request/reuquest"
export default class Registry extends Component {
    state={
        phone:"",
        pwd:""
    }
    handfn(e){
        let phone=e.target.name;
        this.setState({
            [phone]:e.target.value
        })
    }
    
   async registryfn(){
        let {phone,pwd}=this.state;
        let res=await axioshttp.post("/registry",{
            phone:phone,
            pwd:pwd
        })
        console.log(res,"11111111")
        if(res.data.code===1){
            this.props.history.push("/login")
        }else if(res.data.code===2){
            alert("手机号已经被注册过啦，请重新注册一个")
        }else if(res.data.code===3){
            alert("参数不能为空")
        }else if(res.data.code===4){
            alert("参数的类型不正确")
        }else{
            alert ("注册的不正确")
        }
    }
    render() {
        return (
            <div>
                手机号： <input type="text" name="phone" placeholder="请输入手机号" value={this.state.phone} onChange={this.handfn.bind(this)}/>
                密码: <input type="text" name="pwd" placeholder="请输入密码" value={this.state.pwd} onChange={this.handfn.bind(this)}/>
                <button onClick={this.registryfn.bind(this)}>注册</button>
            </div>
        )
    }
}
