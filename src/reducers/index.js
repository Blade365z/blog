import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import userDetailsReducer from './userDetailsReducer';
import paginatedPosts from './paginatedReducer';


const allreducers = combineReducers({
    users: usersReducer,
    posts:postsReducer,
    paginatedPosts : paginatedPosts,
    userDetail : userDetailsReducer
})

export default allreducers;