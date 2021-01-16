import React, { Component } from 'react'
import auth from '../auth'

export default class Login extends Component {

    handleLogin = () => {
        auth.login(() => {
            this.props.history.push('/home')
        })
    }
    render() {
        return (
            <div style={pageStyle}>
                <span
                    style={labelStyle}>
                    Entertaintment Database</span>
                <button
                    className="App-button"
                    onClick={this.handleLogin}>
                    Login</button>
            </div>
        )
    }
}

const pageStyle = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': '100vh'
}

const labelStyle = {
    'border': '#F5E3E0 2px solid',
    'padding': '10px',
    'borderRadius': '7px',
    'fontSize': '1.2rem',
    'color': '#3A3238',
    'marginRight': '10px'
}

