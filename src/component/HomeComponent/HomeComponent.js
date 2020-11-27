import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  makeStyles,
  TableCell,
  Typography,
  withStyles,
  TableBody,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
} from "@material-ui/core";
import OwlCarousel from "react-owl-carousel3";
import { ALL_COLOR } from "../../common/Theme/color";
import { communications } from "../../pages/routers";
import { TableRateContainer } from "../../pages/PageContainers";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: ALL_COLOR.black,
  },
  body: {
    color: ALL_COLOR.black,
  },
}))(TableCell);
const useStyle = makeStyles((theme) => ({
  Slide_banner: {
    position: "relative",
    "& .owl-dots": {
      width: "100%",
      position: "absolute",
      bottom: "1rem",
      margin: "auto",
      "& .owl-dot": {
        "& span": {
          backgroundColor: "#094D7F !important",
        },
      },
    },
    "&items": {
      "& img": {
        width: "100%",
        display: "block",
        position: "relative",
        zIndex: 1,
      },
    },
  },

  exchange_label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  table: {
    minWidth: 800,
  },
  exchange_label_title: {
    "& img": {
      width: "100%",
    },
    "& img:nth-child(2)": {
      cursor: "pointer",
    },
  },
  btn_text_label: {
    textTransform: "uppercase",
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
  },
  section_why_loan_title: {
    color: ALL_COLOR.black,
    paddingTop: "2rem",
  },
  section_why_loan_text: {
    color: ALL_COLOR.black,
    paddingTop: "1rem",
  },
  Loans_Fast: {
    marginTop: "2rem",
    "& h6": {
      marginTop: "1rem",
      marginBottom: "1rem",
    },

    "& button": {
      padding: "0.9rem",
      width: 240,
      marginTop: "2rem",
    },
  },
  logo_help: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
    "& img": {
      width: "2rem",
      marginRight: "0.5rem",
    },
  },
  ///
  dotSlide: {
    width: 12,
    height: 12,
    backgroundColor: "#BDBDBD",
    borderRadius: 20,
    margin: 5,
    [theme.breakpoints.down("lg")]: {
      height: 6,
      width: 7,
    },
  },

  bannerMain: {
    paddingTop: 50,
    paddingBottom: 50,
    position: "relative",
  },
  button: {
    fontWeight: 300,
    marginTop: "2rem",
    width: 240,
    fontSize: 20,
    borderRadius: 10,
    [theme.breakpoints.down("lg")]: {
      fontSize: 14,
      borderRadius: 8,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      width: "auto",
      borderRadius: 8,
    },
  },
  btn: {
    margin: 10,
  },

  hiddenTable: {
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  btnHidden: {
    display: "none",
    margin: "auto",
    [theme.breakpoints.only("xs")]: {
      display: "block",
    },
  },
  pagination: {
    width: "50%",
    margin: "auto",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  PaperSlide: {
    width: 85,
    height: 85,
    padding: "1rem",
    boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  imgPaperSlide: {
    width: "100%",
    cursor: "pointer",
  },
  itemSlide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "2rem",
    fontSize: 20,
  },
  layout: {
    [theme.breakpoints.down("xs")]: {
      display: "grid",

      gridTemplateColumns: "repeat(6,minmax(207px, auto))",
    },
  },
}));
function HomeComponent(props) {
  const classes = useStyle();
  const {
    btnChangeForm,
    BANNER_HOME,
    text_session_1,
    text_paper,
    rowsMain,
    changeToLogin,
    section_CREDITONE,
    Title_Section,
    loans_fast,
    slide_partner,
    slideService,
  } = props;
  var newArr = rowsMain;
  function changData() {
    let xhtml = null;
    let arr = newArr[0];
    newArr.splice(0, 1);
    newArr.push(arr);
    xhtml = newArr.slice(0, 10).map((row, index) => {
      return (
        <TableRow key={index}>
          <StyledTableCell align="center">
            <Typography variant="subtitle2" style={{ fontWeight: 500 }}>
              {row.name}
            </Typography>
            <Box display={{ xs: "block", sm: "none" }}>
              <Typography variant="subtitle2">{row.sex}</Typography>
            </Box>
          </StyledTableCell>
          <StyledTableCell
            className={classes.hiddenTable}
            style={{ color: "#EE4623" }}
            align="center"
          >
            <Typography variant="subtitle2">{row.phone}</Typography>
          </StyledTableCell>
          <StyledTableCell align="center" className={classes.hiddenTable}>
            <Typography variant="subtitle2">{row.sex}</Typography>
          </StyledTableCell>
          <StyledTableCell align="center">
            <Typography variant="subtitle2" style={{ fontWeight: 500 }}>
              {row.address}
            </Typography>

            <Box
              display={{ xs: "block", sm: "none" }}
              style={{ color: "#EE4623" }}
            >
              <Typography variant="subtitle2"> {row.phone}</Typography>
            </Box>
          </StyledTableCell>
          <StyledTableCell align="center" style={{ color: "#EE4623" }}>
            <Typography variant="subtitle2">{row.price}</Typography>
            <Box display={{ xs: "block", sm: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "100%", borderRadius: 5 }}
                onClick={changeToLogin}
                size="small"
              >
                Mua
              </Button>
            </Box>
          </StyledTableCell>
          <StyledTableCell align="center" className={classes.hiddenTable}>
            <Button
              variant="contained"
              color="secondary"
              style={{ width: "100%", borderRadius: 10 }}
              onClick={changeToLogin}
            >
              Mua
            </Button>
          </StyledTableCell>
        </TableRow>
      );
    });
    return xhtml;
  }
  setInterval(() => {
    newArr = changData();
  }, 1000);

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  };
  return (
    <Box style={{ backgroundColor: ALL_COLOR.gray_7 }}>
      {/* banner */}
      <Box component="section">
        <OwlCarousel
          className={`owl-theme ${classes.Slide_banner}`}
          loop
          items={1}
          autoplay={true}
          autoplayTimeout={5000}
        >
          {BANNER_HOME.map((item, index) => {
            return (
              <Box component="div" className="items" key={index}>
                <Box display={{ xs: "none", sm: "block" }}>
                  <img
                    src={item.img_desktop}
                    alt={item.label}
                    style={{ cursor: "pointer", width: "100%" }}
                    onClick={() => btnChangeForm(item.clickChangeForm)}
                  />
                </Box>
                <Box display={{ xs: "block", sm: "none" }}>
                  <img
                    src={item.img_mobi}
                    alt={item.label}
                    style={{ cursor: "pointer", width: "100%" }}
                    onClick={() => btnChangeForm(item.clickChangeForm)}
                  />
                </Box>
              </Box>
            );
          })}
        </OwlCarousel>
      </Box>
      {/* CÁC DỊCH VỤ  */}
      <Box component="section" pt={6} bgcolor={ALL_COLOR.white}>
        <Typography variant="h2" color="textSecondary" align="center">
          {Title_Section.title_service}
        </Typography>
        <OwlCarousel
          className="owl-theme"
          dots={false}
          margin={10}
          items={5}
          loop
          autoplay={true}
          autoplayTimeout={3000}
          autoplayHoverPause={false}
          responsive={responsive}
        >
          {slideService.map((slide, index) => (
            <Box component="div" className="item" key={index}>
              <Box className={classes.itemSlide}>
                <Paper elevation={3} className={classes.PaperSlide}>
                  <img
                    className={classes.imgPaperSlide}
                    src={slide.img}
                    alt={`index_` + index}
                    onClick={() => btnChangeForm("/dangkivay")}
                  />
                </Paper>
                <Box component="p">{slide.caption}</Box>
              </Box>
            </Box>
          ))}
        </OwlCarousel>
      </Box>

      {/* SÀN GIAO DỊCH */}
      <Box component="section">
        <Box component={Container} mt={3}>
          <Typography variant="h2" color="textSecondary" align="center">
            {Title_Section.title_deal}
          </Typography>
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper
                  elevation={3}
                  style={{
                    minHeight: 200,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                  }}
                >
                  <Container>
                    <Box
                      component={Typography}
                      align="center"
                      variant="subtitle1"
                      style={{ color: ALL_COLOR.black }}
                    >
                      {text_session_1}
                    </Box>
                    <Grid container spacing={3}>
                      {text_paper.map((item, index) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            container
                            direction="column"
                            justify="space-around"
                            alignItems="center"
                            key={index}
                            className={classes.exchange_label_title}
                          >
                            <img
                              src={item.number_text}
                              alt={`title_` + index}
                            />
                            <img
                              src={item.txt_btn}
                              alt={`title_` + index}
                              onClick={() =>
                                btnChangeForm(item.clickChangeForm)
                              }
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Container>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper style={{ borderRadius: 20 }}>
                  <TableRateContainer />
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box component={Paper} mt={6} mb={6} style={{ borderRadius: 30 }}>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      <Typography variant="subtitle1">Khách hàng</Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className={classes.hiddenTable}
                    >
                      <Typography variant="subtitle1">Số điện thoại</Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className={classes.hiddenTable}
                    >
                      <Typography variant="subtitle1">Giới tính</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="subtitle1"> Khu vực</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="subtitle1">Giá bán</Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className={classes.hiddenTable}
                    >
                      <Typography variant="subtitle1">Mua hàng</Typography>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{changData()}</TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>

      {/*      TẠI SAO NÊN ĐĂNG KÝ VAY VỚI CREDITONE  */}
      <Box component="section">
        <Box component={Container}>
          <Typography variant="h2" color="textSecondary" align="center">
            {Title_Section.title_why_loans}{" "}
            <Box component="span" style={{ color: ALL_COLOR.secondary }}>
              {" "}
              {Title_Section.title_item}
            </Box>
          </Typography>
          <Box mt={6} mb={3}>
            <Grid container spacing={3}>
              {section_CREDITONE.map((item, key) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={key}>
                    <Container component={Paper} style={{ minHeight: 170 }}>
                      <Typography
                        variant="h3"
                        align="center"
                        className={classes.section_why_loan_title}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        align="center"
                        className={classes.section_why_loan_text}
                      >
                        {item.text}
                      </Typography>
                    </Container>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
      {/*TẠI SAO NÊN ĐĂNG KÝ VAY VỚI CREDITONE */}

      <Box component="section" mt={6}>
        <Typography variant="h2" align="center" color="textSecondary">
          {Title_Section.title_partner}
          <Box component="span" style={{ color: ALL_COLOR.secondary }}>
            {" "}
            {Title_Section.title_item}
          </Box>
        </Typography>
        <Box component={Container} mt={6}>
          <OwlCarousel
            className="owl-theme"
            dots={false}
            margin={10}
            items={6}
            loop
            autoplay={true}
            autoplayTimeout={4000}
            autoplayHoverPause={false}
            responsive={responsive}
          >
            {slide_partner.map((slide, index) => (
              <Box component="div" className="item" key={index}>
                <img
                  style={{ width: "100%", borderRadius: 20 }}
                  src={slide}
                  alt={`img_` + index}
                />
              </Box>
            ))}
          </OwlCarousel>
        </Box>
      </Box>
      {/* BẠN MUỐN VAY NHANH */}
      <Box component="section" mt={6}>
        <Box component={Container} pt={3} pb={6}>
          <Typography
            variant="h2"
            align="center"
            style={{ color: ALL_COLOR.blue }}
          >
            {Title_Section.title_loans_fast}
          </Typography>
          <Box component={Grid} container spacing={3}>
            {loans_fast.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  key={index}
                  className={classes.Loans_Fast}
                >
                  <Typography variant="h3" align="center">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" align="center">
                    {item.caption}
                  </Typography>
                  <Button variant="contained" color="secondary" size="large">
                    <Typography variant="h3" align="center">
                      {item.title_button}
                    </Typography>
                  </Button>
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>
      {/* BẠN CẦN HỔ TRỢ ? */}
      <Box component="section" style={{ backgroundColor: ALL_COLOR.blue }}>
        <Box component={Container} pt={3}>
          <Typography
            variant="h2"
            style={{ color: ALL_COLOR.white }}
            align="center"
          >
            {Title_Section.title_help}
          </Typography>
          <Box component={Grid} container pt={6} pb={6}>
            {communications.map((item, index) => {
              return item.id === 2 ? null : (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                  justify="center"
                  container
                >
                  <a
                    href={item.href}
                    target={item.target}
                    className={classes.logo_help}
                  >
                    <img src={item.icon} alt={index} />
                    <Typography
                      component="span"
                      variant="subtitle1"
                      style={{ color: ALL_COLOR.white }}
                      fontWeight={300}
                    >
                      {item.label}
                    </Typography>
                  </a>
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default HomeComponent;
