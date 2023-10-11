// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import Cardsdata from "./CardsData";

const ProductDetail = () => {
  const { id } = useParams();

  // Find the product with the matching ID
  const product = Cardsdata.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Address: {product.address}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetail;
