import React, { Component } from 'react'
import axioshttp from "../../request/reuquest"
export default class Home extends Component {

    state = {
        list: []
    }
    async componentDidMount() {
        let res = await axioshttp.get("/list")
        console.log(res)
        this.setState({
            list: res.data
        })
    }
   async delfn(id){
       console.log(id)
         let res=await axioshttp.get("/del",{
            params:{id:id}
         })
         console.log(res)
         if(res.data.code===1){
             alert("删除成功")
         }else{
             alert("删除失败")
         }
    }
    render() {
        return (
            <div className="home">
                <div className="top">
                    <button>添加用户</button>
                    <button>删除用户</button>
                </div>
                <div className="main">
                    <div className="main_a">
                        <p>全选</p>
                        <p>用户昵称</p>
                        <p>手机号</p>
                        <p>标签</p>
                        <p>用户身份</p>
                        <p>身份证</p>
                        <p>公司地址</p>
                        <p>操作</p>
                    </div>
                    <div className="main_b">
                        {
                            this.state.list && this.state.list.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <p><input type="checkbox" name="" id="" /></p>
                                        <p>{item.s_name}</p>
                                        <p>{item.s_phone}</p>
                                        <p>{item.bq}</p>
                                        <p>{item.yh}</p>
                                        <p>{item.sf}</p>
                                        <p>{item.address}</p>
                                        <p>
                                        <button onClick={()=>this.delfn(item.id)}>删除</button>
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
