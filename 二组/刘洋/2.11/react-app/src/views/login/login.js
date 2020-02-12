import React, { Component } from 'react'
import httpAxios from '../../utils/request'
export default class login extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            pwd:""
        }
    }
    changeVal(e){
        let name=e.target.name
        this.setState({
            [name]:e.target.value
        })
        
    }
   async login(){
        let {name,pwd}=this.state
       let res=await httpAxios.post("/api/login",{name,pwd})
       console.log(res.data)
       if(res.data.code===1){
           console.log(this.props.history)
           localStorage.name=res.data.data.name
           localStorage.token=res.data.data.token
           localStorage.statu=res.data.data.statu
           this.props.history.push("/index")
       }else{
           alert(res.data.msg)
       }
    }
    toregister(){
        this.props.history.push("/register")
    }
    render() {
        let {name,pwd}=this.state
        return (
            <div className="login">
               <p>用户名:<input value={name} name="name" onChange={(e)=>{this.changeVal(e)}}></input></p>
               <p>密码:<input value={pwd} name="pwd"  onChange={(e)=>{this.changeVal(e)}}></input></p>
               <button onClick={()=>{this.login()}}>登陆</button>
               <button onClick={()=>{this.toregister()}}>注册</button>
            </div>
        )
    }
}
