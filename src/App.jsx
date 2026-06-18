import { useState } from "react";
import "./App.css";
import { useFetch } from "./Hooks/useFetch";

function App() {
  let [url, setUrl] = useState("https://dummyjson.com/products");
  let { products } = useFetch(url);
  return (
    <div>
      <h1>Custom hook</h1>
      <div className="buttons">
        <button onClick={() => setUrl("https://dummyjson.com/products")}>All</button>
        <button onClick={() => setUrl("https://dummyjson.com/products/category/beauty")}>Beauty</button>
        <button onClick={() => setUrl("https://dummyjson.com/products/category/fragrances")}>Fragrances</button>
      </div>
      <div className="card">
        {products.map((item) => {
          return (
            <div className="cards__card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h2>{item.title.slice(0, 15)}...</h2>
              <p>{item.description.slice(0, 100)}...</p>
              <p>${item.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
