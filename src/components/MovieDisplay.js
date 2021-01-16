import React, { Component } from 'react'

import { connect } from 'react-redux'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import { fetchTrending } from '../actions/searchActions'

class MovieDisplay extends Component {

    componentDidMount() {
        this.props.fetchTrending(this.props.mode); // for first time load
    }

    componentDidUpdate(next) {
        if (mode !== this.props.mode) {
            mode = this.props.mode;
            this.props.fetchTrending(this.props.mode);
        }
    }

    render() {
        const items = this.props.items.length > 0 ? this.props.items : this.props.trending;
        const itemsHeader =
            this.props.items.length > 0 ?
                `Showing search results (${this.props.items.length} items)` : `Showing Trending`;
        const cards = items.map(item => (
            <MovieCard key={item.id} item={item} trending={this.props.trending} />
        ));
        return (
            <React.Fragment>
                <div style={{ 'display': 'flex' }}>
                    <div className="App-tags">{itemsHeader}</div>
                    <div className="App-tags">{this.props.mode.toUpperCase()}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {cards}
                </div>
            </React.Fragment>

        )
    }
}

let mode = 'movie';

// Proptypes
MovieDisplay.propTypes = {
    mode: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    trending: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    mode: state.entertaintment.mode,
    items: state.entertaintment.items,
    trending: state.entertaintment.trending
})

export default connect(mapStateToProps, { fetchTrending })(MovieDisplay)
