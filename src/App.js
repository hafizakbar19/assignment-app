import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Cart from './Cart';
import Product from './Product';
import { CartContext } from './CartContext';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  // State for cart
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart ({cart.length})
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </div>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
