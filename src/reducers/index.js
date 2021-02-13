import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import userDetailsReducer from './userDetailsReducer';

const allreducers = combineReducers({
    users: usersReducer,
    posts:postsReducer,
    userDetail : userDetailsReducer
})

export default allreducers;