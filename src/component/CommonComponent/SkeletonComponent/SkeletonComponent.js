import { Box, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    skeleton:{
      width:"100%",
      height:"5rem"
    }
  });

function SkeletonComponent(props) {
    const classes = useStyles();
    const {number}= props;
    function renderSkeleton(numberProps){
      let rl =[];
      for(let i=0;i<numberProps;i++){
        i%2? rl.push(<Skeleton className={classes.skeleton} animation={false} key={i}/>):
        rl.push(<Skeleton className={classes.skeleton} animation="wave" key={i}/>)
      }
      return rl;
    }
  return (
    <Box className={classes.root}>
        {renderSkeleton(number)}
    </Box>
  );
}
export default SkeletonComponent;
