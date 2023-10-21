// Import
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
// import SingleProduct from "./pages/single/SingleProduct";
import Error from "./pages/error/Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Footer from "./pages/footer/Footer";
import Header from "./components/Header";
import Fertilizer from "./cardData/Chemicals/Fertilizer";
import ProductDetail from "./components/ProductDetail";
import Seed from "./cardData/Seeds/Seed";
import Equipment from "./cardData/Equipment/Equipment";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/*" element={<Error />} />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/fertilizer" element={<Fertilizer />} />
        <Route exact path="/seed" element={<Seed />} />
        <Route exact path="/equipment" element={<Equipment/>} />
        <Route exact  path='/cart/:id'  element={<ProductDetail />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
