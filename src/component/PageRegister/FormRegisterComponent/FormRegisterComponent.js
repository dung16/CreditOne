import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import renderTextField from "../../../common/FormHelper/TextField";
import { NumberFormatCustom } from "../../../common/TextFieldNumber";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import renderCheckbox from "../../../common/FormHelper/CheckBox";
const validate = (values) => {
  const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  let errors = {};
  const { username, number_phone, password, check_password, status } = values;
  if (!username) {
    errors.username = "Bạn phải nhập Họ và tên.";
  } else if (!isNaN(username)) {
    errors.username = "Chỉ được nhập chữ.";
  } else if (username.length <= 5) {
    errors.username = "Họ và tên trên 5 kí tự";
  }
  if (isNaN(number_phone)) {
    errors.number_phone = "Số điện thoại phải là số";
  } else if (vnf_regex.test(number_phone) === false) {
    errors.number_phone = "Số điện thoại chưa đúng";
  }
  if (!password) {
    errors.password = "Bạn phải nhập mật khẩu.";
  } else if (String(password).length < 7) {
    errors.password = "Mật khẩu phải 8 kí tự trở lên.";
  }
  if (password !== check_password) {
    errors.check_password = "Mật khẩu không trùng khớp.";
  }
  if (!status) {
    errors.status = "Vui lòng chọn đồng ý điều khoản và quy định.";
  } else if (status === false) {
    errors.status = "Vui lòng chọn đồng ý điều khoản và quy định.";
  }

  return errors;
};
const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    "&$disabled $notchedOutline1": {
      borderColor: "orange",
    },
  },
  disabled: {},
  notchedOutline1: {
    borderColor: "white",
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.15)",
    borderRadius: 5,
  },
  input: {
    background: "white",
    borderRadius: 5,
  },
  textField: {
    width: "100%",
    marginTop: "0.9rem",
  },
}));
function FormRegisterComponent(props) {
  const classes = useStyles();
  const {
    handleSubmit,
    invalid,
    submitting,
    state,
    change_Show_Hide_PassWord,
    hand_Change_Form_Rule,
    sent_Data_API_Register,
  } = props;
  //call API
  const onSubmitForm = (event) => {
    sent_Data_API_Register(event)
  };
  const handleClick_Change_Type_Password = () => {
    change_Show_Hide_PassWord();
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onOpenForm_Rule = (event) => {
    hand_Change_Form_Rule(event);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Field
        id="username"
        className={classes.textField}
        name="username"
        component={renderTextField}
        variant="outlined"
        label="Họ và tên"
        type="text"
        color="secondary"
        InputProps={{
          classes: {
            root: classes.root,
            notchedOutline: classes.notchedOutline1,
            input: classes.input,
          },
        }}
      />
      <Field
        id="number_phone"
        className={classes.textField}
        name="number_phone"
        component={renderTextField}
        variant="outlined"
        label="Số điện thoại"
        type="text"
        color="secondary"
        InputProps={{
          inputComponent: NumberFormatCustom,
          classes: {
            root: classes.root,
            notchedOutline: classes.notchedOutline1,
            input: classes.input,
          },
        }}
      />
      <Field
        id="password"
        className={classes.textField}
        name="password"
        component={renderTextField}
        variant="outlined"
        label="Mật khẩu(ít nhất 8 kí tự)"
        type={state.showPassword ? "text" : "password"}
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick_Change_Type_Password}
                onMouseDown={(event) => handleMouseDownPassword(event)}
                edge="end"
              >
                {state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
          classes: {
            root: classes.root,
            notchedOutline: classes.notchedOutline1,
            input: classes.input,
          },
        }}
      />
      <Field
        id="check_password"
        className={classes.textField}
        name="check_password"
        component={renderTextField}
        variant="outlined"
        label="Xác nhận Mật khẩu"
        type={state.showPassword ? "text" : "password"}
        color="primary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick_Change_Type_Password}
                onMouseDown={(event) => handleMouseDownPassword(event)}
                edge="end"
              >
                {state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
          classes: {
            root: classes.root,
            notchedOutline: classes.notchedOutline1,
            input: classes.input,
          },
        }}
      />
      <Field
        id="status"
        type="checkbox"
        component={renderCheckbox}
        name="status"
        color="secondary"
        label={
          <Box component="span" color="text.primary">
            Tôi đồng ý với{" "}
            <Box
              component="span"
              color="#EE4623"
              onClick={() => onOpenForm_Rule(true)}
            >
              Điều khoản và Điều kiện.
            </Box>
          </Box>
        }
      />

      <Button
        disabled={invalid || submitting}
        variant="contained"
        type="submit"
        style={{ width: "100%" }}
        color="secondary"
        size="large"
      >
        Đăng kí
      </Button>
    </form>
  );
}
const FORM_REGISTER = "FORM_REGISTER";

FormRegisterComponent.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  state: PropTypes.object,
  sent_Data_API_Register: PropTypes.func,
};
export default reduxForm({
  form: FORM_REGISTER,
  validate,
})(FormRegisterComponent);
