import React, { Component } from 'react'
import axios from "axios"
export default class Rreserveroom extends Component {
    state = {
        list: []
    }
    async componentDidMount() {
        let res = await axios.get('/list')
        // console.log(res)
        this.list = res.data.mes
        console.log(this.list)
    }
    dele(index){
        this.list.splice(index,1)
        console.log(this.list)
    }
    render() {
        return (
            <div className="view_reserverroom">
                {
                    this.list && this.list.map((item, index) => {
                        return <div key={index} className="view_room">
                            <span>{item.name}</span>
                            <span>{item.text}</span>
                            <span>{item.title}</span>
                            <p>
                                <button>修改</button>
                                <button onClick={()=>this.dele(index)}>删除</button>
                            </p>
                        </div>
                    })
                }
            </div>
        )
    }
}
