import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import Routerview from "../../router/routerview"
export default class Home extends Component {
    render() {
        let {child}=this.props
        return (
            <div className="index">
                 <div className="rigth">
                 <div>
                 <NavLink to="/home/appr">预定审批(管理员)</NavLink>
                   <NavLink to="/home/mange">会议室管理(管理员)</NavLink>
                   <NavLink to="/home/myappr">会议室预定(管理员)</NavLink>
                   <NavLink to="/home/myreserve">我的预定</NavLink>
                   <NavLink to="/home/reserve">定义会议</NavLink>
                   <NavLink to="/home/system">设置</NavLink>
                 </div>
               </div>
               <div className="left">
                    <Routerview routes={child}></Routerview>
               </div>
              
            </div>
        )
    }
}
