import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";
import { useHistory } from 'react-router-dom';
import { getProduct } from "../../actions/productAction";
import { useDispatch } from "react-redux";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const searchSubmitHandler = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (keyword.trim()) {
      dispatch(getProduct(keyword))
      // history.push(`/product/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
