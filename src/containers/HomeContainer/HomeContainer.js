import React from "react";
import { useHistory } from "react-router-dom";
import { HomeComponent } from "../../pages/PageComponents";
import {banner1,banner2, cash, mb, mcredit, mirae, shinhang, vay_tra_gop, vp,luong,
  vay_don_dien_nuoc,vay_so_ho_khau,vay_o_to,credit_card, frame_17, frame_19, frame_18, frame_20, banner1_mobi, banner2_mobi} from '../../common/image/image';
import { toast } from "react-toastify";
const BANNER_HOME=[
  {
    clickChangeForm:'/dangkivay',
    img_desktop:banner1,
    img_mobi:banner1_mobi
  },
  {
    clickChangeForm:'/sangiaodich',
    img_desktop:banner2,
    img_mobi:banner2_mobi
  }
]
const Title_Section ={
      title_service:"CÁC DỊCH VỤ",
      title_deal:"SÀN GIAO DỊCH",
      title_why_loans:"TẠI SAO NÊN ĐĂNG KÝ VAY VỚI",
      title_item:"CREDITONE",
      title_partner:"ĐỐI TÁC CỦA",
      title_loans_fast:"BẠN MUỐN VAY NHANH",
      title_help:"BẠN CẦN HỔ TRỢ ?",
  }
const loans_fast=[
  {
    title:"Vay tiền mặt",
    caption:"Bạn chỉ cần cung cấp một số thông tin cơ bản, không cần chứng minh thu nhập.",
    title_button:"TM GỬI 8279",
  },
  {
    title:"Mở thẻ tín dụng",
    caption:"Bạn chỉ cần cung cấp một số thông tin cơ bản, không cần chứng minh thu nhập.",
    title_button:"CC GỬI 8279",
  }
]
const text_session_1 = "Chúng tôi có hàng nghìn đơn xin vay mỗi ngày !";

export const text_paper =[
  {
    number_text:frame_17,
    txt_btn:frame_19,
    clickChangeForm:'/sangiaodich',
  },
  {
    number_text:frame_18,
    txt_btn:frame_20,
    clickChangeForm:'/dangkivay',
  }
]



function createDataTable(name, phone, sex, address, price) {
  return { name, phone, sex, address, price };
}
const rowsMain = [
  createDataTable( "Anh VƯỢNG", "097****323", "Nam", "TP HCM", "50.000"),
  createDataTable("Anh KHÁNH", "032****809", "Nam", "TP HCM", "50.000"),
  createDataTable("Anh Duy", "097****870", "Nam", "TP HN", "50.000"),
  createDataTable("Anh MINH", "091****817", "Nam", "TP HCM", "25.000"),
  createDataTable("Anh TÂM", "091****616", "Nam", "TP HN", "25.000"),
  createDataTable("Anh PHÚ", "093****369", "Nam", "TP HCM", "25.000"),
  createDataTable("Chị NGỌC", "034****388", "Nữ", "TP HCM", "20.000"),
  createDataTable("Anh CHƯƠNG", "052****552", "Nam", "TP HCM", "20.000"),
  createDataTable("Chị THỦY", "098****871", "Nữ", "Tp HNội", "20.000"),
  createDataTable("Anh THẮNG", "091****879", "Nam", "Tp HNội", "20.000"),
  createDataTable("Anh KIỀU", "032****118", "Nam", "Nam Định", "20.000"),
  createDataTable("Chị THU", "035****586", "Nữ", "Tiền Giang", "20.000"),
  createDataTable("Anh TRÍ", "090****926", "Nam", "Tiền Giang", "20.000"),
  createDataTable("Anh MINH", "094****422", "Nam", "Cà Mau", "15.000"),
  createDataTable("Chị TUYỀN", "033****934", "Nữ", "Bình Dương", "15.000"),
  createDataTable("Anh THÀNH", "091****112", "Nam", " Nghệ An", "15.000"),
  createDataTable("Anh VÀNG", "096****817", "Nam", "Bình Dương", "15.000"),
  createDataTable("Anh THU", "097****586", "Nam", "TP HCM", "15.000"),
  createDataTable("Chị MẾN", "093****044", "Nữ", "Kiên Giang", "15.000"),
  createDataTable("Anh TÀI", "094****178", "Nam", "Nam Định", "15.000"),
];
const item_section_CREDITONE=[
  {
    title:"Thủ Tục Đơn Giản",
    text:"Bạn chỉ cần cung cấp một số thông tin cơ bản, không cần chứng minh thu nhập."
  },
  {
    title:"Duyệt Hồ Sơ Siêu Tốc",
    text:"Công nghệ xét duyệt hồ sơ hoàn toàn tự động của CreditOne chỉ mất vài phút để xác minh."
  },
  {
    title:"Lãi Suất Ưu Đãi",
    text:"Bạn có cơ hội nhận được các gói vay với lãi suất ưu đãi đặc biệt đăng ký tại CreditOne."
  },
  {
    title:"Hạn Mức Vay Cao",
    text:"Vay đến 200 triệu từ các Ngân Hàng và công ty Tài Chính uy tín hàng đầu hiện nay."
  },
  {
    title:"Hỗ Trợ 24/7",
    text:"Bạn có cơ hội nhận được các gói vay với lãi suất ưu đãi đặc biệt đăng ký tại CreditOne."
  },
  {
    title:"Bảo Mật Thông Tin",
    text:"CreditOne cam kết bảo vệ thông tin của bạn bằng các công nghệ và quy trình tiên tiến nhất."
  }
]
const slideService=[
  {
    img:vay_tra_gop,
    caption:"Vay trả góp"
  },
  {
    img:luong,
    caption:"Vay tín chấp theo lương"
  },
  {
    img:vay_don_dien_nuoc,
    caption:"Vay tín chấp theo hóa đơn điện nước"
  },
  {
    img:vay_so_ho_khau,
    caption:"Vay thế chấp bất động sản"
  },
  {
    img:vay_o_to,
    caption:"Vay thế chấp ôtô"
  },
  {
    img:credit_card,
    caption:"Thẻ tín dụng"
  }

]
const slide_partner = [vp,shinhang,mirae,mb,mcredit,cash,]
function Home() {
  const history = useHistory();
  const btnChangeForm=(event)=>{
    history.push(event);
  }

  const changeToLogin = () => {
    history.push("/dangnhap");
      toast.success("Xin mời đăng nhập");
  };

  return <HomeComponent
  btnChangeForm={btnChangeForm}
  BANNER_HOME={BANNER_HOME}
  text_session_1={text_session_1}
  text_paper={text_paper}
  rowsMain={rowsMain}
  changeToLogin={changeToLogin}
  section_CREDITONE={item_section_CREDITONE}
  Title_Section={Title_Section}
  loans_fast={loans_fast}
  slide_partner={slide_partner}
  slideService={slideService}

  />;
}

export default Home;
