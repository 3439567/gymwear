import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Footer from "./components/Footer/Footer";
import WomenTopsPage from "./pages/WomenTops";
import WomenLeggings from "./pages/WomenLeggings";
import SummerJackets from "./pages/SummerJackets";
import MensTees from "./pages/MensTees";

import Accessories from "./pages/Accessories";
import ProductDetails from "./pages/ProductDetails";


export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ]);
  }
};

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <Router>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/women-tops" element={<WomenTopsPage />} />
          <Route path="/women-leggings" element={<WomenLeggings />}/>
          <Route path="/summer-jackets" element={<SummerJackets />}/>
          <Route path="/mens-tees" element={<MensTees />} />
          <Route path="/accessories" element={<Accessories />} />
            <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;