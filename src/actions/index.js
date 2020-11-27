
import * as types from './../constants/task';

export const actRegister = (username, number_phone, password) => {
    return{
        type:types.REGISTER,
        username, number_phone, password
    }
}
export const actLoginRequest = (username, password) => {
    return{
        type:types.LOGIN,
        username, password
    }
}
export const taikhoan = (account) => {
    return {
        type: types.TAIKHOAN,
        account
    }
}
export const fetch_List_Account = () => {
    return {
        type: types.CALL_LIST_ACCOUNT,
    }
}
export const fetch_List_Account_Success = data => {
    return {
        type: types.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}
export const buy_lead=(value)=>{
    return{
        type:types.BUY_LEAD,
        value
    }
}
export const actGetDataDidLogin=(id_lender)=>{
    return{
        type:types.GET_DATA__DID_LOGIN,
        id_lender
    }
}
export const ThongtinLead = (data) => {
    return{
        type: types.THONG_TIN_LEAD,
        data
    }
}
///
export const openDialog = () => {
    return {
        type: types.OPEN_FORM_DIALOG
    }
}
export const closeDialog = () => {
    return {
        type: types.CLOSE_FORM_DIALOG
    }
}

export const getInfo = (cus) => {
    return {
        type: types.SHOWINFOR,
        cus
    }
}
export const thongbao = (message, alert) => {
    return {
        type: types.THONGBAO,
        message, alert
    }
}


export const dangxuat = () => {
    return {
        type: types.DANGXUAT
    }
}

export const fetchListTaskSuccesDigLogin=(data)=>{
    return {
        type:types.GET_DATA__DID_LOGIN_SUCCESS,
        payload:{
            data
        }
    }
}
export const fetchListTaskFaildDigLogin=(data)=>{
    return {
        type:types.GET_DATA__DID_LOGIN_FAILD,
        payload:{
            data
        }
    }
}
export const open_Form_Info_Did_Login=()=>{
    return{
        type:types.OPEN_SHOW_INFO_DID_LOGIN
    }
}
export const close_Form_Info_Did_Login=()=>{
    return{
        type:types.CLOSE_SHOW_INFO_DID_LOGIN
    }
}
export const show_info_did_Login=(info)=>{
    return {
        type:types.SHOW_INFOR_DID_LOGIN,
        info
    }
}

export const update=(data)=>{
    return{
            type:types.UPDATE,
            data
    }
}
export const sent_info_load=(data)=>{
  
    return{
        type:types.SENT_DATA_LOAN,
        payload:{
            data
        }
    }
}
export const fetch_change_pass=(id_lead, passOld,passNew)=>{
    return{
        type:types.FET_CHANGE_PASS,
        payload:{
            id_lead,
            passOld,
            passNew
        }
    }
}
