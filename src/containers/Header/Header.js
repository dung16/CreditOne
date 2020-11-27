import React, { useEffect, useState } from "react";
import {  useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangxuat } from "../../actions";
import { changeForm_login_register } from "../../actions/actionsState";
import { HeaderComponent } from "../../pages/PageComponents";
function Header() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [state,setState]=useState({
    active:true,
    toggle:false,
  })
  const [active,setActive]=useState(true);
  let activeColor=0
  const account = useSelector((state) => state.taikhoan);
    useEffect(() => {
      window.scrollTo(0,0);
    }, [location])
    useEffect(() => {
    if (account) {
      history.push("/sangiaodich");
    }
  }, [history, account]);
  if (location.pathname === "/dangnhap" && active) {
    activeColor = -1;
  } else if (location.pathname === "/dangnhap" && active === false) {
    activeColor = 1;
  } else {
    activeColor = 0;
  }
  const changeToggle = () => {
    setState({...state,toggle:!state.toggle})
  };
  const returnHome = () => {
    if (account) {
      history.push("/sangiaodich");
    } else {
      history.push("/");
    }
  };
  const closeToggle = () => {
    setState({...state,toggle:false})
  };
  const handleLogout = () => {
    dispatch(dangxuat());
    history.push("/");
  };

  const handleChangeURL = (event) => {
    setActive(event);
    dispatch(changeForm_login_register(event))
    history.push("/dangnhap");
  };
  return (
      <HeaderComponent
      activeColor={activeColor}
      account={account}
      toggle={state.toggle}
      changeToggle={changeToggle}
      closeToggle={closeToggle}
      returnHome={returnHome}
      handleLogout={handleLogout}
      handleChangeURL={handleChangeURL}
      />
  );
}
export default Header;
