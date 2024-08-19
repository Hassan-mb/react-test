import React from "react";
import ProductItem from "./ProductItem";
import "../Assets/css/main.css";
import menu from "../products";

const ProductList = () => {
  const displayList = menu.map((item) => {
    return <ProductItem />;
  });
  return <div className="menuSection">{displayList}</div>;
};

export default ProductList;
