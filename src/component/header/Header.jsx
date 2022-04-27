import React from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import { Link } from "react-router-dom";



// importing components 
import HeaderButtons from "./HeaderButtons";

const useStyles = makeStyles({
  header: {
    background: "#FFFFFF",
    height: 67,
  },
});

function Header(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <HeaderButtons />
      </Toolbar>
    </AppBar>

  );
}

export default Header;
