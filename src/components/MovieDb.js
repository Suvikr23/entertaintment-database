import React, { Component } from 'react'

import MovieSearch from './MovieSearch'
import MovieDisplay from './MovieDisplay'
import { Route, Redirect } from 'react-router-dom'
import auth from '../auth'

class MovieDb extends Component {

    onLogOutClicked =() => {
        auth.logout(() => {
            this.props.history.push('/');
        })
    }

    render() {
        const home =
            (<div>
                <header className="App-header">
                    <div>Entertaintment Database</div>
                    <button className="App-button" onClick={this.onLogOutClicked}>logout</button>
                </header>
                <MovieSearch />
                <MovieDisplay />
            </div >);
        const redirect = <Redirect to={{ pathname: '/' }} />

        return (
            <Route render={
                () => auth.isAuthenticated() ?
                    home : redirect
            } />

        )
    }
}

export default MovieDb;
