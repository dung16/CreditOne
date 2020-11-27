import axios from "./../common/axios";
export const call_getData_list_account = () => {
  let body = JSON.stringify({ gia_ban: null, dia_chi: null });
  let url = "https://exchange-api.creditone.vn/exchange/api/tim_kiem";
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, body, config);
};
export const getDataDidLogin = (id) => {
  let body = JSON.stringify({ id_lender: id, dia_chi: null });
  let url = "https://exchange-api.creditone.vn/exchange/api/quan_ly_don_vay";
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, body, config);
};
export const updateDataLead = (id_lead, id_lender) => {
  let body = JSON.stringify({ id_lead: id_lead, id_lender: id_lender });
  let url = "https://exchange-api.creditone.vn/exchange/api/mua_lead";
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, body, config);
};
export const sentInfoLoan = (data) => {
  let body = JSON.stringify(data);
  let url = "https://exchange-api.creditone.vn/exchange/api/save_info_borrower";
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, body, config);
};
export const callInfo = (id) => {
  let body = JSON.stringify({ id_lender: id });
  let url = "https://exchange-api.creditone.vn/exchange/api/thong_tin_chung";
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, body, config);
};
export const changePassWord = (id_lead, passOld, passNew) => {
  let url = "https://exchange-login.creditone.vn/api/user/change/password";
  let body = JSON.stringify({
    id_lender: id_lead,
    mat_khau_lender: passOld,
    mat_khau_lender_moi: passNew,
  });
  let config = {
    headers: {
      "Content-Type": "application/json",
      Cookie: "__cfduid=d09d68485349420c158f7f67a851c48291598435482",
    },
  };
  return axios.post(url, body, config);
};
export const actDangKI = (name, sdt, pass) => {
  let body = JSON.stringify({
    ho_va_ten_lender: name,
    so_dien_thoai_lender: sdt,
    mat_khau_lender: pass,
  });
  let url = "https://exchange-login.creditone.vn/api/user/add";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Cookie: "__cfduid=d09d68485349420c158f7f67a851c48291598435482",
    },
  };
  return axios.post(url, body, config);
};
//dang nhap
export const actLogin = (username, password) => {
  let body = JSON.stringify({
    so_dien_thoai_lender: username,
    mat_khau_lender: password,
  });
  let url = "https://exchange-login.creditone.vn/api/login";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Cookie: "__cfduid=d09d68485349420c158f7f67a851c48291598435482",
    },
  };
  return axios.post(url, body, config);
};
