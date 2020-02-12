import React, { Component } from 'react'

export default class Cur extends Component {

    state = {
        list: JSON.parse(localStorage.getItem('carType')).filter(v => v.type == 1)
    }
    
    link = (id) => {
        this.props.history.push('/detail/'+id)
    }

    render() {
        return (
            <div>
                {this.state.list.length <= 0 ? '暂无在售车型' :
                    this.state.list.map(val => {
                        return <p key={val.id} onClick={() => this.link(val.id)}>{val.text}</p>
                    })
                }
            </div>
        )
    }
}
