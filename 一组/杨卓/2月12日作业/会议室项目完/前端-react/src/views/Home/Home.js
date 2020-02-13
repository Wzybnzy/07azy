import React, { Component } from 'react'
import httpAxios from "../../utils/request"
import RouterView from "../../router/routerView"
export default class Home extends Component {
    state={
        name:"",
        list:[]
    }
    render() {
        let {name,list}=this.state;
        let {child}=this.props;
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
                        <span>姓名：{JSON.parse(window.localStorage.user).name}&nbsp;&nbsp;</span>
                        <span>身份：{name}</span>
                    </div>
                    <div>
                        <span>退出</span>
                    </div>
                </header>
                {/* 首页主体 */}
                <div className='wrapper'>
                    <div className='home-left'>
                        {
                            list&&list.map((item,index)=><p key={index} onClick={()=>{this.itemp(item.url)}}>{item.p_name}</p>)
                        }
                    </div>
                    <div className='home-right'>
                        <RouterView routes={child}></RouterView>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount(){
        let uid=JSON.parse(window.localStorage.user).uid
        let res=await httpAxios.get('/getuserinfo?uid='+uid)
        let list=await httpAxios.get('/getlist?uid='+uid)
        this.setState({
            name:res.data.r_name,
            list:list.data
        })
    }
    itemp=(url)=>{//跳路由
        this.props.history.push(url)
    }
}
