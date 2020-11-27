import * as types from '../constants/state';
var initialState =null;

const showInfo_lead = (state = initialState, action) => {
    switch (action.type) {
        case types.INFORMATION_LEAD:
        return action.info;
        default: return state;
    }
}
export default showInfo_lead;