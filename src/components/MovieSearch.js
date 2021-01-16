import React, { Component } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchMovies, switchMode } from '../actions/searchActions'

class MovieSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    handleClick = () => {
        const mode = this.props.mode === 'movie' ? 'tv' : 'movie';
        this.props.switchMode(mode);
    }

    onChange = (e) => {
        this.setState({ title: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const params = this.state.title.split(' ').join('+');
        this.props.fetchMovies(this.props.mode, params);
    }

    render() {
        return (
            <div style={searchComponent}>
                <form style={{ display: 'flex', width: '40%' }} onSubmit={this.onSubmit}>
                    <input type="text" name="title"
                        className="App-input"
                        style={searchInput}
                        placeholder={`Find ${this.props.mode}`}
                        value={this.props.title}
                        onChange={this.onChange}
                    />
                    <button
                        className="App-button"
                        style={searchButton}
                        type="submit">
                        Find {this.props.mode} shows
                    </button>
                </form>

                {/** Outside form as it fires submit */}

                <button
                    style={searchButton}
                    className="App-button"
                    onClick={this.handleClick}>
                    <span>Switch Section </span>{' '}
                </button>

            </div>
        )
    }
}
const searchComponent = {
    'display': 'flex',
    'justifyContent': 'space-between',
    'margin': '20px 10px',
}

const searchInput = {
    'flex': '5',
    'marginRight': '10px'
}

const searchButton = {
    'backgroundColor': '#6E4555',
    'color': '#F5E3E0',
    'boxShadow': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
}

// Proptypes
MovieSearch.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    switchMode: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    mode: state.entertaintment.mode,
})

export default connect(mapStateToProps, { fetchMovies, switchMode })(MovieSearch);
