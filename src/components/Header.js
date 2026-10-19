import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="nav">
        <Link to="/">ProductStore</Link>
        <div>
          <Link to="/">Home</Link> {" | "}
          <Link to="/products">Products</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
