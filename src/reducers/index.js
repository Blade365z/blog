import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const allreducers = combineReducers({
    users: usersReducer,
    numOfPosts:postsReducer
})

export default allreducers;