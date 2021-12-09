import "./App.css";
import React from "react";
import Card from "./Components/Card";
let data = require("./data.json");

function App() {
  const [filter, setFilter] = React.useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = data.filter(item => 
    item.name.toUpperCase().includes(filter.toUpperCase()))

  return (
    <div className="App">
      <h1>Webshop</h1>
      <input
        type="text"
        placeholder="Search for products"
        value={filter}
        onChange={searchText.bind(this)}
      />
      <div id="cards-container">
        {dataSearch.length !== 0 ? dataSearch.map((data) => <Card data={data} key={data.id} />) : <h1 className="error">Sorry, no products found!</h1>}
      </div>
    </div>
  );
}

export default App;
