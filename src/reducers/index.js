import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import userDetailsReducer from './userDetailsReducer';

const allreducers = combineReducers({
    users: usersReducer,
    numOfPosts:postsReducer,
    userDetail : userDetailsReducer
})

export default allreducers;