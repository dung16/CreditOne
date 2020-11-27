import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm, reset } from "redux-form";
import renderTextField from "../../../../common/FormHelper/TextField";
const validate = (values) => {
  const errors = {};
  const { passOld, passNew, checkPassNew } = values;
  if (!passOld) {
    errors.passOld = "Bạn phải nhập mật khẩu cũ.";
  } else if (passOld.length <= 7) {
    errors.passOld = "Mật khẩu 8 kí tự.";
  }
  if (!passNew) {
    errors.passNew = "Bạn phải nhập mật khẩu mới.";
  } else if (passNew.length <= 7) {
    errors.passNew = "Mật khẩu 8 kí tự.";
  } else if (passNew === passOld) {
    errors.passNew = "Mật khẩu mới phải khác mật khẩu cũ.";
  }
  if (!checkPassNew) {
    errors.checkPassNew = "Bạn phải lại nhập mật khẩu mới.";
  } else if (passNew !== checkPassNew) {
    errors.checkPassNew = "Mật khẩu không khớp.";
  }
  return errors;
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ChangePasswordComponent(props) {
  const {
    handleSubmit,
    pristine,
    submitting,
    open,
    hide_show_dialog,
    sent_data_passNew,
  } = props;
  const dispatch = useDispatch();
  const onSubmitForm = (e) => {
    sent_data_passNew(e);
    changeForm(false);
  };
  const changeForm = (event) => {
    hide_show_dialog(event);
    dispatch(reset("CHANGPASS"));
  };

  return (
    <Container>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        style={{ width: "100%" }}
        onClick={() => changeForm(true)}
      >
        Đổi mật khẩu
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => changeForm(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Grid container direction="row" justify="center" alignItems="center">
            <DialogTitle id="alert-dialog-slide-title">
              ĐỔI MẬT KHẨU
            </DialogTitle>
          </Grid>

          <DialogContent>
            <Grid container spacing={4}>
              <Grid item md={12} container direction="column">
                <Field
                  name="passOld"
                  component={renderTextField}
                  placeholder="Mật khẩu cũ"
                  label="Nhập mật khẩu cũ"
                  variant="outlined"
                  type="password"
                  autoComplete="false"
                />
              </Grid>
              <Grid item md={12} container direction="column">
                <Field
                  name="passNew"
                  component={renderTextField}
                  placeholder="Nhập mật khẩu mới"
                  variant="outlined"
                  label="Nhập mật khẩu mới"
                  type="password"
                  autoComplete="false"
                />
              </Grid>
              <Grid item md={12} container direction="column">
                <Field
                  name="checkPassNew"
                  component={renderTextField}
                  placeholder="Nhập lại mật khẩu mới"
                  variant="outlined"
                  label="Nhập lại mật khẩu mới"
                  type="password"
                  autoComplete="false"
                />
              </Grid>
              <Grid item md={12} container direction="row" justify="center">
                <Button
                  onClick={() => changeForm(false)}
                  variant="contained"
                  style={{ marginRight: 10 }}
                >
                  Quay lại
                </Button>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={pristine || submitting}
                >
                  Xác nhận
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </form>
      </Dialog>
    </Container>
  );
}
const CHANGPASS = "CHANGPASS";
const withReduxForm = reduxForm({
  form: CHANGPASS,
  validate,
});
export default compose(withReduxForm)(ChangePasswordComponent);
