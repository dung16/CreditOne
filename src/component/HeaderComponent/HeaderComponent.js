import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BsList } from "react-icons/bs";
import { Link, useRouteMatch } from "react-router-dom";
import { logo } from "../../common/image/image";
import { MENU_LINKS } from "../../constants/index";
const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    alignItems: "center",
    position: "sticky",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navBody: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },

  navChangeRespon: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    transition: "all 1s linear",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      backgroundColor: "white",
      width: "100%",
      height: 0,
      display: "none",
    },
  },
  logoNav: {
    width: 80,
    height: "5rem",
    cursor: "pointer",
  },
  navbarMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navLink: {
    display: "flex",
    fontWeight: 300,
    alignItems: "center",
    "& a":{
      textDecoration: "none",
    },

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  textLink: {
    textTransform: "capitalize",
    padding: "0 10px 0 10px",
  },
  area: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));
function MenuLink({ label, to, activeOnlyWhenExact, ...customClass }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <Link to={to}>
      <Typography
        {...customClass}
        component="span"
        variant="h5"
        color={match ? "secondary" : "textPrimary"}
      >
        {label}
      </Typography>
    </Link>
  );
}

function HeaderComponent(props) {
  const {
    activeColor,
    account,
    changeToggle,
    closeToggle,
    toggle,
    returnHome,
    handleLogout,
    handleChangeURL,
  } = props;
  const classes = useStyles();
  const nameLead = () => {
    return (
      <Box className={classes.area}>
        <Box
          className={classes.textLink}
          style={{ cursor: "pointer", width: "100%" }}
          onClick={handleLogout}
        >
          Đăng Xuất
        </Box>
      </Box>
    );
  };
  function menu(list_menu) {
    let xhtml = null;

    if (list_menu) {
      xhtml = list_menu.map((item, index) => {
        if (account) {
          return index === 0 || index === 1 ? null : (
            <MenuLink
              label={item.label}
              to={item.to}
              activeOnlyWhenExact={item.activeOnlyWhenExact}
              key={index}
              className={classes.textLink}
            />
          );
        } else {
          return index === 3 ? null : (
            <MenuLink
              label={item.label}
              to={item.to}
              activeOnlyWhenExact={item.activeOnlyWhenExact}
              key={index}
              className={classes.textLink}
            />
          );
        }
      });
    }
    return xhtml;
  }
  return (
    <nav
      style={{
        position: "fixed",
        backgroundColor: "white",
        width: "100%",
        zIndex: "100",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <Container className={classes.nav}>
        <Box className={classes.navbar}>
          <Box className={classes.navBody}>
            <Box className={classes.logoNav} onClick={returnHome}>
              <img src={logo} alt="logo" style={{ width: "100%" }} />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "none" }} textAlign="center">
            Luôn đồng hành cùng bạn
          </Box>
          <Box display={{ xs: "block", sm: "none" }}>
            <Box className={classes.navbarMenu}>
              <BsList
                style={{ fontSize: 30, color: "rgb(238, 70, 35)" }}
                onClick={changeToggle}
              />
              <Box>Menu</Box>
            </Box>
          </Box>
        </Box>
        <Box
          className={classes.navChangeRespon}
          style={{
            display: toggle ? "flex" : "",
            height: toggle ? "auto" : "",
          }}
        >
          <Box className={classes.navLink} onClick={closeToggle}>
            {menu(MENU_LINKS)}
          </Box>
          <Box className={classes.navLink} onClick={closeToggle}>
            {account ? (
              nameLead
            ) : (
              <Box display="flex" alignItems="center">
                <Typography
                  component="span"
                  variant="h5"
                  style={{ cursor: "pointer", marginLeft: 10 }}
                  onClick={() => handleChangeURL(false)}
                  className={classes.textLink}
                  color={activeColor === 1 ? "secondary" : "textPrimary"}
                >
                  Đăng ký
                </Typography>
                <Typography
                  component="span"
                  variant="h5"
                  onClick={() => handleChangeURL(true)}
                  style={{ cursor: "pointer" }}
                  color={activeColor === -1 ? "secondary" : "textPrimary"}
                  className={classes.textLink}
                >
                  Đăng nhập
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </nav>
  );
}

export default HeaderComponent;
