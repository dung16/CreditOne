
import { createMuiTheme } from '@material-ui/core/styles';
import {ALL_COLOR} from './color';

let theme = createMuiTheme({
  typography:{
    fontSize: 8,
    htmlFontSize:10,
    h1:{
      fontWeight:700,
      fontSize:"4rem",
    },
    h2:{
      fontWeight:700,
      fontSize:"2.3rem",
    },
    h3:{
      fontWeight:500,
      fontSize:"1.456rem"
    },
    h4:{
      fontSize:'1.5rem'
    }, 
    h5:{
      fontSize:'1rem',
      fontWeight:300
    },
    subtitle1:{
      fontSize:"1.25rem",
      fontWeight:300
    },
    subtitle2:{
      fontSize:"1rem",
      fontWeight:300
    },
    body1:{

    }
  },
  shape:{
    borderRadius:10
  },
  palette:{
    primary:{
      main:ALL_COLOR.colorPrimary
    },
    secondary:{
      main:ALL_COLOR.secondary,
    },
    text:{
      primary:ALL_COLOR.colorPrimary,
      secondary:ALL_COLOR.blue,
    }
  },
  overrides:{
    MuiFormLabel:{
      root:{
        color:ALL_COLOR.colorPrimary,
      }
      
    },
    MuiCheckbox:{
      root :{
        color:ALL_COLOR.colorPrimary
      }
     
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: ALL_COLOR.secondary,
      },
    },
    MuiPickersDay: {
      day: {
        color: ALL_COLOR.secondary,
      },
      daySelected: {
        backgroundColor:ALL_COLOR.secondary,
      },
      current: {
        color: ALL_COLOR.secondary,
      },
    },
  }
});
export default theme;