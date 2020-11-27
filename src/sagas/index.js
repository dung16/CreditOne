import React from 'react';
import {  call, put, takeLatest, delay, takeEvery } from 'redux-saga/effects';
import * as taskType from './../constants/task';
import { showLoading, hideLoading } from './../actions/ui';
import { STATUS_CODE } from './../constants/index';
import { fetch_List_Account_Success, fetchListTaskSuccesDigLogin, fetchListTaskFaildDigLogin, ThongtinLead, dangxuat, taikhoan,  } from '../actions';
import {call_getData_list_account,  getDataDidLogin, updateDataLead, sentInfoLoan, callInfo, changePassWord,actDangKI, actLogin } from './../apis/task';
import { toast } from 'react-toastify';
import { DANG_KI_THANH_CONG, LOI_MANG, VUI_LONG_CHON_SO_DT_KHAC } from '../constants/Messenger';
const Mes = (mes) => {
  return <p className="text-center">{mes}</p>
}
function* Fetch_Call_List_Account() {

    try{
      const resp = yield call(call_getData_list_account);
      const { status, data } = resp;
      if (status === STATUS_CODE.SUCCESS) {
        yield put(fetch_List_Account_Success(data))
      }
    }catch(error){
      toast.error(Mes(LOI_MANG));
    }
}
function* FetchListTaskActionDidLogin(id) {
  yield put(showLoading());
  try {
    const { id_lender } = id;
    const resp_1 = yield call(callInfo, id_lender);
    const resp = yield call(getDataDidLogin, id_lender);
    if (resp_1.status === STATUS_CODE.SUCCESS) {
      yield put(ThongtinLead(resp_1.data));
    }
    if (resp.status === STATUS_CODE.SUCCESS) {

      yield put(fetchListTaskSuccesDigLogin(resp.data))

    } else {
      yield put(fetchListTaskFaildDigLogin(resp.data))
    }
    yield put(hideLoading());
  } catch (error) {
    toast.error(Mes(LOI_MANG));
  }

 

}
function* Fetch_buy_lead(value) {
  const { id_lead, id_lender } = value.value;
  yield put(showLoading());
  try{
    const resp = yield call(updateDataLead, id_lead, id_lender);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      if(data.dien_ta==="Số tiền trong tài khoản của bạn không đủ để thực hiện giao dịch."){
        toast.error(Mes("Số dư tài khoản không đủ. Anh/chị vui lòng nạp tiền vào tài khoản để tiếp tục giao dịch."));
      }else if (data.dien_ta === "Bạn đã mua lead thành công.") {
        toast.success(Mes('Bạn đã mua hàng thành công.'));
      } else {
        toast.error(Mes('Khách hàng này đã tồn tại trong danh sách của bạn'));
      }
    } 
  }catch(error){
    toast.error(Mes('Đường chuyền không ổn định. Vui lòng thực hiện lại giao dịch.'));
  }

  yield put(hideLoading());
}
function* Fetch_sent_info_loan(info) {
  const { payload } = info;
  yield put(showLoading());
  try{
    const resp = yield call(sentInfoLoan, payload.data);
    const { status } = resp;
    yield put(showLoading());
    if (status === STATUS_CODE.SUCCESS) {
      toast.success(Mes('Hồ sơ của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ với bạn sớm nhất.'));
      yield delay(3000, hideLoading());
      window.location = "/";
    }
  }catch(erro){
    toast.error("Đăng kí không thành công")
  }
  yield put(hideLoading());
}
function* fetchchangePassWord({payload}) {
  
  yield put(showLoading());
  try{
    const { id_lead,
      passOld, passNew } = payload;
      const reps =yield call(changePassWord,
      id_lead,
      passOld, passNew
    )
    const {status}= reps;
    if(status===STATUS_CODE.SUCCESS){
      yield put(dangxuat());
      toast.success(Mes("Thay đổi mật khẩu thành công. Vui lòng đăng nhập lại"));
      yield delay(2000);
      window.location = "/dangnhap";
      yield put(hideLoading());
    }
  }catch(erro){
    toast.error(Mes("Thay đổi mật khẩu không thành công"));
    yield delay(2000);
    window.location.reload();
  }
  
}
function * fetchRegister(value){
  yield put(showLoading());
  try{
    const {  username, number_phone, password}= value;
    const reps =yield call(actDangKI,
      username, number_phone, password
    )
    const {status}= reps;
    if(status=== 201){
      yield put(hideLoading());
      toast.success(Mes(DANG_KI_THANH_CONG));
      yield delay(2000);
      window.location.reload();

    }
  }catch(error){
    yield put(hideLoading());
    toast.error(Mes(VUI_LONG_CHON_SO_DT_KHAC));
  }
}
//login 
function * FetchLogin(value){

  try {
    const {username,password}= value;
    const reps =yield call(actLogin,username,password);
    const {data,status}= reps;
    if(status===200){
      if(data.data[0].roleId===2){
        yield put(taikhoan(data.data[0]));
      
      }else{
        toast.error(Mes('Bạn là Admin. Vui lòng đăng nhập lại'));
      }
    }
  } catch (error) {
      toast.error(Mes('Sai số điện thoại hoặc mật khẩu'));
  }
 

}


function* rootSaga() {
  yield takeLatest(taskType.CALL_LIST_ACCOUNT,Fetch_Call_List_Account);
  yield takeLatest(taskType.GET_DATA__DID_LOGIN, FetchListTaskActionDidLogin);
  yield takeLatest(taskType.BUY_LEAD, Fetch_buy_lead);
  yield takeLatest(taskType.SENT_DATA_LOAN, Fetch_sent_info_loan);
  //thay doi password
  yield takeEvery(taskType.FET_CHANGE_PASS, fetchchangePassWord);
  // dang ki
  yield takeLatest(taskType.REGISTER,fetchRegister);
  //login
  yield takeLatest(taskType.LOGIN,FetchLogin);
}
export default rootSaga;