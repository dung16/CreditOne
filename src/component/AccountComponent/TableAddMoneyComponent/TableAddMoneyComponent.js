import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import OwlCarousel from "react-owl-carousel3";
import { ALL_COLOR } from "../../../common/Theme/color";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    width: 500,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    margin: "auto",
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
  note: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: " space-around",
  },
  slide:{
    
    "& .owl-nav":{
      top:"30% !important",
      "& .owl-prev , .owl-next":{
        color: `${ALL_COLOR.secondary} !important`,
        fontSize:'32px !important'
      },
      "& .owl-prev":{
        marginLeft:"-5rem !important"
      },
      "& .owl-next":{
        marginRight:"-5rem !important"
      }
    }
  }
}));

function TableAddMoneyComponent({ text_label, tutorialSteps }) {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h2" align="center" style={{ color: ALL_COLOR.blue }}>
        NẠP TIỀN VÀO TÀI KHOẢN
      </Typography>
      <Box mt={3}>
        <Typography variant="h2" color="secondary">
          I. Nạp tiền bằng chuyển khoản
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            {text_label.map((item, index) => {
              return (
                <Box
                  component={Paper}
                  display="flex"
                  alignItems="center"
                  mt={2}
                  mb={2}
                  key={index}
                  elevation={3}
                >
                  <Box component={Paper} minWidth="5rem" m={1} elevation={3}>
                    <Typography variant="h1" color="secondary" align="center">
                      {item.id}
                    </Typography>
                  </Box>
                  <Box style={{ color: ALL_COLOR.black }}>
                    <Typography variant="h3"> {item.title}</Typography>
                    <Typography variant="subtitle2">{item.caption}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={5} container>
            <Box component={Paper} mt={2} mb={2} p={3} className={classes.note}>
              <Box borderBottom={1} width="100%">
                <Typography
                  variant="h2"
                  color="secondary"
                  align="center"
                  style={{ paddingBottom: " 2rem" }}
                >
                  Lưu ý
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" align="center">
                  Lưu ý: Số Điện Thoại là Tên đăng nhập mà quý khách đã tạo. Ví
                  dụ nội dung tin nhắn:
                  <Box
                    component="b"
                    m={0}
                    color="#EE4623"
                    fontWeight="fontWeightMedium"
                  >
                    NAP HAYVAY 0974xxxxxx
                  </Box>
                  Với hình thức này sau khi nhận được tiền hệ thống sẽ xử lý
                  cộng tiền vào tài khoản của bạn trong thời gian nhanh nhất.
                  Nếu có sai sót xin vui lòng liên hệ Hotline:
                  <Box component="b" color="#EE4623">
                    1900055528
                  </Box>
                  để được hỗ trợ.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Typography variant="h2" color="secondary">
          II. Nạp tiền với Payoo/Momo
        </Typography>
        <Container style={{ maxWidth: 900,marginTop:"2rem" }}>
          <OwlCarousel className={`${classes.slide} owl-theme `} items={1} dots={false}  nav={true} navText={['<','>']}>
            {tutorialSteps.map((item, index) => {
              return (
                <Box className="item" key={index}>
                  <img
                    className={classes.img}
                    src={item.imgPath}
                    alt={`img_` + index}
                  />
                </Box>
              );
            })}
          </OwlCarousel>
        </Container>
      </Box>
    </Container>
  );
}

export default TableAddMoneyComponent;
