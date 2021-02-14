import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import userDetailsReducer from './userDetailsReducer';
import paginatedPosts from './paginatedReducer';
import postDetailsReducer from './postDetailsReducer';
import commentsReducer from './commentsReducer';
const allreducers = combineReducers({
    users: usersReducer,
    posts:postsReducer,
    paginatedPosts : paginatedPosts,
    userDetail : userDetailsReducer,
    postDetails : postDetailsReducer,
    comments:commentsReducer
})

export default allreducers;