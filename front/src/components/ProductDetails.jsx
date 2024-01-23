// ProductDetails.js

import React from 'react';

const ProductDetails = ({ name, pic, description, price }) => {
  return (
    <div className="product-details">
      <img src={pic} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
