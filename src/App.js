import "./App.css";
import "./Assets/css/main.css";
import storepic from "./Assets/media/Storefront1.png";
import menu from "./products";
function App() {
  const displayMenu = menu.map((item) => {
    return (
      <div className="menuSection">
        <div className="itemsContainer">
          <img src={item.image} alt="Chocolate chips cookies image"></img>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Crumble Cookies</h1>
      <p>Where cookies maniacs gather</p>
      <img
        className="storeImage"
        src={storepic}
        alt="Crumble Cookies store image"
      />{" "}
      <div className="menuSection">{displayMenu}</div>
    </div>
  );
}

export default App;
