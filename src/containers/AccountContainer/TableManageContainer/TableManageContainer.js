import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TableManageComponent } from "../../../pages/PageComponents";

function TableManageContainer() {
  const   [selectedDate,setSelectedDate] =useState(null);
  const state = useSelector(state => state);
  const {danhsachdalogin,count_total_quantity}= state
  const list_account=danhsachdalogin.data.data;

  const filterDateMain=(date)=>{
    if(String(date)!=="Invalid Date"){
      if(date===null){
        setSelectedDate(date) 
      }else{
        setSelectedDate(new Date(date).toISOString().slice(0,10))
      }
    }
  }
  return <TableManageComponent selectedDate={selectedDate}
  setSelectedDate={filterDateMain}
  list_account={list_account}
  count_total_quantity={count_total_quantity}
  />;
}
export default TableManageContainer;
