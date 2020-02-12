import React, { Component } from 'react'
import axios from 'axios'
import Cur from './current/Cur'
import All from './all/All'
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'



export default class List extends Component {
    state = {
        list: [],
        flag: false
    }

    componentDidMount(){
        axios.get('/list').then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    // 楼层跳转
    link = (index) => {
        this.refs.listPage.scrollTop = this.refs['group'+index].offsetTop
    }

    // 显示三级路由
    show = (carType = []) => {
        localStorage.setItem('carType', JSON.stringify(carType))
        this.setState({
            flag: true
        })
        this.props.history.push('/home/list/cur')
    }

    hide = () => {
        this.setState({
            flag: false
        })
        this.props.history.push('/home/list')
    }


    render() {
        return (
            <div className="wrap list-page" ref="listPage">
                {
                    this.state.list.map((val, index) => {
                        return (
                            <div className="group" ref={'group'+index} key={val.type}>
                                <h2>{val.type}</h2>
                                {
                                    val.children.map(v => {
                                        return <p onClick={() => this.show(v.carType)} key={v.id}>{v.text}</p>
                                    })
                                }
                            </div>
                        )
                    })
                }
                <div className="nav">
                    {
                        this.state.list.map((val, index) => {
                            return <p key={val.type} onClick={() => this.link(index)}>{val.type}</p>
                        })
                    }
                </div>
                <div className="car" style={{display: this.state.flag ? 'block' : 'none'}}>
                    <div className="mark" onClick={this.hide}></div>
                    <div className="con">
                        <nav>
                            <NavLink to="/home/list/cur">在售</NavLink>
                            <NavLink to="/home/list/all">全部</NavLink>
                        </nav>
                        <div className="inner">
                            <Switch>
                                <Route path="/home/list/cur" component={Cur} />
                                <Route path="/home/list/all" component={All} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
