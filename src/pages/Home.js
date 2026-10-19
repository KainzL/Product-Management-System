import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to ProductStore</h1>
      <h2 >Manage and explore products for your needs</h2>
      <button onClick={() => navigate("/products")}>Xem sản phẩm</button>
    </div>
  );
}

export default Home;
