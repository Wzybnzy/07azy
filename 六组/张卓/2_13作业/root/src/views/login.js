import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input  } from 'antd';
export default class login extends Component {
    state  = {
        phone:"",
        pwd:""
    }
    render() {
        let { phone,pwd} = this.state
        return (
            <div>
                  <Input placeholder="请输入手机号" name="phone" value={phone} onChange={this.handleChange.bind(this)} /> 
                  <Input placeholder="请输入密码" name="pwd" value={pwd} onChange={this.handleChange.bind(this)} />
                  {/* <Input placeholder="请输入密码" name="pwd" value={pwd} onChange={(e)=>handleChange()} /> */}
                  <Button onClick={this.handleSubmit.bind(this)}>登录</Button>
                  {/* <Button onClick={()=>this.handleSubmit()}>登录</Button> */}
            </div>
        )
    }
    handleChange(e){
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }
     async handleSubmit(){
        let {phone,pwd} = this.state
        let res = await axios.post('/login',{
            phone,
            pwd
        })
        if(res.data.code===0){
            console.log(res.data.mgs);    
        };
        
        if(res.data.code==1){
            console.log(55); 
            window.localStorage.user = JSON.stringify({token:res.data.token,uid:res.data.uid})
            this.props.history.push('/home');
        }
    }
}
