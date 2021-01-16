import { FETCH_MOVIES, SWITCH_MODE, FETCH_TRENDING } from '../actions/types'

const initialState = {
    items: [],
    trending: [],
    mode: 'movie'
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                items: action.payload.results
            };

        case SWITCH_MODE:
            return {
                ...state,
                mode: action.payload
            };
        
            case FETCH_TRENDING:
                return {
                    ...state,
                    trending: action.payload.results
                };
        default:
            return state;
    }
}