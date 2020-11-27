import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actLoginRequest } from '../../../actions';
import { FormLoginComponent } from '../../../pages/PageComponents';
function FormLoginContainer() {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        open:false,
        showPassword:false
    })
    //changeFormDialog
    const changeFormDialog=(e)=>{
        setState({...state,open:e})
    }
    //change show and hide password
    const changeStyleTextPassWord=()=>{
        setState({...state,showPassword:!state.showPassword})
    }
    //sent API
    const sentDataLogin=(event)=>{
        let { username, password } = event;
        dispatch(actLoginRequest(username, password));
    }
    return (
        <FormLoginComponent
        state={state}
        changeFormDialog={changeFormDialog}
        changeTypePassWord={changeStyleTextPassWord}
        sentDataLogin={sentDataLogin}
        />
    )
}

export default FormLoginContainer
