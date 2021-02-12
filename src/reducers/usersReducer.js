export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_USERS':
            return action.payload;
        case 'SEARCH_USER':
            return action.payload;
        default:
            return state;
    }
}