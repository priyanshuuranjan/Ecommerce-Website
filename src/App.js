// Import

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/single/SingleProduct";
import Cart from "./pages/cart/Cart";

function App() {
  return (
   <Router>
    <Routes>
      <Route    exact  path="/" element={<Home />}/>
      <Route    exact  path="/about" element={<About />}/>
      <Route    exact  path="/contact" element={<Contact />}/>
      <Route    exact  path="/products" element={<Products />}/>
      <Route    exact  path="/cart" element={<Cart />}/>
      <Route    exact  path="/singleproduct/:id" element={< SingleProduct />}/>

    </Routes>
   </Router>
  );
}

export default App;
