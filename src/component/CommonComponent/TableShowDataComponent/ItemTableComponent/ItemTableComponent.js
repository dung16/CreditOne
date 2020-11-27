import {
  Box,
  Button,
  makeStyles,
  TableCell,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { ALL_COLOR } from "../../../../common/Theme/color";
import { AiFillProfile } from "react-icons/ai";
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    color: ALL_COLOR.black,
  },
}))(TableCell);
const useStyles = makeStyles((theme) => ({
  fab: {
    background: "#f83e14",
    "&:hover": {
      background: "rgb(60, 179, .1)",
    },
  },
  hiddenTable: {
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
}));
function ItemTableComponent(props) {
  const { item, show_info_buy_lead, status_page } = props;
  const classes = useStyles();
  const open_and_sent_lead = (item) => {
    show_info_buy_lead(item);
  };

  return (
    <StyledTableRow>
      <StyledTableCell align="center" className="p-2">
        <Typography variant="subtitle2" style={{ fontWeight: 500 }}>
          {item.khach_hang}
        </Typography>

        <Box display={{ xs: "block", sm: "none" }}>
          <Typography variant="subtitle2">{item.gioi_tinh}</Typography>
        </Box>
      </StyledTableCell>
      <StyledTableCell
        align="center"
        className={classes.hiddenTable}
        style={{ color: "#f83e14" }}
      >
        <Typography variant="subtitle2">{item.so_dien_thoai}</Typography>
      </StyledTableCell>
      <StyledTableCell align="center" className={classes.hiddenTable}>
        <Typography variant="subtitle2">{item.gioi_tinh}</Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Typography variant="subtitle2" style={{ fontWeight: 500 }}>
          {item.dia_chi}
        </Typography>
        <Box display={{ xs: "block", sm: "none" }} style={{ color: "#EE4623" }}>
          <Typography variant="subtitle2">{item.so_dien_thoai}</Typography>
        </Box>
      </StyledTableCell>
      <StyledTableCell align="center" style={{ color: "#f83e14" }}>
        <NumberFormat
          value={item.gia_ban}
          displayType={"text"}
          thousandSeparator={true}
        />
        <Box display={{ xs: "block", sm: "none" }}>
          {status_page ? (
            <AiFillProfile  style={{fontSize:32,color:ALL_COLOR.secondary}} onClick={() => open_and_sent_lead(item)} />
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              style={{ width: "100%", borderRadius: 5 }}
              onClick={() => open_and_sent_lead(item)}
              size="small"
            >
              Mua
            </Button>
          )}
        </Box>
      </StyledTableCell>
      <StyledTableCell align="center" className={classes.hiddenTable}>
        {status_page ? (
          <AiFillProfile style={{fontSize:32,color:ALL_COLOR.secondary}} onClick={() => open_and_sent_lead(item)} />
        ) : (
          <Button
            variant="outlined"
            color="secondary"
            style={{ width: "100%", borderRadius: 10 }}
            onClick={() => open_and_sent_lead(item)}
          >
            Mua
          </Button>
        )}
      </StyledTableCell>
      {status_page ? (
        <StyledTableCell align="center">
          <Typography variant="subtitle1">
            <Moment format="DD/MM/YYYY">{item.ngay_mua}</Moment>
          </Typography>
        </StyledTableCell>
      ) : null}
    </StyledTableRow>
  );
}

export default ItemTableComponent;
