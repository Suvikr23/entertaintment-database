import { FETCH_MOVIES, SWITCH_MODE, FETCH_TRENDING } from './types'

// to be stored securely
const apiKey = 'cb49166a256aae46bb42d299ace90a56';

export const fetchMovies = (mode, query) => dispatch => {
    fetch(`https://api.themoviedb.org/3/search/${mode}?api_key=${apiKey}&query=${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(items =>
            dispatch({
                type: FETCH_MOVIES,
                payload: items
            })
        );
};

export const fetchTrending = (mode) => dispatch => {
    fetch(`https://api.themoviedb.org/3/trending/${mode}/day?api_key=${apiKey}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(trending =>
            dispatch({
                type: FETCH_TRENDING,
                payload: trending
            })
        );
};

export const switchMode = (mode) => dispatch => {
    dispatch({
        type: SWITCH_MODE,
        payload: mode
    })

    dispatch({
        type: FETCH_MOVIES,
        payload: { results: [] }
    })
}