/*
Reducer created to fetch the comments to the global store
*/
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_COMMENTS_FOR_POSTS':
            return action.payload
        default:
            return state;
    }
}