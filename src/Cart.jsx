import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  // Get cart context
  const { cart, setCart } = useContext(CartContext);

  // Function to calculate total quantity and amount
  const calculateTotal = () => {
    let totalQuantity = 0;
    let totalAmount = 0;
    cart.forEach((product) => {
      totalQuantity++;
      totalAmount += product.price;
    });
    return { totalQuantity, totalAmount };
  };

  // Calculate total quantity and amount
  const { totalQuantity, totalAmount } = calculateTotal();

  return (
    <div>
      <h1>Cart</h1>
      <p>
        Total Quantity: {totalQuantity} | Total Amount: ${totalAmount.toFixed(2)}
      </p>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>${product.price.toFixed(2)}</p>
            <button
              onClick={() => {
                // Remove product from cart
                const newCart = cart.filter((p) => p.id !== product.id);
                setCart(newCart);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;