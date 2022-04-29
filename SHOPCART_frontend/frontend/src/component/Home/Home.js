import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="shopchart" />


          <div className="banner">
            <div href="#" className="header__logo__content--logo">
              <span>SHOPCART</span>
              <span></span>
            </div>

            <div className="header__logo__content--content">
              <h1 className="header__logo__content--content__title">
                Welcome to ShopCart
              </h1>
              <p className="header__logo__content--content__para">
                FIND AMAZING PRODUCTS BELOW.
              </p>
              <a href="#container" className="scroll_btn">
                <button>
                  Scroll <CgMouse />
                </button>
              </a>
            </div>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
