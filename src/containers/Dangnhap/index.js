
import React  from "react";
import { useSelector } from "react-redux";
import { PageRegister } from "../../pages/PageComponents";

const textForm_register = [
  {
    textTitle: "Đăng nhập",
    text_subtitle: "Đăng nhập để kết nối với chúng tôi",
  },
  {
    textTitle: "Đăng ký tài khoản",
    text_subtitle: "Đăng ký để kết nối với chúng tôi",
  },
];
function Form() {
  //get status of form login
  const changeForm = useSelector(state => state.changeForm_Login_Register)
  return (
    <PageRegister
    changeForm={changeForm}
    textForm={textForm_register}
    />
  );
}
export default Form;
