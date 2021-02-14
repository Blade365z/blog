import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import userDetailsReducer from './userDetailsReducer';
import paginatedPosts from './paginatedReducer';
import postDetailsReducer from './postDetailsReducer';

const allreducers = combineReducers({
    users: usersReducer,
    posts:postsReducer,
    paginatedPosts : paginatedPosts,
    userDetail : userDetailsReducer,
    postDetails : postDetailsReducer
})

export default allreducers;