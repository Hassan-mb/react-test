import React from "react";
import "../Assets/css/main.css";
import menu from "../products";

const ProductItem = ({ cookieItem }) => {
  return (
    <div className="menuSection">
      <div className="itemsContainer">
        <img src={cookieItem.image} alt="Chocolate chips cookies image"></img>
        <p>{cookieItem.name}</p>
        <p>{cookieItem.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
