/*
Reducer created to fetch posts Details  for  a particular post ID  to the global store
*/
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POST_DETAILS':
            return action.payload
        default:
            return state;
    }
}