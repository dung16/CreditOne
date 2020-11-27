import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../../common/FormHelper/TextField";
import { Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, FormControlLabel, IconButton, InputAdornment, makeStyles } from "@material-ui/core";
import { NumberFormatCustom } from "../../../common/TextFieldNumber";
import { Visibility, VisibilityOff } from "@material-ui/icons";
const validate = (values) => {
    const errors = {};
    const { username, password } = values;
    parseInt(username);
    if (!username) {
      errors.username = "Vui lòng nhập số điện thoại";
    }
    if (!password) {
      errors.password = "Bạn phải nhập mật khẩu";
    }
    return errors;
  };
  const useStyles = makeStyles(() => ({
    root: {
      background: "white",
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
    label:{
      color:'#828282'
    },
    textField: {
      root:{
        "&$MuiInputLabel-formControl":{
          color:'red',
        }
      },
      width: "100%",
      marginTop: "0.9rem",
    },
  }));
function FormLoginComponent(props) {

  const classes = useStyles();
  const {state, handleSubmit, invalid, submitting,changeFormDialog,changeTypePassWord,
    sentDataLogin
  }= props;
  const handleClickShowPassword = () => {
    changeTypePassWord();
  };
  const onSubmitForm = (e) => {
    sentDataLogin(e);
}
const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const handleChangeDialog=(event)=>{
  changeFormDialog(event)
}
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Field
        id="username"
        className={classes.textField}
        name="username"
        component={renderTextField}
        variant="outlined"
        label="Số điện thoại"
        type="text"
        color="primary"
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
        type={state.showPassword ? "text" : "password"}
        label="Mật khẩu"
        color="primary"
    
        InputProps={{
          classes: {
            root: classes.root,
            notchedOutline: classes.notchedOutline1,
            input: classes.input,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={(event) => handleMouseDownPassword(event)}
                edge="end"
              >
                {state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box component="div" display="flex" justifyContent="space-between" alignItems="center" mt={3}>
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="Nhớ mật khẩu"
          classes={{
            label:classes.label
          }} 
        />
        <Box  color="text.primary" style={{ cursor: "pointer",marginTop:-10 }} onClick={()=> handleChangeDialog(true)}> Quên mật khẩu?</Box>
      </Box>
      <Button
        disabled={invalid || submitting}
        variant="contained"
        style={{ width: "100%" }}
        type="submit"
        color="secondary"
        size="large"
      >
        Đăng nhập
      </Button>
      <Dialog open={state.open} onClose={()=>handleChangeDialog(false)} maxWidth="md">
        <Container>
          <DialogContent>
                <Box color="text.primary" component="p" textAlign="center">
                  Vui lòng liên hệ Hotline 1900055528<br/> để được hổ trợ
                </Box>
          </DialogContent>
          <DialogActions disableSpacing={false} style={{justifyContent:"center",margin: 10}} >
            <Button onClick={()=>handleChangeDialog(false)} color="secondary" variant="contained" size="large">
              Đăng nhập
            </Button>
          </DialogActions>
        </Container>
      </Dialog>
    </form>
  );
}

FormLoginComponent.propTypes = {
  state: PropTypes.object,
  handleSubmit: PropTypes.func,
  invalid:PropTypes.bool,
  submitting:PropTypes.bool,
  changeFormDialog:PropTypes.func,
  changeTypePassWord:PropTypes.func,
  sentDataLogin:PropTypes.func
};
const FORM_LOGIN = "FORM_LOGIN";
export default reduxForm({
  form: FORM_LOGIN,
  validate,
}) (FormLoginComponent);
