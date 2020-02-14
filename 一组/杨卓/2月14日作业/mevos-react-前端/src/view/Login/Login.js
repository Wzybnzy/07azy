import React, { Component } from 'react'
import axios from 'axios'
import "antd-mobile/lib/toast/style/css"
import Toast from "antd-mobile/lib/toast"
export default class Login extends Component {
    state={
        phone:"",
        pwd:"",
        // flag:false
    }
    render() {
        let {phone,pwd}=this.state
        return (
            <div className='login-page'>
                <div className="login-main">
                <h1>美沃斯数据管理中心</h1>
                <div className='login-main-main'>
                    <div>
                        <input type="text" placeholder="手机号" value={phone} name='phone' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div>
                        <input type="text" placeholder="密码" value={pwd} name='pwd' onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <button onClick={()=>{this.loginfn()}}>登录</button>
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
    loginfn=()=>{
        let phone=this.state.phone
        let pwd=this.state.pwd
        axios.post("/login",{phone,pwd}).then((res)=>{
            console.log(res.data.code);
            if(res.data.code===4){//缺少参数
                Toast.info(res.data.msg)
                return;
            }
            if(res.data.code===3){//参数校验失败
                Toast.info(res.data.msg)
                return;
            }
            if(res.data.code===2){//没有该用户
                Toast.info(res.data.msg)
                this.props.history.push({pathname:"/register"})
                return;
            }
            if(res.data.code===1){//登录成功
                window.localStorage.user=JSON.stringify(res.data)
                this.props.history.push({pathname:"/home"})
                Toast.info(res.data.msg)
            }else{//登录失败
                Toast.info(res.data.msg)
            }
        })
    }
}
