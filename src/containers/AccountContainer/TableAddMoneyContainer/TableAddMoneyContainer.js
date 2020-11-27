import React from 'react'
import { phone_1_Logo_Momo, phone_2_Logo_Momo, phone_3_Logo_Momo, phone_4_Logo_Momo, phone_5_Logo_Momo } from '../../../common/image/image';
import { TableAddMoneyComponent } from '../../../pages/PageComponents';

const text_label=[
    {
        id:1,
        title:"Ngân hàng",
        caption:"Thương mại cổ phần (TMCP) Quốc Tế Việt Nam - VIB chi nhánh Tân Định",
    },
    {
        id:2,
        title:"Số tài khoản",
        caption:"629704060072750",
    },
    {
        id:3,
        title:"Nội dung chuyển khoản",
        caption:"NAP HAYVAY [Số Điện Thoại]",
    },
    {
        id:4,
        title:"Chủ tài khoản",
        caption:"CÔNG TY TNHH HAY VAY",
    }
]
const tutorialSteps = [
    {
      imgPath: phone_1_Logo_Momo,
    },
    {
      imgPath: phone_2_Logo_Momo,
    },
    {
      imgPath: phone_3_Logo_Momo,
    },
    {
  
      imgPath: phone_4_Logo_Momo,
    },
    {
      imgPath: phone_5_Logo_Momo,
    },
  ];
function TableAddMoneyContainer() {
    return (
        <TableAddMoneyComponent text_label={text_label}
        tutorialSteps={tutorialSteps}
        />
    )
}

export default TableAddMoneyContainer;
