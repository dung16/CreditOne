import * as types from './../constants/task';

var initialState = {};

const showInfodidLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_INFOR_DID_LOGIN:
            return action.info;
        default: return state;
    }
}
export default showInfodidLogin;