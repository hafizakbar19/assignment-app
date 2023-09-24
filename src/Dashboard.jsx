import React, { useState } from 'react';

const Dashboard = () => {
  // State for input fields
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState('');

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    const validationErrors = {};
    if (!title) {
      validationErrors.title = 'Title is required';
    }
    if (!details) {
      validationErrors.details = 'Details are required';
    }
    if (!price) {
      validationErrors.price = 'Price is required';
    }
    if (!image) {
      validationErrors.image = 'Image is required';
    }
    if (!id) {
      validationErrors.id = 'ID is required';
    }

    // If there are validation errors, set the state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If there are no validation errors, create a new product object
    const newProduct = {
      title,
      details,
      price,
      image,
      id,
    };

    // Post the new product to the products list (use Firebase or Local storage)
    // ...

    // Clear the input fields
    setTitle('');
    setDetails('');
    setPrice('');
    setImage('');
    setId('');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Product Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="details">Product Details:</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          {errors.details && <p>{errors.details}</p>}
        </div>
        <div>
          <label htmlFor="price">Product Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <p>{errors.price}</p>}
        </div>
        <div>
          <label htmlFor="image">Product Image:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {errors.image && <p>{errors.image}</p>}
        </div>
        <div>
          <label htmlFor="id">Product ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {errors.id && <p>{errors.id}</p>}
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Dashboard;