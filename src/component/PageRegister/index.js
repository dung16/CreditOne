import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { banner5 } from "../../common/image/image";
import {FormLoginContainer, FormRegisterContainer} from '../../pages/PageContainers/index';
const useStyles = makeStyles((theme) => ({
  bodyForm: {
    backgroundColor: "#E5E5E5",
    paddingTop: "3.5rem",
    paddingBottom: "2rem",
    minHeight: 'calc(100vh - 205px)'
  },

  contentForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  bgLogin: {
    width: "100%",
  },
  footerForm: {
    marginTop: "4rem",
    textAlign: "center",
  },
  ResImg: {
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
function PageRegister({changeForm,textForm}) {
  const classes = useStyles();
    return (
    <Box className={classes.bodyForm}>
      <Container>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={6} container direction="column"  justify="space-around">
            <Box>
              <Typography variant="h1" component="h1" color="textSecondary">
                {changeForm ? textForm[0].textTitle : textForm[1].textTitle}
              </Typography>
              <Typography variant="body1" component="p" color="textSecondary">
                {changeForm
                  ? textForm[0].text_subtitle
                  : textForm[1].text_subtitle}
              </Typography>
            </Box>
        
              {changeForm ? <FormLoginContainer />:<FormRegisterContainer />}
          </Grid>
          <Grid item sm={6} className={classes.ResImg}>
            <Box>
              <img src={banner5} className={classes.bgLogin} alt="banner_login" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    )
}
PageRegister.propTypes={
  changeForm:PropTypes.bool,
  textForm:PropTypes.array
}
export default PageRegister;
