import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ALL_COLOR } from "../../../common/Theme/color";
import { SearchContainers, TableShowDataContainer } from "../../../pages/PageContainers";
function TableManageComponent(props) {
  const [count_total,set_count_total]=useState(0);
  const [count_quantity,set_count_quantity]=useState(0);
  const Change_total_quantity=(count,quantity)=>{
    useEffect(()=>{
      if(count !==count_total){
        set_count_total(count);
        set_count_quantity(quantity)
      }
    },[count,quantity])
  }
  const { selectedDate, setSelectedDate, list_account} = props;
  const status_page = true;
 

  console.log(count_total)
  return (
    <Box>
      <Typography variant="h2" align="center" style={{ color: ALL_COLOR.blue }}>
        QUẢN LÝ ĐƠN VAY
      </Typography>
      <Box
        display="flex"
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
        mt={6}
      >
        <SearchContainers
          status_page={status_page}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Box>
          <Typography
            variant="h3"
            color="secondary"
            align="center"
            gutterBottom={true}
          >
            Tổng tiền
          </Typography>
          <Typography variant="body1" align="center">
           {count_total}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            color="secondary"
            align="center"
            gutterBottom={true}
          >
            Số lượng
          </Typography>
          <Typography variant="body1" align="center">
          {count_quantity}
          </Typography>
        </Box>
      </Box>
      <TableShowDataContainer
          list_account={list_account}
          status_page={status_page}
          selectedDate={selectedDate}
          change_total_quantity={Change_total_quantity}
      />
    </Box>
  );
}

export default TableManageComponent;
