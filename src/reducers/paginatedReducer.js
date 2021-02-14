/*
Reducer created to  fetch the posts (PAGINATED)  to the global store
*/
export default (state=[],action)=>{
    switch(action.type){
     case 'FETCH_POST_OF_USER_WITH_PAGINATION':
            return action.payload
        default:
            return state;
    }
}