import React from "react";
import "../Assets/css/main.css";
import menu from "../products";

const ProductItem = () => {
  return (
    <div className="menuSection">
      <div className="itemsContainer">
        <img src={menu[0].image} alt="Chocolate chips cookies image"></img>
        <p>{menu[0].name}</p>
        <p>{menu[0].price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
