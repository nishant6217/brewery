import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, makeStyles, Typography, Divider, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles({
  component: {
    background: "#f9ffe5",
  },
  image: {
    height: 200,
    borderRadius: 4,
  },
  hungry: {
    padding: "15px 30px",
  },
  hungryText: {
    fontSize: 30,
    fontFamily: "sans-serif",
    color: "#d70f64",
  },
  subtext: {
    fontFamily: "museo-sans , sans-serif",
    fontWeight: 300,
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  inputField: {
    background: "#F5F8FA",
    display: "flex",
    marginBottom: "10px"

  },
  mainText: {
    fontSize: 30,
    fontFamily: "sans-serif",
    color: "#d70f64",
  },
  inputHeader: {
    background: "#F5F8FA",
    display: "flex"
  },
  btnGoBack: {
    paddingRight: "50",
  },
});
function Slide({ brewery,setSearchParam, handleMoreDataReq }) {
  const [toBeSearched, setToBeSearched] = React.useState("");
  const handleChange = (event) => {
    setTimeout(() => { setToBeSearched(event.target.value) }, 3000)
  }
  setTimeout(()=>setSearchParam(toBeSearched),1000)
  const classes = useStyles();
  return (
    <>
      <Box className={classes.component}>
        <Box className={classes.hungry}>
          <Typography className={classes.hungryText}>Brewery ?</Typography>
          <Typography className={classes.subtext}>
            All Solutions at One Place..!!
          </Typography>
        </Box>
        <Box className={classes.inputHeader}>
          <div style={{ marginLeft: "auto", marginRight: "auto",}}>
            <Typography className={classes.mainText}>Searching for Brewery ?</Typography>
          </div>

        </Box>
        <Box className={classes.inputField}>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <TextField
              id="outlined-textarea"
              label="You Can Search Here"
              placeholder="Placeholder"
              color="warning"
              variant="standard"
              multiline
              onChange={handleChange}
            />
          </div>
          
          <div style={{marginRight:"auto"}}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.btnGoBack}
            onClick={handleMoreDataReq}
           
          >
            Load More
          </Button>
          </div>
        </Box>
        
        <Divider></Divider>
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          showDots={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          className={classes.caro}
          axis="vertical"
        >
          {brewery && brewery.map((brewery) => (
            <Link to={`brewery-details/${brewery.id}`} style={{ textDecoration: "none" }}>
              <Box textAlign="center" style={{ paddingTop: 20 }}>
                <img src={"https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/26/2a/0f/262a0faf-33ae-ccca-6478-79f3d9dc0535/source/256x256bb.jpg"} className={classes.image} />
                <Typography
                  className={classes.text}
                  style={{ fontWeight: 600, color: "#212121" }}
                >
                  {brewery.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Carousel>


      </Box></>
  );
}

export default Slide;
