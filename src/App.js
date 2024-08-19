import "./App.css";
import "./Assets/css/main.css";
import storepic from "./Assets/media/Storefront1.png";
import menu from "./products";
import ProductItem from "./Components/ProductItem";
import ProductList from "./Components/ProductList";
function App() {
  return (
    <div className="container">
      <h1>Crumble Cookies</h1>
      <p>Where cookies maniacs gather</p>
      <img
        className="storeImage"
        src={storepic}
        alt="Crumble Cookies store image"
      />{" "}
      <ProductList />
    </div>
  );
}

export default App;
