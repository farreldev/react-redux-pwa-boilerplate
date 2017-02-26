import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'

@Radium
export default class extends Component {
    constructor (props) {
        super(props)
        this.show = this.show.bind(this)
    }
    show () {
        console.log(this.props)
    }
    render () {
        return (
            <StyleRoot>
                <div onClick={this.show}>XD</div>
                <ul>
                </ul>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}
