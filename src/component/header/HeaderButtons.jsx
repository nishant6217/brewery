import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  wrapper: {
    margin: " 0 5% 0 auto",
    display: "flex",
    "& > *": {
      color: "#C60D5C",
      marginRight: "50px",
      alignItems: "center",
      textDecoration: "none",
    },
  },
});

function HeaderButtons(props) {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography>ABOUT</Typography>
      <Typography>CAREER</Typography>
    </Box>
  );
}

export default HeaderButtons;
