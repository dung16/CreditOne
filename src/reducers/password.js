import * as types from './../constants/task';

var initialState =null;

const password = (state = initialState, action) => {
    switch (action.type) {
        case types.PASSWORD:
            state=action.payload
            return state;
        default: return state;
    }
}
export default password;