import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "../router/routerview"
import Header from "../commoneted/header"
export default class Index extends Component {
    state={
        arr:[
            {
                txt:"首页",
                url:"/index/home"
            },
            {
                txt:"预定会议室",
                url:"/index/reserveroom"
            },
            {
                txt:"我的预定",
                url:"/index/myreserve"
            },
            {
                txt:"预定审批",
                url:"/index/reserveknow"
            },
            {
                txt:"系统设置",
                url:"/index/set"
            }
        ]
    }
    render() {
        let {child}=this.props
        let {arr}=this.state
        return (
            <div className="index">
                <Header></Header>
                <div className="left">
                    {
                        arr&&arr.map((item,index)=><p key={index}><NavLink key={index} to={item.url}>{item.txt}</NavLink></p>)
                    }
                </div>
                <div className="right">
                    <RouterView routes={child}></RouterView>
                </div>
            </div>
        )
    }
}
