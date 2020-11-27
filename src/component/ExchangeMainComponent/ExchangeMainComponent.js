import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { ALL_COLOR } from "../../common/Theme/color";
import {
  SearchContainers,
  TableRateContainer,
  TableShowDataContainer,
} from "../../pages/PageContainers";
import { text_paper } from "../../containers/HomeContainer/HomeContainer";
function ExchangeMainComponent(props) {
  const { list_account } = props;
  const status_page = false;
  return (
    <Box component="section" bgcolor={ALL_COLOR.gray_7} pt={6} pb={6}>
      <Typography variant="h2" color="textSecondary" align="center">
        SÀN GIAO DỊCH
      </Typography>
      <Box component={Container} mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ height: "100%" }}>
              <Box component={Container} pt={6} pb={6}>
                <Container>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    style={{ color: ALL_COLOR.black }}
                  >
                    Quý khách vui lòng chọn khu vực gần nơi sinh sống để thuận
                    tiện cho việc quản lý đơn vay.
                  </Typography>
                </Container>
                <Grid container>
                  {text_paper.map((items, index) => {
                    return (
                      <Grid item xs={6} key={index}>
                        <img
                          style={{ width: "100%" }}
                          src={items.number_text}
                          alt={`title_` + index}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
                <Box component={Container} mt={3}>
                  <SearchContainers status_page={status_page} />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3}>
              <TableRateContainer />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box component={Container}>
        <TableShowDataContainer
          list_account={list_account}
          status_page={status_page}
        />
      </Box>
    </Box>
  );
}

export default ExchangeMainComponent;
