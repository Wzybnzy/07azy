import React, { Component } from 'react'
// import axios from "axios"
import httpAxios from "../../utils/request";
import {NavLink,Switch,Redirect,Route} from "react-router-dom";
import Home from "./Home/Home"
import Mange from "./Mange/Mange"
import Preview from "./Preview/Preview"
import Room from "./Room/Room"
import Sys from "./Sys/Sys"
export default class Index extends Component {
    state = {
        role: "",
        list:[]
    }
    async componentDidMount() {
        let res = await httpAxios.get("/getmes", { params: { uid: window.localStorage.uid } })
        let rolepath=await httpAxios.get("/getlist", { params: { uid: window.localStorage.uid } });
        this.setState({
            role:res.data.data[0].role_name,
            
            list:rolepath.data.data
        })
        console.log(this.state)
    }
    render() {
        let {role,list}=this.state;
        return (
            <div className="index">
                <div className="header">
                    <div className="input-box">
                        <input type="text" /><button>搜索</button>
                    </div>
                    <p>
                        <span>
                            用户：{window.localStorage.name}
                        </span>
                        <span>
                            身份：{role}
                        </span>

                    </p>
                </div>
                <div className="main">
                    <div className="left">
                        {
                            list && list.map((item,index)=>{
                                return (
                                <NavLink to={item.url} key={index}>{item.road}</NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="right">
                        <Switch>
                            <Route path="/index/home" component={Home}></Route>
                            <Route path="/index/preview" component={Preview}></Route>
                            <Route path="/index/room" component={Room}></Route>
                            <Route path="/index/mange" component={Mange}></Route>
                            <Route path="/index/sys" component={Sys}></Route>
                            <Redirect to="/index/home"></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
