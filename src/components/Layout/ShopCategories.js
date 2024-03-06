import React from "react";
import { useDispatch } from "react-redux";

import classes from "./ShopCategories.module.css";
import { categoryActions } from "../../store/categoryRedux";

const ShopCategories = () => {
  const dispatch = useDispatch();

  const getCategoryValue = (data) => {
    dispatch(categoryActions.UPDATE_CATEGORY(data.toLowerCase()));
  };
  return (
    <div className={classes.shopCategories}>
      <h4>CATEGORIES</h4>
      <div className={classes.shopCategoriesList}>
        <h6 style={{ background: "#333", color: "#fff", opacity: 1 }}>APPLE</h6>
        <div onClick={(data) => getCategoryValue(data.target.textContent)}>
          All
        </div>
        <h6>IPHONE & MAC</h6>
        <div onClick={(data) => getCategoryValue(data.target.innerHTML)}>
          Iphone
        </div>
        <div onClick={(data) => getCategoryValue(data.target.innerHTML)}>
          Ipad
        </div>
        <div onClick={(data) => getCategoryValue(data.target.innerHTML)}>
          Macbook
        </div>
        <h6>WIRELESS</h6>
        <div onClick={(data) => getCategoryValue(data.target.innerHTML)}>
          Airpod
        </div>
        <div onClick={(data) => getCategoryValue(data.target.innerHTML)}>
          Watch
        </div>
        <h6>OTHER</h6>
        <div onClick={(data) => getCategoryValue(data.target.innerHTML)}>
          Mouse
        </div>
        <div onClick={(data) => getCategoryValue(data.target.innerHTML)}>
          Keyboard
        </div>
        <div onClick={(data) => getCategoryValue(data.target.innerHTML)}>
          Other
        </div>
      </div>
    </div>
  );
};
export default ShopCategories;
