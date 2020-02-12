import React, { Component } from 'react'
import axios from "axios"
export default class Registry extends Component {
    state={
        name:"",
        pwd:""
    }
    changevalue(e){
        let key=e.target.name
        this.setState({
            [key]:e.target.value
        })
    }
    async registry(){
        let {name,pwd}=this.state
        let res=await axios.post('/registry',{name,pwd})
        console.log(res)
        if(res.data.code===1){
            this.props.history.go(-1)
        }else{
            console.log("注册失败")
        }
    }
    render() {
        let {name,pwd}=this.state
        return (
            <div>
                <p>账号: <input type="text" value={name} name="name" onChange={this.changevalue.bind(this)} /></p>
                <p>密码: <input type="text" value={pwd} name="pwd" onChange={this.changevalue.bind(this)} /></p>
                <button onClick={this.registry.bind(this)}>注册</button>
            </div>
        )
    }
}
