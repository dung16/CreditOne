import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actGetDataDidLogin } from '../../../actions';
import InformationAccountComponent from '../../../component/AccountComponent/InformationAccountComponent/InformationAccountComponent'

function InformationAccountContainer() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const {taikhoan,informationAccount}=state;
    useEffect(() => {
        dispatch(actGetDataDidLogin(taikhoan.id))

    }, [taikhoan.id,dispatch]);
    return (
        <InformationAccountComponent informationAccount={informationAccount}/>
    )
}

export default InformationAccountContainer
