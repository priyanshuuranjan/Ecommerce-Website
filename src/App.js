// Import

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/single/SingleProduct";
import Error from "./pages/error/Error";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/about" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
