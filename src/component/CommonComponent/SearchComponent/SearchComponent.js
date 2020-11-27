import React from "react";
import price from "./../../../constants/price";
import cities from "./../../../constants/city";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import {
  Box,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from "@material-ui/core";
import { ALL_COLOR } from "../../../common/Theme/color";
const BootstrapInput = withStyles((theme) => ({
  root: {
    width: 240,
    height: 20,
    "label + &": {
      marginTop: theme.spacing(3),
      width: "100%",
    },
    "& > svg": {
      color: ALL_COLOR.white,
    },
    "&:focus": {
      backgroundColor: "#EE4623",
      color:"white"
    },
    "& .MuiSelect-select": {
      background: "#EE4623",
      "& h6": {
        color: "white",
      },
    },
  },
  input: {
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #EE4623",
    fontSize: 16,
    textAlign: "center",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      borderRadius: 4,
      borderColor: "#EE4623",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {},
    },
  },
}))(InputBase);
const StyledMenuItem = withStyles((theme) => ({
  root: {
    color: "#000",
    fontWeight: 300,
    background: " #F2F2F2",
    textAlign: "center",
    "&:hover": {
     
      backgroundColor: "#EE4623",
      "& h6":{
        color: "white",
      }
    },
    "&:focus": {
      background: " #F2F2F2",
      color: "#EE4623",
      "& h6":{
        color: "white",
      },
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        textAlign: "center",
      },
    },
  },
}))(MenuItem);
const useStyles = makeStyles({
  search: {
    display: "flex",
    justifyContent: " space-between",
    alignItems: "center"
  },
});

function SearchComponent(props) {
  const { search, onChangeSelect, status_page, selectedDate,setSelectedDate } = props;
  const { filterCity, filterPrice } = search;
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box component="div" style={{width:status_page ? "65%":null}}>
        <Box className={classes.search}>
          <Select
            input={<BootstrapInput />}
            onChange={onChangeSelect}
            name="filterPrice"
            value={filterPrice}
          >
            {showPrice(price)}
          </Select>
          <Select
            onChange={onChangeSelect}
            name="filterCity"
            value={filterCity}
            input={<BootstrapInput />}
          >
            {showCity(cities)}
          </Select>
          {status_page ? (
            <Box>
              <DatePicker
                style={{ textAlign: "center" }}
                clearable
                inputVariant="outlined"
                disableToolbar={true}
                value={selectedDate}
                placeholder="dd/mm/yyyy"
                onChange={(date) => setSelectedDate(date)}
                format="dd/MM/yyyy"
                name="selectedDate"
                maxDate={new Date()}
                minDate="01/01/1970"
              />
            </Box>
          ) : null}
        </Box>
      </Box>
    </MuiPickersUtilsProvider>
  );
}

export default SearchComponent;
function showPrice(prices) {
  let rl = null;
  if (prices) {
    rl = prices.map((price, index) => {
      return (
        <StyledMenuItem value={price.value} key={index}>
          <Typography
            variant="subtitle1"
            align="center"
            color="secondary"
            style={{ width: "100%" }}
          >
            {price.name === "Vui lòng chọn giá" ? "GIÁ BÁN" : price.name}
          </Typography>
        </StyledMenuItem>
      );
    });
  }
  return rl;
}
function showCity(cities) {
  let rl = null;
  if (cities) {
    rl = cities.map((city, index) => {
      return (
        <StyledMenuItem value={city.value} key={index}>
          <Typography
            variant="subtitle1"
            align="center"
            color="secondary"
            style={{ width: "100%" }}
          >
            {" "}
            {city.label === "Vui lòng chọn thành phố" ? "KHU VỰC" : city.label}
          </Typography>
        </StyledMenuItem>
      );
    });
  }
  return rl;
}
