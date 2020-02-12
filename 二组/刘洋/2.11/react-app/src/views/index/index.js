import React, { Component } from 'react'
import httpAxios from '../../utils/request'
import {NavLink,Swicth,Routh,Redirect} from 'react-router-dom'
export default class index extends Component {
    constructor(){
        super()
        this.state={
            name:localStorage.name,
            statu:"",
            list:[]
        }
    }
   async componentDidMount(){
      let res= await httpAxios.post("/api/statu",{statu_id:localStorage.statu})
      console.log(res)
      this.setState({
          statu:res.data.data.statu,
          list:res.data.data.res
      })
    }
    render() {
        let {name,statu,list}=this.state
        return (
            <div className="index">
                <p>欢迎:{name}{statu}</p>
                <div>
                    {
                        list&&list.map((item,index)=>{
                            return (
                            <NavLink key={index} to={item.path}>{item.pname}</NavLink>
                            )
                        })
                    }
                </div>
                
            </div>
        )
    }
}
