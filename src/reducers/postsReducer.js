export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_POST_OF_USER':
            return [...state,action.payload];
        default:
            return state;
    }
}