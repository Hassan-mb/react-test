import React from "react";
import "../Assets/css/main.css";
import storepic from "../Assets/media/Storefront1.png";
import Counter from "./VisitorsButton";

const Header = () => {
  return (
    <div className="container">
      <Counter />
      <h1>Crumble Cookies</h1>
      <p>Where cookies maniacs gather</p>
      <img
        className="storeImage"
        src={storepic}
        alt="Crumble Cookies store image"
      />{" "}
    </div>
  );
};

export default Header;
