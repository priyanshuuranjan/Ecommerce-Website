// Import
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/single/SingleProduct";
import Error from "./pages/error/Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";


const App = () => {

  const theme = {
    color: {
      bg: "#000",
      heading: '#yourColorValue',
      text: '#yourColorValue',
      black: '#yourColorValue',
    },
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
          <Route exact path="*" element={<Error />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
