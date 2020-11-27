const cities = [
  {
    "value": "All",
    "label": "Vui lòng chọn thành phố"
  }, {
    "value": "Hồ Chí Minh",
    "label": "Thành phố Hồ Chí Minh",
  },
  {
    "value": "Hà Nội",
    "label": "Thành phố Hà Nội",
  },
  {
    "value": "Cần Thơ",
    "label": "Thành phố Cần Thơ",
  },

  {
    "value": "Hải Phòng",
    "label": "Thành phố Hải Phòng",
  },

  {
    "value": "Đà Nẵng",
    "label": "Thành phố Đà Nẵng",
  },
  {
    "value": "An Giang",
    "label": "Tỉnh An Giang",
  },
  {
    "value": "Bà Rịa - Vũng Tàu",
    "label": "Tỉnh Bà Rịa - Vũng Tàu",
  },
  {
    "value": "Bình Dương",
    "label": "Tỉnh Bình Dương",
  },
  {
    "value": "Bình Phước",
    "label": "Tỉnh Bình Phước",
  },
  {
    "value": "Bình Thuận",
    "label": "Tỉnh Bình Thuận",
  },
  {
    "value": "Bình Định",
    "label": "Tỉnh Bình Định",
  },
  {
    "value": "Bạc Liêu",
    "label": "Tỉnh Bạc Liêu",
  },
  {
    "value": "Bắc Giang",
    "label": "Tỉnh Bắc Giang",
  },
  {
    "value": "Bắc Kạn",
    "label": "Tỉnh Bắc Kạn",
  },
  {
    "value": "Bắc Ninh",
    "label": "Tỉnh Bắc Ninh",
  },
  {
    "value": "Bến Tre",
    "label": "Tỉnh Bến Tre",
  },
  {
    "value": "Cao Bằng",
    "label": "Tỉnh Cao Bằng",
  },
  {
    "value": "Cà Mau",
    "label": "Tỉnh Cà Mau",
  },
  {
    "value": "Gia Lai",
    "label": "Tỉnh Gia Lai",
  },
  {
    "value": "Hoà Bình",
    "label": "Tỉnh Hoà Bình",
  },
  {
    "value": "Hà Giang",
    "label": "Tỉnh Hà Giang",
  },
  {
    "value": "Hà Nam",
    "label": "Tỉnh Hà Nam",
  },
  {
    "value": "Hà Tĩnh",
    "label": "Tỉnh Hà Tĩnh",
  },
  {
    "value": "Hưng Yên",
    "label": "Tỉnh Hưng Yên",
  },
  {
    "value": "Hải Dương",
    "label": "Tỉnh Hải Dương",
  },
  {
    "value": "Hậu Giang",
    "label": "Tỉnh Hậu Giang",
  },
  {
    "value": "Khánh Hòa",
    "label": "Tỉnh Khánh Hòa",
  },
  {
    "value": "Kiên Giang",
    "label": "Tỉnh Kiên Giang",
  },
  {
    "value": "Kon Tum",
    "label": "Tỉnh Kon Tum",
  },
  {
    "value": "Lai Châu",
    "label": "Tỉnh Lai Châu",
  },
  {
    "value": "Long An",
    "label": "Tỉnh Long An",
  },
  {
    "value": "Lào Cai",
    "label": "Tỉnh Lào Cai",
  },
  {
    "value": "Lâm Đồng",
    "label": "Tỉnh Lâm Đồng",
  },
  {
    "value": "Lạng Sơn",
    "label": "Tỉnh Lạng Sơn",
  },
  {
    "value": "Nam Định",
    "label": "Tỉnh Nam Định",
  },
  {
    "value": "Nghệ An",
    "label": "Tỉnh Nghệ An",
  },
  {
    "value": "Ninh Bình",
    "label": "Tỉnh Ninh Bình",
  },
  {
    "value": "Ninh Thuận",
    "label": "Tỉnh Ninh Thuận",
  },
  {
    "value": "Phú Thọ",
    "label": "Tỉnh Phú Thọ",
  },
  {
    "value": "Phú Yên",
    "label": "Tỉnh Phú Yên",
  },
  {
    "value": "Quảng Bình",
    "label": "Tỉnh Quảng Bình",
  },
  {
    "value": "Quảng Nam",
    "label": "Tỉnh Quảng Nam",
  },
  {
    "value": "Quảng Ngãi",
    "label": "Tỉnh Quảng Ngãi",
  },
  {
    "value": "Quảng Ninh",
    "label": "Tỉnh Quảng Ninh",
  },
  {
    "value": "Quảng Trị",
    "label": "Tỉnh Quảng Trị",
  },
  {
    "value": "Sóc Trăng",
    "label": "Tỉnh Sóc Trăng",
  },
  {
    "value": "Sơn La",
    "label": "Tỉnh Sơn La",
  },
  {
    "value": "Thanh Hóa",
    "label": "Tỉnh Thanh Hóa",
  },
  {
    "value": "Thái Bình",
    "label": "Tỉnh Thái Bình",
  },
  {
    "value": "Thái Nguyên",
    "label": "Tỉnh Thái Nguyên",
  },
  {
    "value": "Thừa Thiên Huế",
    "label": "Tỉnh Thừa Thiên Huế",
  },
  {
    "value": "Tiền Giang",
    "label": "Tỉnh Tiền Giang",
  },
  {
    "value": "Trà Vinh",
    "label": "Tỉnh Trà Vinh",
  },
  {
    "value": "Tuyên Quang",
    "label": "Tỉnh Tuyên Quang",
  },
  {
    "value": "Tây Ninh",
    "label": "Tỉnh Tây Ninh",
  },
  {
    "value": "Vĩnh Long",
    "label": "Tỉnh Vĩnh Long",
  },
  {
    "value": "Vĩnh Phúc",
    "label": "Tỉnh Vĩnh Phúc",
  },
  {
    "value": "Yên Bái",
    "label": "Tỉnh Yên Bái",
  },
  {
    "value": "Điện Biên",
    "label": "Tỉnh Điện Biên",
  },
  {
    "value": "Đắk Lắk",
    "label": "Tỉnh Đắk Lắk",
  },
  {
    "value": " Đắk Nông",
    "label": "Tỉnh Đắk Nông",
  },
  {
    "value": "Đồng Nai",
    "label": "Tỉnh Đồng Nai",
  },
  {
    "value": "Đồng Tháp",
    "label": "Tỉnh Đồng Tháp",
  }
];
export default cities;