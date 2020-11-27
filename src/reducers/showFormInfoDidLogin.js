import * as types from './../constants/task';

var initialState =false;

const showFormInfoDidLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_SHOW_INFO_DID_LOGIN:
            return true;
        case types.CLOSE_SHOW_INFO_DID_LOGIN:
            return false;
        default: return state;
    }
}
export default showFormInfoDidLogin;