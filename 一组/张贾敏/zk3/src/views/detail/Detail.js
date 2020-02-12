import React, { Component } from 'react'

export default class Detail extends Component {

    state = {
        info: JSON.parse(localStorage.getItem('carType')).find(v => v.id == this.props.match.params.id)
    }

    render() {
        console.log(this.props)
        console.log(this.state.info)
        return (
            <div>
                {this.state.info.text}
            </div>
        )
    }
}
