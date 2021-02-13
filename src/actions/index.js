
import blogApi from '../APIs/blogApi';
import _ from 'lodash';

//Fetching all users from API
export const fetchUsers = () => async dispatch => {
    const response = await blogApi.get('/users');
    dispatch({ type: 'FETCH_USERS', payload: response.data });
}
//Fetching all posts of a particular user  from API
/*
Argument(s) to the function : userID
 */
export const getPostsForAUser = (id, isOnlyNumRequired = false) => async dispatch => {
    try {
        const response = await blogApi.get(`/posts?userId=${id}`);
        isOnlyNumRequired ? dispatch({ type: 'FETCH_NUMBER_OF_POST_OF_USER', payload: { id: id, num: response.data.length } }) : dispatch({ type: 'FETCH_POST_OF_USER', payload: response.data });
    } catch (error) {
        console.log(error)
    }
}

//Fetching all the users and for each user id (unique), fetching the number of posts made. 
export const fetchUsersWithBlogCount = () => async (dispatch, getState) => {
    await dispatch(fetchUsers());
    const userIDs = _.uniq(_.map(getState().users, 'id'));
    userIDs.forEach(id => {
        dispatch(getPostsForAUser(id, true))
    });
}

//Fetching all the users deatils for an ID.
/*
Argument(s) to the function : userID
 */
export const fetchUserDetails = (id) => async dispatch => {
    const response = await blogApi.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER_DETAILS', payload: response.data });
}


export const getPostsForAUserWithPagination = (id, pageOffset, limit) => async dispatch => {
    try {
        const response = await blogApi.get(`/posts?userId=${id}&_page=${pageOffset}&_limit=${limit}`);
        dispatch({ type: 'FETCH_POST_OF_USER_WITH_PAGINATION', payload: response.data });
    } catch (error) {
        console.log(error)
    }
}