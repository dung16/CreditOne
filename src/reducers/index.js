import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import list_account from './list_account';
import filterTable from './filterTable';
import showInfo_Lead from './showInfo_lead';
import taikhoan from './taikhoan';
//
import informationAccount from './informationAccount';
import uiReducer from './ui';
import dialog from './dialog';
import danhsachdalogin from './danhsachdalogin';
import showFormInfoDidLogin from './showFormInfoDidLogin';
import changeForm_Login_Register from './changeForm_Login_Register';
import pagination from './pagination'
const appReducers = combineReducers({
    form: formReducer,
    list_account, filterTable, showInfo_Lead,pagination,
    informationAccount,taikhoan,
    //
    uiReducer,dialog,danhsachdalogin,showFormInfoDidLogin,
    changeForm_Login_Register,
});
export default appReducers;