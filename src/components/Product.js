import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ id, name, image, onClick }) => {
  return (
    <div onClick={onClick}>
    
        <div className="card">
          <figure>
            <img src={image} alt={name} />
            {/* <figcaption className="caption">{somedata}</figcaption> */}
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Product;
