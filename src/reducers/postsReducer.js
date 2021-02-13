export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_NUMBER_OF_POST_OF_USER':
            return [...state,action.payload];
        case 'FETCH_POST_OF_USER':
            return action.payload;
        case 'FETCH_POST_OF_USER_WITH_PAGINATION':
            return action.payload
        default:
            return state;
    }
}