import * as types from  './../constants/state';

var initialState = {
    price :"All",
    city:"All"
};
const filterTable =  (state= initialState,action)=>{
    switch(action.type){
        case types.FILTER_TABLE:
            state={
                price :action.filter.filterPrice,
                city:action.filter.filterCity}
           
            return state;
        default:return state;
    }
}
export default filterTable;