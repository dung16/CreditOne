import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { actRegister } from "../../../actions";
import { FormRegisterComponent, Rules } from "../../../pages/PageComponents";
function FormRegisterContainer() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    showPassword: false,
    formRule: false,
  });
  //change_Show_Hide_Password
  const change_Show_Hide_PassWord = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };
  //change_From Rule
  const hand_Change_Form_Rule = (event) => {
    setState({ ...state, formRule: event });
  };
  //sent for API register
  const sent_Data_API_Register=(event)=>{
    const { username, number_phone, password } = event;
    dispatch(actRegister(username, number_phone, password))
  }
  return (
    <Fragment>
      <FormRegisterComponent
        state={state}
        change_Show_Hide_PassWord={change_Show_Hide_PassWord}
        hand_Change_Form_Rule={hand_Change_Form_Rule}
        sent_Data_API_Register={sent_Data_API_Register}
      />
      <Rules
        formRule={state.formRule}
        hand_Change_Form_Rule={hand_Change_Form_Rule}
      />
    </Fragment>
  );
}

export default FormRegisterContainer;
