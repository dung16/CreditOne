import * as types from  './../constants/task';
var initialState ={
    so_luong:0,
    data:[]
};
const danhsachdalogin = (state= initialState,action)=>{
    switch(action.type){
        case types.GET_DATA__DID_LOGIN_SUCCESS:
           state={
               so_luong:action.payload.data.so_luong,
               data:action.payload.data
           }
            return state;
        default:return state;
    }
}
export default danhsachdalogin;