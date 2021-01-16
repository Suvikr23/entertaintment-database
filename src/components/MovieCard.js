import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MovieCard extends Component {

    render() {
        const name = this.props.mode === 'movie' ? 'title' : 'original_name';

        const header = this.props.item[name];
        return (
            <Link style={{ 'textDecoration': 'none' }} to={{ pathname: `/item/${this.props.item.id}`, query: this.props.item }}>
                <div className="App-card" style={{ height: '500px', minWidth: '300px' }}>
                    <img
                        src={`https://image.tmdb.org/t/p/w300/${this.props.item.poster_path}`}
                        alt={`${header} Poster`}
                    />
                    <div style=
                        {{
                            'overflow': 'hidden',
                            'whiteSpace': 'nowrap',
                            'fontSize': '1.2rem',
                            'textOverflow': 'ellipsis',
                            'lineHeight': '1.5'
                        }}>{header}</div>
                    <div style=
                        {{
                            'color': '#D282A6'
                        }} >Popularity {Math.floor(this.props.item.popularity)}%</div>
                </div>
            </Link>

        )
    }
}

MovieCard.propTypes = {
    mode: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    mode: state.entertaintment.mode,
})

export default connect(mapStateToProps, {})(MovieCard);
