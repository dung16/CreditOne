import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { sent_info_load } from '../../actions';
import { TableLoansComponent } from '../../pages/PageComponents';

function TableLoansContainer() {
    const [openRules,setOpenRules]= useState(false);
    const dispatch = useDispatch();
    const sent_Data_Loans=(event)=>{
        dispatch(sent_info_load(event));
    }
    return (
        
        <TableLoansComponent sent_Data_Loans={sent_Data_Loans} openRules={openRules} setOpenRules={setOpenRules}/>
    )
}

export default TableLoansContainer;
