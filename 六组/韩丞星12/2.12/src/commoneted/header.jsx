import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="com_header">
                <div><h2>会议室系统</h2></div>
                <div><input type="text" placeholder="查看当前页面对应的工作台设置" /></div>
                <div>
                    <span>姓名:</span>
                    <span>管理员</span>
                    <span>退出</span>
                </div>
            </div>
        )
    }
}
