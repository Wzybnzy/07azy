import React, { Component } from 'react'

export default class All extends Component {

    state = {
        list: JSON.parse(localStorage.getItem('carType'))
    }

    link = (id) => {
        this.props.history.push('/detail/'+id)
    }

    render() {
        return (
            <div>
                {this.state.list.length <= 0 ? '暂无数据' :
                    this.state.list.map(val => {
                        return <p key={val.id} onClick={() => this.link(val.id)}>{val.text}</p>
                    })
                }
            </div>
        )
    }
}
