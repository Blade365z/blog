 
import blogApi from '../APIs/blogApi';
import _ from 'lodash';

 export const fetchUsers = () => async dispatch =>{
     const response = await blogApi.get('/users');
     dispatch({type:'FETCH_USERS',payload:response.data});
 }
 export const getPostsForAUser = (id) => async dispatch => {
    const response = await blogApi.get(`/posts?userId=${id}`);
    dispatch({type:'FETCH_POST_OF_USER',payload:{id:id,num:response.data.length}});
 }

 export const fetchUsersWithBlogCount = () => async (dispatch,getState)=>{
     await dispatch(fetchUsers());
     const userIDs = _.uniq(_.map(getState().users,'id'));
     userIDs.forEach(id=>{
         dispatch(getPostsForAUser(id))
     });
 }

export const searchByUser = (users,keyword) => dispatch  => {
    return dispatch ({
        'type':'SEARCH_USER',
        'payload':keyword 
    });
}
 