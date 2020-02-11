import React, { Component } from 'react'
import axios from "axios"
export default class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                {/* 首页 */}
                {/* 首页头部 */}
                <header>
                    <div>
                        <h3>会议室预定系统</h3>
                    </div>
                    <div>
                        <input placeholder='查看当前页面对应的工作台设置'/>
                    </div>
                    <div>
                        <span>姓名：</span>
                        <span>密码：</span>
                    </div>
                    <div>
                        <span>退出</span>
                    </div>
                </header>
                {/* 首页主体 */}
                <div className='wrapper'>
                    <div className='home-left'>

                    </div>
                    <div className='home-right'>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let uid=JSON.parse(window.localStorage.user).uid
        axios.get("/getuserinfo",{params:uid}).then((res)=>{
            console.log(res.data);
        })
    }
}
