import React from 'react';

const ProductCard = ({ title, price, image }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
    <img src={image || "/placeholder.png"} alt={title} style={{ width: '100%', height: '150px' }} />
    <h3>{title}</h3>
    <p>${price}</p>
  </div>
);

export default ProductCard;
