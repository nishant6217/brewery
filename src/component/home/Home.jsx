import React from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import { useDispatch, useSelector } from "react-redux";
import { getBrewery as listBrewery } from "../../redux/actions/breweryAction";

function Home(props) {
  const [defaultSearchParams, setDefaultSearchParams] = React.useState();
  const [customCall, setCustomCall] = React.useState(false);
  const [stop, setStop] = React.useState(false);
  const [perPage, setPerPage] = React.useState(5);
  const [loadMore, setLoadMore] = React.useState(false);
  const [stopLoadMore, setStopLoadMore] = React.useState(false);
  const brewery = useSelector((state) => state.getBrewery.brewery);
  const dispatch = useDispatch();
  const setSearchParam = (value) => {
    setDefaultSearchParams(value);
    setCustomCall(true);
  }
  const handleMoreDataReq = () => {
    setPerPage(perPage + 5)
    setLoadMore(true)
    setStopLoadMore(false)
  }
  if (loadMore && !stopLoadMore) {
    dispatch(listBrewery(defaultSearchParams, perPage));
    setStopLoadMore(true)
  }
  if (customCall && defaultSearchParams.length !== 0 && !stop) {
    dispatch(listBrewery(defaultSearchParams, perPage));
    setStop(true)
  }
  return (
    <div>
      <Banner />
      <Slide brewery={brewery} setSearchParam={setSearchParam} handleMoreDataReq={handleMoreDataReq} />
    </div>
  );
}

export default Home;
