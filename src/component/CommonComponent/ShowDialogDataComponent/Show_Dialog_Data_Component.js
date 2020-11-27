import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, Container, Box, makeStyles } from "@material-ui/core";
import NumberFormat from "react-number-format";
const useStyles = makeStyles(theme=>({
    border: {
        borderBottom: "0.5px solid #828282",
        paddingTop: "1rem"
    },
    text: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 300,
        letterSpacing: 0.5,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            textAlign:"center",
            margin:0
          },

    }, title: {
        fontSize: 18,
        
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            margin:0
          },
    },
    h2: {
        fontWeight: 500,
        color: "#828282",
        letterSpacing: -0.5,
        textTransform: "uppercase"
    },
    button: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "center"
          },
    },
    button_item: {
        width: 240,
        margin: 12,
       
    },
    Tablet:{
        display:"block",
        [theme.breakpoints.only('xs')]: {
            display:"none"
          },
    },
    Mobi:{
        display:"none",
        [theme.breakpoints.only('xs')]: {
            display:"table",
          },
    }
}))
function Show_Dialog_Data_Component(props) {
    const classes=useStyles();
    const {dialog,showInfo_Lead,close_form_dialog,
      buy_Lead,status_page
    }=props;

    const {  id_lead,
        khach_hang,
        so_dien_thoai,
        dia_chi,
        cmnd,
        gioi_tinh,
        tuoi,
        thu_nhap,
        tong_no_phai_tra,
        san_pham_vay,
        so_tien_muon_vay,
        thoi_han_vay,
        da_vay_o_to_chuc_khac_hay_chua,
        gia_ban,
        nghe_nghiep,}= showInfo_Lead
    return (

                <Dialog
                fullWidth={true}
                maxWidth="md"
                scroll="paper"
                open={dialog}
                onClose={()=>close_form_dialog()}
              >
                <Container>
                  <DialogContent className={classes.Tablet}>
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="flex-start"
                    >
                      <Grid item xs={12}>
                        <Grid
                          container
                          direction="row"
                          justify="space-around"
                          alignItems="flex-start"
                        >
                          <Grid item xs={12}>
                            <DialogTitle align="center" className={classes.h2}>
                              Thông tin chi tiết Khách hàng
                            </DialogTitle>
                          </Grid>
                          <Grid item xs={12} md={6} className="p-3">
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Khách Hàng
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {khach_hang}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Địa Chỉ
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {dia_chi}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Số CMND
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {cmnd}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Tuổi
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {tuoi}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Tổng Nợ
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {tong_no_phai_tra}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Đã Vay Chưa
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {da_vay_o_to_chuc_khac_hay_chua}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Giá Bán
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  <NumberFormat
                                    value={gia_ban}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />{" "}
                                  Vnđ
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} md={6} className="p-3">
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Số Điện Thoại
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {so_dien_thoai}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Nghề Nghiệp
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {nghe_nghiep}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Giới Tính
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {gioi_tinh}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Thu Nhập
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {thu_nhap}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Số Tiền Muốn Vay
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {so_tien_muon_vay}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Sản Phẩm Vay
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {san_pham_vay}
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.border}>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.title}>
                                  Thời Hạn Vay
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box component="p" className={classes.text}>
                                  {thoi_han_vay} Tháng
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Container>
                <DialogContent className={classes.Mobi}>
                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start"
                  >
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="flex-start"
                      >
                        <Grid item xs={12}>
                          <DialogTitle align="center" className={classes.h2}>
                            Thông tin chi tiết Khách hàng
                          </DialogTitle>
                        </Grid>
                        <Grid item xs={12} md={6} className="p-3">
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Khách Hàng
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {khach_hang}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Số Điện Thoại
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {so_dien_thoai}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Địa Chỉ
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {dia_chi}
                              </Box>
                            </Grid>
                          </Grid>
        
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Nghề Nghiệp
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {nghe_nghiep}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Số CMND
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {cmnd}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Giới Tính
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {gioi_tinh}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Tuổi
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {tuoi}
                              </Box>
                            </Grid>
                          </Grid>
        
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Thu Nhập
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {thu_nhap}
                              </Box>
                            </Grid>
                          </Grid>
        
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Số Tiền Muốn Vay
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {so_tien_muon_vay}
                              </Box>
                            </Grid>
                          </Grid>
        
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Tổng Nợ
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {tong_no_phai_tra}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Đã Vay Chưa
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {da_vay_o_to_chuc_khac_hay_chua}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Sản Phẩm Vay
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {san_pham_vay}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Thời Hạn Vay
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                {thoi_han_vay} Tháng
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.border}>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.title}>
                                Giá Bán
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box component="p" className={classes.text}>
                                <NumberFormat
                                  value={gia_ban}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />{" "}
                                Vnđ
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Container className={classes.button}>
                  {status_page ?null:
                    <Box>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button_item}
                        onClick={() => buy_Lead(id_lead)}
                      >
                        Mua
                      </Button>
                    </Box> 
}
                    <Box>
                      <Button
                       onClick={()=>close_form_dialog()}
                        className={classes.button_item}
                       variant="outlined"
                       color="secondary"
                      >
                        Quay lại
                      </Button>
                    </Box>
                  </Container>
                </DialogActions>
              </Dialog>
    )
}

export default Show_Dialog_Data_Component;
