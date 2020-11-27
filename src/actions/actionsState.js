import * as types from './../constants/state';
export const changeForm_login_register =(status)=>{
    return{
        type:types.ChangeForm_Login_Register,
        status
    }
}
export const filterTable = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter
    }
}
export const pagination =(count,start,end)=>{
    return {
        type:types.PAGINATION,
        count,start,end
    }
}
export const show_hide_dialog=(status)=>{
    return{
        type:types.SHOW_HIDE_DIALOG,
        status
    }
}
export const information_lead=(info)=>{
    return{
        type:types.INFORMATION_LEAD,
        info
    }
}
