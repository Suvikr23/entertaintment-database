import React from 'react'

class ItemDetail extends React.Component {

    addToWatchlist = () => {
        const { title, overview } = this.props.location.query;
        localStorage.setItem(title, overview);
    }

    render() {
        const {
            title,
            release_date,
            overview,
            backdrop_path
        } = this.props.location.query;
        return (
            <div style={pageStyle}>
                <img
                    src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
                    alt={`${title} Backdrop`}
                    style={{'borderRadius': '7px'}}
                />
                <h1>{title}</h1>
                <h2>{release_date}</h2>
                <h3>{overview}</h3>
                <button
                    className="App-button"
                    onClick={this.addToWatchlist}>Add to Watchlist</button>
            </div>
        )
    }

}

const pageStyle = {
    'margin': '10px',
    backgroundColor: 'rgb(58, 50, 56)',
    'textAlign': 'center',
    'height': '90vh',
    'padding': '35px',
    'color': '#e7d8da',
}

export default ItemDetail;

