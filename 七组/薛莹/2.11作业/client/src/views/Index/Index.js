import React, { Component } from 'react'
import axios from "axios"
export default class Index extends Component {
    state = {
        role: ""
    }
    async componentDidMount() {
        let res = await axios.get("/getmes", { params: { uid: window.localStorage.uid } })
        // this.setState={
        //     role:
        // }
    }
    render() {
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
                            身份：{this.state.role}
                        </span>

                    </p>
                </div>
                <div className="main">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
        )
    }
}
