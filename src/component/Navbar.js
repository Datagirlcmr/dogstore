import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav row text-white">
    <Link to="/">
      <h1 className="col-md-6 text-white">Dogstore</h1>
    </Link>
  </div>
);

export default Navbar;
