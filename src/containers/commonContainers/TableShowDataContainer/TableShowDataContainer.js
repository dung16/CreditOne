import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { information_lead, show_hide_dialog } from '../../../actions/actionsState';
import {TableShowDataComponent} from '../../../pages/PageComponents/index';

function TableShowDataContainer({list_account,status_page,selectedDate,change_total_quantity}) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.pagination)
    const {start,end}= state.pagination;
    const account = useSelector(state => state.taikhoan);
    const history = useHistory();
    //show information page san and page account
    const show_info_buy_lead =(item)=>{
        if(account){
            dispatch(information_lead(item))
            dispatch(show_hide_dialog(true))
        }else{
            history.push('/dangnhap');
            toast.success("Xin mời đăng nhập");
        }
    }
    return (
        <TableShowDataComponent
        list_account={list_account}
        start={start}
        end={end}
        status_page={status_page}
        show_info_buy_lead={show_info_buy_lead}
        selectedDate={selectedDate}
        change_total_quantity={change_total_quantity}
        />
    )
}
export default TableShowDataContainer
