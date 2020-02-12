import React, { Component } from 'react'
import { NavLink, Switch, Redirect, Route } from 'react-router-dom'
import httpAxios from '../../utils/request'
import Index from './Index/Index'
import Hy from './Hy/Hy'
import My from './My/My'
import Yd from './Yd/Yd'
import Hyyd from './Hyyd/Hyyd'
import Hygl from './Hygl/Hygl'
import Qy from './Qy/Qy'
import Set from './Set/Set'
import Ydjl from './Ydjl/Ydjl'

export default class Home extends Component {

  state = {
    role: "",
    list: []
  }
  async componentDidMount() {
    let res = await httpAxios.get("/role", { params: { uId: localStorage.getItem("uId") } })
    if (res.data.code === 1) {
      this.setState({ role: res.data.data[0].role_name });
    }
    let data = await httpAxios.get("/limit", { params: { uId: localStorage.getItem("uId") } })
    console.log(data.data.data)
    if (data.data.code === 1) {
      this.setState({ list: data.data.data });
    }
  }
  render() {
    let { list } = this.state
    return (
      <div className="home">

        <header>
          <h3>会议预定系统</h3>
          <span>欢迎:{localStorage.getItem("name")}</span>
          <span>{this.state.role}</span>
        </header>

        <div className="main">
          <div className="left">
            {
              list && list.map((item, index) => {
                return (
                  <NavLink to={item.url} key={index}>{item.url_name}</NavLink>

                )
              })
            }
          </div>
          <div className="right">
            <Switch>
              <Route path="/home/index" component={Index}></Route>
              <Route path="/home/hy" component={Hy}></Route>
              <Route path="/home/my" component={My}></Route>
              <Route path="/home/yd" component={Yd}></Route>
              <Route path="/home/hyyd" component={Hyyd}></Route>
              <Route path="/home/hygl" component={Hygl}></Route>
              <Route path="/home/qy" component={Qy}></Route>
              <Route path="/home/set" component={Set}></Route>
              <Route path="/home/ydjl" component={Ydjl}></Route>

              <Redirect path="/home" to="/home/index"></Redirect>
            </Switch>
          </div>

        </div>
      </div>
    )
  }
}
