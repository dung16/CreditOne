import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { ALL_COLOR } from "../../../common/Theme/color";
import { SkeletonComponent } from "../../../pages/PageComponents";

import {
  PaginationContainer,
  ShowDialogDataContainer,
} from "../../../pages/PageContainers";
import ItemTableComponent from "./ItemTableComponent/ItemTableComponent";
const StyledTableCell = withStyles((theme) => ({
  head: {
    color: ALL_COLOR.black,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  body: {
    fontSize: 20,
    border: " 0.5px solid #BDBDBD",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
}))(TableCell);
const useStyles = makeStyles((theme) => ({
  hiddenTable: {
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
}));
function TableShowDataComponent(props) {
  const classes = useStyles();
  const {
    list_account,
    start,
    end,
    status_page,
    show_info_buy_lead,
    selectedDate,
    change_total_quantity
  } = props;
  let count_length = 0;
  const state = useSelector((state) => state.filterTable);
  function ShowData(list) {
    let rl = null;
    if (list && list.length > 0) {
      list = list.filter((data) => {
        if (state.price === "All") {
          return data;
        } else {
          return data.gia_ban === parseInt(state.price) ? data : "";
        }
      });
      list = list.filter((data) => {
        if (state.city === "All") {
          return data;
        } else {
          return data.dia_chi.indexOf(state.city) !== -1;
        }
      });
      if (selectedDate) {
        list = list.filter((data) => {
          return data.ngay_mua.indexOf(selectedDate) !== -1;
        });
      }
      count_length = list.length;
      rl = list.slice(start, end).map((item_list, index) => {
        return (
          <ItemTableComponent
            key={index}
            item={item_list}
            show_info_buy_lead={show_info_buy_lead}
            status_page={status_page}
          />
        );
      });
    }

    if (status_page) {
      let x = 0;
      for(let i=0;i<list.length;i++){
        x = x + list[i].gia_ban;
      }
      change_total_quantity(count_length,x);
    }
    return rl;
  }
  return (
    <Fragment>
      <TableContainer
        component={Paper}
        height={210}
        style={{ borderRadius: 20, marginTop: 30 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <Typography variant="subtitle1">Khách hàng</Typography>
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.hiddenTable}>
                <Typography variant="subtitle1">Số điện thoại</Typography>
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.hiddenTable}>
                <Typography variant="subtitle1">Giới tính</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="subtitle1"> Khu vực</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="subtitle1">Giá bán</Typography>
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.hiddenTable}>
                <Typography variant="subtitle1">
                  {status_page ? "Thông tin" : "Mua hàng"}
                </Typography>
              </StyledTableCell>
              {status_page ? (
                <StyledTableCell align="center">
                  <Typography variant="subtitle1">Ngày mua</Typography>
                </StyledTableCell>
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>{list_account ? ShowData(list_account) : null}</TableBody>
        </Table>
        {list_account && list_account.length > 0 ? null : (
          <SkeletonComponent number={10} />
        )}
      </TableContainer>
      {list_account && list_account.length > 0 ? (
        <PaginationContainer count_length={count_length} />
      ) : null}
      <ShowDialogDataContainer status_page={status_page} />
    </Fragment>
  );
}

export default TableShowDataComponent;
