import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const PRODUCTS = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Cheese", category: "Dairy" },
  { id: 4, name: "Apple", category: "Fruit" }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  // Add to cart handler
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Filter products
  const filteredProducts =
    category === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <Cart cart={cart} />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        data-testid="category-filter"
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruit">Fruit</option>
      </select>

      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}


