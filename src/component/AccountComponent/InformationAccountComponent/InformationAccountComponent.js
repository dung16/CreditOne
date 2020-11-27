import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import NumberFormat from "react-number-format";
import { ALL_COLOR } from "../../../common/Theme/color";
import { icon_trang_ca_nhan } from "../../../common/image/image";
import { ChangeInformationContainer } from "../../../pages/PageContainers";
import ChangePasswordContainer from "../../../containers/AccountContainer/InformationAccountContainer/ChangePasswordContainer/ChangePasswordContainer";
const useStyles = makeStyles({});
function InformationAccountComponent(props) {
  const { informationAccount } = props;
  const classes = useStyles();
  const {
    so_dien_thoai_lender,
    so_luong_don_mua,
    so_du,
    ten_lender,
  } = informationAccount;
  return (
    <Box component={Paper} elevation={3} style={{ minHeight: 500 }}>
      <Box pt={3}>
        <Typography
          variant="h2"
          align="center"
          style={{ color: ALL_COLOR.blue }}
        >
          THÔNG TIN KHÁCH HÀNG
        </Typography>
      </Box>

      <Box component={Container} pt={6}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            container
            justify="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Box display={{ xs: "none", sm: "block" }}>
                <img src={icon_trang_ca_nhan} alt="icon" />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component={Paper} elevation={3}>
              <Container>
                <Grid container style={{ padding: "1rem" }}>
                  <Grid xs={12} sm={6} item>
                    <Typography variant="subtitle1" gutterBottom>
                      Tên khách hàng :
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Typography variant="h3" align="center" gutterBottom>
                      {ten_lender}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container style={{ padding: "1rem" }}>
                  <Grid xs={12} sm={6} item>
                    <Typography variant="subtitle1" gutterBottom>
                      Số điện thoại :
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Typography variant="h3" align="center" gutterBottom>
                      {so_dien_thoai_lender}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container style={{ padding: "1rem" }}>
                  <Grid xs={12} sm={6} item>
                    <Typography variant="subtitle1" gutterBottom>
                      Tổng Đơn Đã Mua:
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Typography variant="h3" align="center" gutterBottom>
                      {so_luong_don_mua}
                    </Typography>
                    {/* onClick={this.changeForm} */}
                  </Grid>
                </Grid>
                <Grid container style={{ padding: "1rem" }}>
                  <Grid xs={12} sm={6} item>
                    <Typography variant="subtitle1" gutterBottom>
                      Số Dư Tài Khoản:
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Typography variant="h3" align="center" gutterBottom>
                      <NumberFormat
                        value={so_du}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Box style={{display:"flex",justifyContent:"space-around",marginTop:"2rem"}}>
              <ChangeInformationContainer />
              <ChangePasswordContainer />
            </Box>
          </Grid>
          <Grid className={classes.font} item md={12}>
            <Grid
              item
              container
              xs={12}
              direction="row"
              justify="space-around"
              alignItems="center"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <Box style={{ textAlign: "center" }}>
                {/* <ChangePassWord /> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default InformationAccountComponent;
