import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  // Get product ID from URL params
  const { id } = useParams();

  // State for product
  const [product, setProduct] = useState(null);

  // Function to fetch product by ID (use Firebase or Local storage)
  // ...

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.details}</p>
      <p>${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;