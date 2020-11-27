import * as types from '../constants/task';

var initialState = {
    "dien_ta": "",
    "so_dien_thoai_lender": "",
    "so_du": "",
    "so_luong_don_mua": "",
    "ten_lender": "",
    "trang_thai": "success"
};
const informationAccount = (state = initialState, action) => {
    switch (action.type) {
        case types.THONG_TIN_LEAD:
            return action.data
        default: return state;
    }
}
export default informationAccount;