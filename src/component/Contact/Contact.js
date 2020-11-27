import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CgPhone } from "react-icons/cg";
import { FaRegEnvelope } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { Box, Container, Grid, Paper } from "@material-ui/core";
import { contact } from "../../common/image/image";
const useStyle = makeStyles((theme) => ({
  bgColor: {
    width: "100%",
    height: "100%",
    "& a": {
      textDecoration: "none",
    },
  },
  h2: {
    paddingBottom: "2rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },
  h3: {
    fontWeight: 500,
    color: "black",
  },
  box_img_credit: {
    width: 50,
    display: "block",
    margin: "20px",
    paddingTop: "10px",
  },
  p: {
    paddingBottom: 50,
    fontWeight: 300,
    fontSize: 16,
    color: "#000000DE",
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: 0,
    marginInlineEnd: 0,
    "&:hover": {
      color: "#000000DE",
    },
  },
  icon: {
    fontSize: 50,
    color: "#EE4623",
  },
  h1: {
    textAlign: "center",
    fontSize: 50,
    [theme.breakpoints.down("xs")]: {
      paddingTop: "3rem",
    },
  },
}));
function Contact() {
  const classes = useStyle();
  return (
    <Box>
      <img src={contact} alt="contact" style={{ width: "100%" }} />
      <Box component={Container} mt={5} mb={5}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          align="center"
        >
          <Box>
            <h2 className={classes.h2} style={{ textTransform: "uppercase" }}>
              <span style={{ color: "#EE4623" }}>
                chúng tôi luôn lắng nghe{" "}
              </span>
              để hỗ trợ bạn tốt hơn
            </h2>
          </Box>
          <Grid container spacing={3} style={{ paddingBottom: 20 }}>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Paper elevation={3} className={classes.bgColor}>
                <div className={classes.box_img_credit}>
                  <a href="tel:0896230928">
                    <CgPhone className={classes.icon} />
                  </a>
                </div>
                <h3 className={classes.h3}>Hotline</h3>
                <a href="tel:0896230928" className={classes.p}>
                  0896230928
                </a>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Paper elevation={3} className={classes.bgColor}>
                <div className={classes.box_img_credit}>
                  <FaRegEnvelope className={classes.icon} />
                </div>
                <h3 className={classes.h3}>Gửi tin nhắn đến tổng đài</h3>
                <p className={classes.p}>
                  Vay tiền mặt: TM gửi 8279
                  <br />
                  Mở thẻ tín dụng: CC gửi 8279
                </p>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Paper elevation={3} className={classes.bgColor}>
                <div className={classes.box_img_credit}>
                  <a href="mailto:hotro@CreditOne.vn">
                    {" "}
                    <RiUserSettingsFill className={classes.icon} />
                  </a>
                </div>
                <h3 className={classes.h3}>Gửi yêu cầu hỗ trợ</h3>
                <a className={classes.p} href="mailto:hotro@CreditOne.vn">
                  hotro@CreditOne.vn
                </a>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default Contact;
