import React from "react";
import { Link } from "react-router-dom"; 
import './Navbar.css'
function Navbar() {
  return (
    <header>
      <span>
        <Link to="/">logo</Link> 
      </span>

      <nav>
        <ul>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/login">
              <button>login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
