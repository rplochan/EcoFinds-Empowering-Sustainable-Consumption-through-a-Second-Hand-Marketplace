import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const ProductFeed = () => {
  const products = [
    { id: 1, title: 'Product 1', price: 100 },
    { id: 2, title: 'Product 2', price: 150 },
  ];
  
  return (
    <div>
      <Header title="Product Feed" />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => (
          <ProductCard key={p.id} title={p.title} price={p.price} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
