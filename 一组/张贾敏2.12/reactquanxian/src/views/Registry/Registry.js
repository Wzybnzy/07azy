import React, { Component } from 'react'
import axios from "axios"
export default class Login extends Component {
    state={
        name:"",
        pwd:""
    }

    hander(e){
        // console.log(e,"1111111111")
        let name=e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }

  async  resclick(){
        let {name,pwd}=this.state;
        console.log(name,pwd,"888888888")

        let res=await axios.post("/registry",{
            name:name,
            pwd:pwd
        })
        console.log(res,"444444444444444444444444444444")
        if(res.data.code===1){
            // window.localStorage.token=res.data.token;
            // window.localStorage.name=res.data.name
            this.props.history.push("/login")
        }else if(res.data.code===0){
            alert("注册失败")
        }else if(res.data.code===2){
            alert("用户名已经存在，请换一个")
        }else if(res.data.code===3){
            alert("参数不能为空")
        }else if(res.data.code===4){
            alert("参数类型校验失败")
        }
    }

    
    render() {
        return (
            <div>
               <input type="text" placeholder="请输入用户名" value={this.state.name} name="name" onChange={this.hander.bind(this)}/>
               <input type="text" placeholder="请输入密码" value={this.state.pwd} name="pwd" onChange={this.hander.bind(this)}/>
               <button onClick={this.resclick.bind(this)}>注册</button>
            </div>
        )
    }
}
