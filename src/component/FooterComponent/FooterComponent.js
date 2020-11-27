import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { icon_call, icon_face_book, icon_zalo } from "../../common/image/image";
const useStyles = makeStyles(() => ({
  icon_footer: {
    width: "2rem",
    height: "2rem",
    margin: "0.5rem",
  },
  Copyright: {
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));
function FooterComponent() {
  const classes = useStyles();

  return (
    <Box component="footer" bgcolor="#F2F2F2">
      {/* <Box component={Container} paddingTop="2rem" paddingBottom="5rem">
          <Grid container>
            <Grid item sm={6}>
              <Box display="column" alignItems="center" pr={1}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height={50}
                >
                  <img
                    src={logo}
                    style={{ width: "3rem", height: "3rem" }}
                    alt="logo"
                  />
                  <Box component={Typography} variant="h4" color="text.primary">
                    CREDITONE
                  </Box>
                </Box>
                <Box
                  component={Typography}
                  variant="body2"
                  color="text.primary"
                  pt={3}
                  fontWeight={300}
                >
                  CreditOne là nền tảng giúp khách hàng tìm kiếm, so sánh các
                  khoản vay ưu đãi từ các Ngân Hàng và công ty Tài Chính uy tín
                  nhất.
                  <br />
                  CreditOne hoàn toàn miễn phí, mang đến trải nghiệm mới và nhiều
                  ưu đãi cho khách hàng dựa vào công nghệ và sự hỗ trợ đến từ các
                  đối tác tài chính hàng đầu Việt Nam hiện nay.
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height={50}
                >
                  <Box
                    component={Typography}
                    variant="h4"
                    color="text.primary"
                  >
                    THÔNG TIN LIÊN LẠC
                  </Box>
                </Box>
  
                <Box
                  component="div"
                  pt={3}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {communications.map((item, index) => {
                    return (
                      <a href={item.href} target={item.target} key={index}>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                          fontWeight={300}
                        >
                          {item.label}
                        </Typography>
                      </a>
                    );
                  })}
                </Box>
            </Grid>
          </Grid>
        </Box> */}

      <Box bgcolor="#E0E0E0" p={3}>
        <Container className={classes.Copyright}>
          <Box component="p" color="text.primary">
            Copyright 2019 | CreditOne
          </Box>
          <Box>
            <img
              className={classes.icon_footer}
              src={icon_face_book}
              alt="facebook"
            />
            <img className={classes.icon_footer} src={icon_zalo} alt="zalo" />
            <img className={classes.icon_footer} src={icon_call} alt="call" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default FooterComponent;
