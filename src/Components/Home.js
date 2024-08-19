import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <ProductList />
    </div>
  );
};
