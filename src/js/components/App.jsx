import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import { Link } from 'react-router'

@Radium
export default class extends Component {
    render () {
        return (
            <StyleRoot>
                <Link to={`/dashboard`}>
                    dashboard
                </Link>
                <br/>
                <Link to={`/favorite`}>
                    favorite
                </Link>
                {this.props.children}
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}
