import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buy_lead } from '../../../actions';
import { information_lead, show_hide_dialog } from '../../../actions/actionsState';
import { ShowDialogDataComponent } from '../../../pages/PageComponents'

function ShowDialogDataContainer({status_page}) {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const {showInfo_Lead,dialog,taikhoan} =state;
    const close_form_dialog=()=>{
        dispatch(information_lead(null))
        dispatch(show_hide_dialog(false))
    }
    const buy_Lead=(id_lead)=>{
        let value = {
            id_lead: id_lead,
            id_lender: taikhoan.id,
          };
          dispatch(buy_lead(value));
    }
    return showInfo_Lead ? <ShowDialogDataComponent showInfo_Lead={showInfo_Lead} dialog={dialog} close_form_dialog={close_form_dialog} buy_Lead={buy_Lead}
    status_page={status_page}/> :null;
}
export default ShowDialogDataContainer;
