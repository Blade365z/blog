/*
Reducer created to posts(COUNT (OR ) METADATA ) of a user to global store
*/
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_NUMBER_OF_POST_OF_USERS':
            return [...state, action.payload];
        case 'FETCH_POST_OF_USER':
            return action.payload;
        default:
            return state;
    }
}