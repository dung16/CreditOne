import React from "react";
import { Container, Grid, IconButton, Paper } from "@material-ui/core";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

function PaginationComponent(props) {
  const { state,changePagination,total,changePagination_Start_End,} = props;
  const {counter}=state;
  return (
    <Container style={{ maxWidth: 250, paddingTop: 20, paddingBottom: 20 }}>
      <Paper>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Paper elevation={3}>
            <IconButton color="secondary" disabled={counter-1===0} onClick={()=>{changePagination_Start_End('pre')}}>
              <FirstPageIcon />
            </IconButton>
          </Paper>
          <Paper elevation={3}>
            <IconButton color="secondary" disabled={counter-1===0} onClick={()=>changePagination(counter-1)}>
              <KeyboardArrowLeft />
            </IconButton>
          </Paper>
          <Paper elevation={3}>
            <IconButton color="secondary" disabled={total===counter} onClick={()=>changePagination(counter+1)}>
              <KeyboardArrowRight />
            </IconButton>
          </Paper>
          <Paper elevation={3} >
            <IconButton color="secondary"  disabled={total===counter} onClick={()=>{changePagination_Start_End('next')}}>
              <LastPageIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Paper>
    </Container>
  );
}

export default PaginationComponent;
