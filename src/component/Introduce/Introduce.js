import { Box, Container, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component, Fragment } from 'react';
import { icon_1, icon_2, icon_3, icon_4, introduce } from '../../common/image/image';
import styles from './styles';
class Introduce extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <img src={introduce} alt="introduce" style={{width:"100%"}}/>
                <Container style={{paddingTop:"6rem",paddingBottom:"4rem"}}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        align="center"
                    >
                        <Box className="text-center pb-5">
                            <h2 style={{ textTransform: "uppercase" }}>Tại sao nên đăng ký vay tại <span style={{ color: "#EE4623" }}> CreditOne</span></h2>
                            <Box component="p" color="#828282" fontSize={{xs:16,md:20}}>Chúng tôi có đủ khả năng để đáp ứng tất cả nhu cầu của bạn khi tìm khoản vay cá nhân với các mục đích khác nhau.</Box></Box>
                        <Grid container spacing={3} style={{ paddingBottom: 20 }}>
                            <Grid item lg={3} md={3} sm={6} container
                                direction="column"
                                justify="flex-start"
                                alignItems="center"
                            >
                                <Paper elevation={3} className={classes.bgColor}>
                                    <div className={classes.box_img_credit}>
                                        <img className={classes.img} src={icon_1} alt="Sản Phẩm Vay Đa Dạng" />
                                    </div>

                                    <h3 className={classes.h3}>Sản Phẩm Vay Đa Dạng</h3>
                                    <p className={classes.p}>Với sự hỗ trợ đến từ hơn 20 Ngân Hàng và công ty Tài Chính hàng đầu Việt Nam.</p>
                                </Paper>

                            </Grid>
                            <Grid item md={3} sm={6} xs={12} container
                                direction="column"
                                justify="flex-start"
                                alignItems="center"
                            >
                                <Paper elevation={3} className={classes.bgColor}>
                                    <div className={classes.box_img_credit}>
                                        <img className={classes.img} src={icon_2} alt="Hỗ Trợ" /></div>
                                    <h3 className={classes.h3}>Hỗ Trợ</h3>
                                    <p className={classes.p}>Hỗ trợ khách hàng đăng ký 24/7.<br />
                                    </p>
                                </Paper>

                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={12} container
                                direction="column"
                                justify="flex-start"
                                alignItems="center" >
                                <Paper elevation={3} className={classes.bgColor}>
                                    <div className={classes.box_img_credit}>
                                        <img className={classes.img} src={icon_3} alt="Lãi Suất Ưu Đãi" /></div>
                                    <h3 className={classes.h3}>Lãi Suất Ưu Đãi</h3>
                                    <p className={classes.p}>Chính sách ưu đãi từ Ngân Hàng chỉ dành cho khách hàng đăng ký tại CreditOne.</p>
                                </Paper>

                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={12} container
                                direction="column"
                                justify="flex-start"
                                alignItems="center"
                            >
                                <Paper elevation={3} className={classes.bgColor}>
                                    <div className={classes.box_img_credit}><img className={classes.img} src={icon_4} alt="Bảo Mật Thông Tin" /></div>
                                    <h3 className={classes.h3}>Bảo Mật Thông Tin</h3>
                                    <p className={classes.p}>Khách hàng hoàn toàn yên tâm khi thông tin của bạn được bảo mật tối đa.</p>
                                </Paper>

                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Fragment >
        );
    }
}

export default withStyles(styles)(Introduce);