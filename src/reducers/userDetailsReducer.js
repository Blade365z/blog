/*
Reducer created to fetch user details for a particular userID  to global store.
*/
export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_USER_DETAILS':
            return action.payload;
         default:
            return state;
    }
}