import * as types from  './../constants/state';
var initialState =true;
const changeForm_Login_Register=(state=initialState,action)=>{
    switch(action.type){
        case types.ChangeForm_Login_Register:
            return action.status
        default:return state;
    }
}
export default changeForm_Login_Register;