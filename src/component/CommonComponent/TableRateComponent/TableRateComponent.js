import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { ALL_COLOR } from '../../../common/Theme/color';
import StarRateIcon from "@material-ui/icons/StarRate";
const StyledTableCell = withStyles((theme) => ({
    head: {
      color: ALL_COLOR.black,
      border:0,
    },
    body: {
      color: ALL_COLOR.black,
      border:0,
    },
  }))(TableCell);
function TableRateComponent({table_rate}) {
    const rate = (number) => {
        let result = [];
        if (number > -1) {
          for (let i = 0; i < number; i++) {
            result.push(<StarRateIcon key={i} style={{ color: "#EE4623" }} />);
          }
        }
        return result;
      };
    return (
        <TableContainer style={{ width: "100%", height: "100%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <Typography variant="subtitle1">Giá</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="subtitle1">
                  Đánh giá
                </Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table_rate.map((row) => (
              <TableRow key={row.star}>
                <StyledTableCell align="center">
                  <Typography variant="subtitle2">
                    {row.price}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {rate(row.star)}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default TableRateComponent
