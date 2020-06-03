import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <h1>Dogstore</h1>
    <Link to="/">
      <h3 className="nav-items">Home</h3>
    </Link>
    <Link to="/categories">
      <h3 className="nav-items">Categories</h3>
    </Link>
  </div>
);

export default Navbar;
