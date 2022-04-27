import React from "react";
import Carousel from "react-material-ui-carousel";
import { banData } from "../../constants/data";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "100%",
  },
});

function Banner(props) {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={true}
      cycleNavigation={true}
    >
      {banData.map((image) => (
        <img src={image} className={classes.image} />
      ))}
    </Carousel>
  );
}

export default Banner;
