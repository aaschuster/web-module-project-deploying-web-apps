import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import faveReducer from './faveReducer';

const reducer = combineReducers({
    movie: movieReducer,
    fave: faveReducer
})

export default reducer;