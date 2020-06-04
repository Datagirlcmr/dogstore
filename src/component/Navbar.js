import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav row text-white">
    <Link to="/">
      <h1 className="col-md-6 text-white">Dogstore</h1>
    </Link>
    <Link to="/categories/">
      <h3 className="nav-items">Select a breed</h3>
    </Link>
    <Link to="/">
      <h3 className="nav-items">Categories</h3>
    </Link>
  </div>
);

export default Navbar;
