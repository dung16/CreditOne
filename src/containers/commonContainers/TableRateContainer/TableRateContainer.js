import React from 'react';
import { TableRateComponent } from '../../../pages/PageComponents';
function createData(price, star) {
    return { price, star };
  }
const table_rate = [
    createData("50.000", 5),
    createData("25.000", 4),
    createData("20.000", 3),
    createData("15.000", 2),
  ];
function TableRateContainer() {
    return (
      <TableRateComponent table_rate={table_rate}/>
    )
}

export default TableRateContainer
