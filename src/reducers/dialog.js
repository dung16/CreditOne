import * as types from  './../constants/state';

var initialState =false;
const dialog =  (state= initialState,action)=>{
    switch(action.type){
        case types.SHOW_HIDE_DIALOG:
            return action.status;
        default:return state;
    }
}
export default dialog;