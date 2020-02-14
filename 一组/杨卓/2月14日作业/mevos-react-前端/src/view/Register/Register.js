import React, { Component } from 'react'
import axios from 'axios'
import "antd-mobile/lib/toast/style/css"
import Toast from "antd-mobile/lib/toast"
export default class Register extends Component {
    state={
        phone:"",
        pwd:"",
        // flag:false
    }
    render() {
        let {phone,pwd}=this.state
        return (
            <div className='register-page'>
                <div className="register-main">
                <h1>注册</h1>
                <div className='register-main-main'>
                    <div>
                        <input type="text" placeholder="手机号" value={phone} name='phone' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div>
                        <input type="text" placeholder="密码" value={pwd} name='pwd' onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <button onClick={()=>{this.registerfn()}}>注册</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    handleChange(e){
        let name=e.target.name;
        this.setState({
            [name]:e.target.value
        })        
    }
    registerfn=()=>{
        let name=this.state.name
        let pwd=this.state.pwd
        axios.post("/register",{name,pwd}).then((res)=>{
            console.log(res.data.code);
            if(res.data.code===4){//缺少参数
                Toast.info(res.data.msg)
                return;
            }
            if(res.data.code===3){//参数校验失败
                Toast.info(res.data.msg)
                return;
            }
            if(res.data.code===1){//注册成功
                window.localStorage.user=JSON.stringify(res.data)
                this.props.history.push({pathname:"/login"})
                Toast.info(res.data.msg)
            }else{//注册失败
                Toast.info(res.data.msg)
            }
        })
    }
}
