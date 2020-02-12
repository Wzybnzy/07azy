import React, { Component } from 'react'
import httpAxios from '../../utils/request'
export default class register extends Component {
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
   async register(){
    let {name,pwd}=this.state
       let res=await httpAxios.post("/api/register",{name,pwd})
       if(res.data.code===1){
           this.props.history.push("/login")
       }else{
           alert(res.data.msg);
       }
    }
    render() {
        let {name,pwd}=this.state
        return (
            <div className="register">
                <p>用户名:<input value={name} name="name" onChange={(e)=>{this.changeVal(e)}}></input></p>
                <p>密码:<input value={pwd} name="pwd"  onChange={(e)=>{this.changeVal(e)}}></input></p>
                <button onClick={()=>{this.register()}}>注册</button>
            </div>
        )
    }
}
