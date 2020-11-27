import * as types from  './../constants/task';
const data = JSON.parse(localStorage.getItem('accountCreditOne'));
var initialState=data ? data :null;
const taikhoan =(state= initialState,action)=>{
    switch(action.type){
        case types.TAIKHOAN:
           state=action.account;
           localStorage.setItem('accountCreditOne',JSON.stringify(state));
            return state;
        case types.DANGXUAT:
            state=null;
            localStorage.setItem('accountCreditOne',JSON.stringify(state));
            return state;
        default:return state;
    }
}
export default taikhoan;