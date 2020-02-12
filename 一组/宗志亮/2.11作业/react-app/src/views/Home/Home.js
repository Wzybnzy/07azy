import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
    state={
        name:'',uid:''
    }
    render() {
        let {name}=this.state;
        return (
            <div className='home'>
                <div className="header">
                    <span>姓名：{name}</span>
                    <span>身份：</span>
                </div>
                <div className='wrapper'>
                    <div className="left">
                        <span>项目一</span>
                        <span>项目二</span>
                        <span>项目三</span>
                    </div>
                    <div className="right">
                        
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.setState({
            name:window.localStorage.name,
            uid:window.localStorage.uid,
            token:window.localStorage.token
        })
        axios.post('/userinfo',)
    }
}

export default Home;

