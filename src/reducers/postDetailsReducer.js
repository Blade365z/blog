export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POST_DETAILS':
            return action.payload
        default:
            return state;
    }
}