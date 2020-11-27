import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_change_pass } from '../../../../actions';
import { ChangePasswordComponent } from '../../../../pages/PageComponents'

function ChangePasswordContainer() {
    const [open, setOpen] = useState(false);
    const getid = useSelector(state => state.taikhoan);
    const hide_show_dialog=(status)=>{
        setOpen(status);
    }
    const dispatch = useDispatch();
    const sent_data_passNew=(event)=>{
         const id_lead = getid.id;
        const { passOld, passNew } = event;
        dispatch(fetch_change_pass(id_lead, passOld, passNew));
    }
    return (
        <ChangePasswordComponent
        open={open}
        hide_show_dialog={hide_show_dialog}
        sent_data_passNew={sent_data_passNew}
        />
    )
}

export default ChangePasswordContainer
