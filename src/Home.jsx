import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // State for products list
  const [products, setProducts] = useState([]);

  // Function to fetch products list (use Firebase or Local storage)
  // ...

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;