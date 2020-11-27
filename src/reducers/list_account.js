import * as types from '../constants/task';

var initialState = null;
const list_account = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TASK_SUCCESS: 
            return action.payload.data.data
        default: return state;
    }
}
export default list_account;