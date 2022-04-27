import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBreweryDetailed } from "../../redux/actions/breweryAction";
import { Box, Typography, makeStyles, Divider, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    paddingTop: 68,
    width: "100%",

    background: "#FFFFFF",
  },
  image: {
    height: 175,
    width: 250,
    borderRadius: 5,
  },
  subContainer: {
    display: "flex",
    padding: "45px 0px 45px 77px",
  },
  detailText: {
    paddingLeft: "55px",
  },
  restName: {
    fontSize: 32,
    fontWeight: 600,
    color: "#d70f64",
  },
  restDetail: {
    fontSize: 17,
    paddingTop: 10,
    color: "#212121",
  },
  offer: {
    paddingLeft: 240,
  },
  componentGoBack: {
    padding: "80px 140px",
    width: "80%",
    background: "#fff",
  },
  imageGoBack: {
    width: "50%",
  },
  containerGoBack: {
    textAlign: "center",
    paddingTop: 10,
  },
  btnGoBack: {
    paddingRight: "50",
  },
});

function DetailView({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const breweryDetail = useSelector((state) => state.getRestroDetail.brewery);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreweryDetailed(match.params.id));
  }, [dispatch]);
  const addItem = () => {
    history.push("/");
  };
  if (breweryDetail === undefined) {
    return <Typography>Loading...</Typography>;
  } else
    return (
      <>
        <Box className={classes.container}>
          <Box className={classes.subContainer}>
            <Box>
              <img src={"https://c8.alamy.com/comp/T65WBJ/chilled-glass-of-light-beer-in-ice-cubes-file-contains-clipping-path-T65WBJ.jpg"} className={classes.image} />
            </Box>
            <Box className={classes.detailText}>
              <Typography className={classes.restName}>
                {breweryDetail ? breweryDetail.name : "loading...."}
              </Typography>
              <Typography className={classes.restDetail}>
                {breweryDetail ? breweryDetail.country : "loading...."}
              </Typography>
              <Typography className={classes.restDetail}>
                {breweryDetail ? breweryDetail.city : "loading...."}
              </Typography>

              <Typography style={{ color: "#d70f64", paddingTop: 10 }} >
                {breweryDetail ? breweryDetail.website_url : "loading...."}
              </Typography>
            </Box>
          </Box>
          <Divider></Divider>
        </Box>
        <Box className={classes.componentGoBack}>
          <Box className={classes.containerGoBack}>
            <Box>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.btnGoBack}
                onClick={() => addItem()}
              >
                Go Back ?
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    );
}

export default DetailView;
