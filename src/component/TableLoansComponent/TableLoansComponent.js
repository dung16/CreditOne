import DateFnsUtils from "@date-io/date-fns";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";
import NumberFormat from "react-number-format";
import { Field, reduxForm } from "redux-form";
import renderCheckbox from "../../common/FormHelper/CheckBox";
import DateField from "../../common/FormHelper/DatePicker";
import renderSelectField from "../../common/FormHelper/Select";
import renderTextField from "../../common/FormHelper/TextField";
import cities from "../../constants/city";
import {
  FaUserCircle,
  FaIdCard,
  FaBriefcase,
  FaMapMarkedAlt,
  FaMailBulk,
  FaBirthdayCake,
  FaTransgender,
} from "react-icons/fa";
import { GiReceiveMoney, GiTakeMyMoney, GiMoneyStack } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { BiTimer } from "react-icons/bi";
import { ALL_COLOR } from "../../common/Theme/color";
import { text_number_in_string } from "../../common/functionTest/functionTest";
import Rules from './Rules/index';
const FORM_Vay_1 = "FORM_Vay_1";

const validate = (values) => {
  const errors = {};
  const {
    ho_va_ten,
    so_dien_thoai,
    cmnd,
    email,
    nghe_nghiep,
    dob,
    thu_thap_hang_thang,
    gioi_tinh,
    dia_chi,
    chon_loai_thu_nhap,
    tien_nhan,
    thoi_gian_vay,
    checkbox,
  } = values;
  const vnf_regex = /((086|096|097|098|032|033|034|035|036|037|038|039|089|090|093|070|079|077|076|078|088|091|094|083|084|085|081|082|092|056|058|099|059)+([0-9]{7})\b)/g;
  const filter = /(^[A-Z0-9._%+-]+(@gmail.com|@yahoo.com|.outlook|.hotmail))$/i;
  const test_cmnd = /(\b(095|280|285|245|230|231|090|091|001|002|004|006|008|010|012|014|015|017|019|020|022|024|025|026|027|028|029|030|031|033|034|035|036|037|038|040|042|044|045|046|048|049|051|052))/g;
  const test_cmnd_2 = /(\b(01|02|35|27|38|12|32|21|26|38|36|08|20|24|04|27|34|07|16|11|18|14|03|36|11|14|22|37|23|25|08|06|30|16|18|16|26|13|22|19|20|21|10|19|36|05|15|17|19|31|33|07|33|13|15))/g;

  if (!ho_va_ten) {
    errors.ho_va_ten = "Bạn phải điền thông tin họ và tên";
  } else if (!isNaN(ho_va_ten) || text_number_in_string.test(ho_va_ten)) {
    errors.ho_va_ten = "Chỉ được nhập chữ.";
  } else if (ho_va_ten.length <= 5) {
    errors.ho_va_ten = "Họ và tên trên 5 kí tự";
  }
  if (!so_dien_thoai) {
    errors.so_dien_thoai = "Bạn phải điền Số Điện Thoại";
  }
  if (vnf_regex.test(so_dien_thoai) === false) {
    errors.so_dien_thoai = "Không chấp nhận số điện thoại này";
  }
  let sodienthoai = String(so_dien_thoai);
  if (
    sodienthoai[3] === sodienthoai[4] &&
    sodienthoai[4] === sodienthoai[5] &&
    sodienthoai[6] === sodienthoai[7] &&
    sodienthoai[8] === sodienthoai[9]
  ) {
    errors.so_dien_thoai = "Không chấp nhận số điện thoại này";
  }
  if (!cmnd) {
    errors.cmnd = "Bạn phải điền CMND";
  } else if (!test_cmnd.test(cmnd)) {
    if (!test_cmnd_2.test(cmnd)) {
      errors.cmnd = "Chứng minh nhân dân không tồn tại.";
    }
  }
  if (cmnd) {
    let count = cmnd.indexOf(" ") === -1 ? 12 : cmnd.indexOf(" ");

    let numberCmnd = String(cmnd.slice(0, count));

    if (numberCmnd.length !== 9) {
      if (numberCmnd.length !== 12) {
        errors.cmnd = "CMND 9 hoặc 12 số.";
      }
    }
  }
  if (!email) {
    errors.email = "Hãy nhập địa chỉ Email";
  } else if (filter.test(email) === false) {
    errors.email =
      "Chỉ chấp nhận Email với đuôi mail sau: gmail.com, yahoo.com, outlook, hotmail";
  }
  if (!nghe_nghiep || nghe_nghiep === "") {
    errors.nghe_nghiep = "Bạn phải điền thông tin nghề nghiệp";
  }
  if (!dob) {
    errors.dob = "Bạn phải nhập ngày sinh";
  }

  if (!thu_thap_hang_thang) {
    errors.thu_thap_hang_thang = "Bạn phải điền Thu nhập hàng tháng.";
  } else if (parseInt(thu_thap_hang_thang) < 1) {
    errors.thu_thap_hang_thang = "Thu nhập hàng tháng lớn hơn 0.";
  } else if (parseInt(thu_thap_hang_thang.replace(/,/g, "")) > 999999999) {
    errors.thu_thap_hang_thang = "Thu nhập hàng tháng nhỏ hơn 1 tỷ.";
  }
  if (!gioi_tinh || gioi_tinh === "") {
    errors.gioi_tinh = "Bạn phải chọn Giới tính.";
  }
  if (!dia_chi) {
    errors.dia_chi = "Bạn phải chọn Thành phố.";
  } else if (dia_chi === "All") {
    errors.dia_chi = "Bạn phải chọn Thành phố.";
  }
  if (!chon_loai_thu_nhap || chon_loai_thu_nhap === "") {
    errors.chon_loai_thu_nhap = "Bạn phải chọn Loại thu nhập.";
  }
  if (!tien_nhan) {
    errors.tien_nhan = "Bạn phải điền Số tiền muốn Vay.";
  } else if (parseInt(tien_nhan.replace(/,/g, "")) < 1) {
    errors.tien_nhan = "Số tiền muốn Vay phải lớn hơn 0.";
  } else if (parseInt(tien_nhan.replace(/,/g, "")) > 999999999) {
    errors.tien_nhan = "Số tiền muốn Vay phải nhỏ hơn 1 tỷ.";
  }
  if (!thoi_gian_vay) {
    errors.thoi_gian_vay = "Bạn phải điền Thời gian vay.";
  } else if (parseInt(thoi_gian_vay.replace(/,/g, "")) < 1) {
    errors.thoi_gian_vay = "Thời gian vay phải lớn hơn 0.";
  } else if (parseInt(thoi_gian_vay.replace(/,/g, "")) > 99) {
    errors.thoi_gian_vay = "Thời gian vay phải nhỏ hơn 100.";
  }
  if (!checkbox) {
    errors.checkbox = "Bạn phải đồng ý các Điều khoản và Điều kiện.";
  } else if (checkbox === false) {
    errors.checkbox = "Bạn phải đồng ý các Điều khoản và Điều kiện";
  }

  return errors;
};
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    borderRadius: "20px",
  },
  Label_tf: {
    marginRight: 30,
  },
  bg: {},
  textField: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "100%",
    marginLeft: 7,
  },
  icon: {
    fontSize: 50,
    color: "#EE4623",
  },
  input: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
  },
  checkboxDesign: {
    position: "absolute",
    top: -10,
    left: 0,
  },
}));
function TableLoansComponent(props) {
  const { handleSubmit, invalid, submitting, sent_Data_Loans,openRules,setOpenRules } = props;
  const classes = useStyles();
  const onhandleSubmit = (event) => {
    const {
      ho_va_ten,
      cmnd,
      nghe_nghiep,
      thu_thap_hang_thang,
      dia_chi,
      tien_nhan,
      so_dien_thoai,
      email,
      dob,
      gioi_tinh,
      chon_loai_thu_nhap,
      thoi_gian_vay,
    } = event;
    const bob = String(dob.slice(0, 10));
    let count = cmnd.indexOf(" ") === -1 ? 12 : cmnd.indexOf(" ");

    let numberCmnd = String(cmnd.slice(0, count));
    let info = {
      ho_ten: ho_va_ten,
      so_dien_thoai: so_dien_thoai,
      dia_chi: dia_chi,
      email: email,
      cmnd: numberCmnd,
      dob: bob,
      nghe_nghiep: nghe_nghiep,
      gioi_tinh: gioi_tinh,
      loai_thu_nhap: chon_loai_thu_nhap,
      thu_nhap: parseInt(thu_thap_hang_thang.replace(/,/g, "")),
      so_tien_muon_vay: parseInt(tien_nhan.replace(/,/g, "")),
      thoi_han_vay: parseInt(thoi_gian_vay.replace(/,/g, "")),
    };
    sent_Data_Loans(info);
  };
  function showOption() {
    var result = null;
    if (cities.length > 0) {
      result = cities.map((city, index) => {
        return (
          <option value={city.value} key={index}>
            &ensp;&ensp;{city.label}
          </option>
        );
      });
    }
    return result;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Rules openRules={openRules} setOpenRules={setOpenRules}/>
      <Box margin={3}>
        <Typography
          variant="h2"
          style={{ color: ALL_COLOR.blue }}
          align="center"
        >
          Hỗ trợ tài chính tiêu dùng siêu tốc lên đến{" "}
          <Box component="span" style={{ color: ALL_COLOR.secondary }}>
            200 triệu đồng
          </Box>
        </Typography>
        <Typography variant="body1" color="textPrimary" align="center">
          Để đăng ký, bạn vui lòng cung cấp cho CreditOne các thông tin dưới
          đây.
        </Typography>
      </Box>
      <Container>
        <Box
          style={{ paddingTop: 50, paddingBottom: 50 }}
          borderRadius="borderRadius"
          elevation={3}
        >
          <Box className="mt-3">
            <Paper elevation={3} className={classes.paper}>
              <Box component={Container} p={3}>
                <Typography
                  variant="h2"
                  color="textPrimary"
                  gutterBottom={true}
                >
                  ĐĂNG KÝ VAY
                </Typography>
                <form onSubmit={handleSubmit(onhandleSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Box className={classes.input}>
                        <FaUserCircle className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>Họ và Tên</label>
                          <Field
                            component={renderTextField}
                            placeholder="Vd: Nguyễn Văn A"
                            name="ho_va_ten"
                          />
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <FaIdCard className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>
                            Số CMND/CCCD
                          </label>
                          <Field
                         
                            placeholder="Vd:241463111"
                            component={renderTextField}
                            InputProps={{
                              inputComponent: NumberFormatCustomCmnd,
                            }}
                            name="cmnd"
                            type="text"
                            maxLength={12}
                          />
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <FaBriefcase className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>Nghề nhiệp</label>
                          <Field
                            style={{ width: "100%" }}
                            component={renderSelectField}
                            name="nghe_nghiep"
                          >
                            <option value="">Chọn nghề nghiệp</option>
                            <option value="Nhân viên văn phòng">
                              Nhân viên văn phòng
                            </option>
                            <option value="Công nhân / Tài xế">
                              Công nhân / Tài xế
                            </option>
                            <option value="Buôn bán / Tự do">
                              Buôn bán / Tự do
                            </option>
                          </Field>
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <GiReceiveMoney className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>
                            Thu Nhập(VNĐ)
                          </label>
                          <Field
                            placeholder="Vd:10,000,000"
                            component={renderTextField}
                            InputProps={{
                              inputComponent: NumberFormatCustomThuNhap,
                            }}
                            name="thu_thap_hang_thang"
                          />
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <FaMapMarkedAlt className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>
                            Tỉnh/Thành Phố
                          </label>
                          <Field component={renderSelectField} name="dia_chi">
                            {showOption()}
                          </Field>
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <GiTakeMyMoney className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>
                            Số Tiền Muốn Vay
                          </label>
                          <Field
                            placeholder="10,000,000"
                            component={renderTextField}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              ),
                              inputComponent: NumberFormatCustomThuNhap,
                            }}
                            name="tien_nhan"
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box className={classes.input}>
                        <MdContactPhone className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>
                            Số Điện Thoại
                          </label>
                          <Field
                            component={renderTextField}
                            placeholder="Vd:0979797979"
                            InputProps={{
                              inputComponent: NumberFormatCustom,
                            }}
                            name="so_dien_thoai"
                          />
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <FaMailBulk className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>Email</label>
                          <Field
                            component={renderTextField}
                            placeholder="Vd:nguyenvanA@gmail.com"
                            name="email"
                          />
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <FaBirthdayCake className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>Ngày Sinh</label>
                          <Field
                            openTo="year"
                            name="dob"
                            views={["year", "month", "date"]}
                            component={DateField}
                            minDate="1/1/1970"
                            maxDate={new Date()}
                            color="secondary"
                          />
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <FaTransgender className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>Giới Tính</label>
                          <Field component={renderSelectField} name="gioi_tinh">
                            <option value="">Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                          </Field>
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <GiMoneyStack className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>
                            Loại Thu Nhập
                          </label>
                          <Field
                            component={renderSelectField}
                            name="chon_loai_thu_nhap"
                          >
                            <option value="">Chọn loại thu nhập</option>
                            <option value="Chuyển khoản">Chuyển khoản</option>
                            <option value="Tiền mặt">Tiền mặt</option>
                          </Field>
                        </Box>
                      </Box>
                      <Box className={classes.input}>
                        <BiTimer className={classes.icon} />
                        <Box className={classes.textField}>
                          <label className={classes.Label_tf}>
                            Thời Gian Vay(Tháng)
                          </label>
                          <Field
                            name="thoi_gian_vay"
                            placeholder="5"
                            component={renderTextField}
                            InputProps={{
                              inputComponent: NumberFormatCustomThoiGianVay,
                            }}
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Field
                      name="checkbox"
                      id="status"
                      type="checkbox"
                      component={renderCheckbox}
                      label={
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          gutterBottom={true}
                        >
                          Tôi đã đọc và đồng ý với các{" "}
                          <Typography component="span" color="secondary" onClick={()=>setOpenRules(true)}>
                            {" "}
                            Điều khoản và Điều kiện
                            {" "}
                          </Typography>
                          của CreditOne.Bằng việc nhấn nút ĐĂNG KÍ NGAY tôi đồng
                          ý cho phép{" "}
                          <Typography
                            component="b"
                            color="secondary"
                            style={{ fontWeight: 900 }}
                          >
                            CreditOne
                          </Typography>{" "}
                          sử dụng các thông tin của tôi để đăng kí vay với Ngân
                          hàng và các tổ chức Tài chính.
                        </Typography>
                      }
                    />
                  </Grid>
                  <Button
                    disabled={invalid || submitting}
                    variant="contained"
                    fullWidth
                    color="secondary"
                    type="submit"
                    style={{ marginTop: "1rem" }}
                  >
                    Đăng ký ngay
                  </Button>
                </form>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </MuiPickersUtilsProvider>
  );
}
export default reduxForm({
  form: FORM_Vay_1,
  validate,
})(TableLoansComponent);

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      isNumericString
      allowEmptyFormatting
      format="##########"
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
function NumberFormatCustomCmnd(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      isNumericString
      format="############"
      mask="#"
    />
  );
}
NumberFormatCustomCmnd.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
function NumberFormatCustomThuNhap(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      thousandSeparator={true}
      isNumericString
    />
  );
}
NumberFormatCustomThuNhap.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function NumberFormatCustomThoiGianVay(props) {
  const { inputRef, onChange, ...other } = props;

  return <NumberFormat {...other} getInputRef={inputRef} isNumericString />;
}
NumberFormatCustomThoiGianVay.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
