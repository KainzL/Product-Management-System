import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProductItem({ product }) {
  const location = useLocation();

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price.toLocaleString("vi-VN")} đ</td>
      <td>
        <Link
          to={`/products/${product.id}`}
          state={{ fromSearch: location.search }}
        >
          Chi tiết sản phẩm
        </Link>
      </td>
    </tr>
  );
}

export default ProductItem;
