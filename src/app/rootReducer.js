import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import detail from '../movies/movie-detail-reducer';
import upcomingmovies from '../upcoming/reducer'
const rootReducer = combineReducers({
  movies,
  upcomingmovies,
  detail,
  routing: routerReducer,
});

export default rootReducer;