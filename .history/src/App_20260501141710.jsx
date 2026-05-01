import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import { sampleProducts } from "./components/ProductList";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // FILTER PRODUCTS
  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <Cart cart={cart} />

      {/* CATEGORY FILTER */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        data-testid="category-filter"
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}


