import * as types from  '../constants/state';
var initialState = {
    pagination: {
        start: 0,
        end: 10
      },
      showPerPage:10,
      counter: 1,
    };
const pagination =  (state= initialState,action)=>{
    switch(action.type){
        case types.PAGINATION:
            state={
                pagination: {
                    start: action.start,
                    end: action.end
                  },
            showPerPage:10,
            counter:action.count
            }
            return state;
        default:return state;
    }
}
export default pagination;