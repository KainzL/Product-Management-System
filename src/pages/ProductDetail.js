import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { products } from "../data/products";

function placeholderImage(name) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" font-family="sans-serif" font-size="24" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">${name}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const product = products.find((item) => item.id === Number(id));

  const backTo = `/products${location.state?.fromSearch || ""}`;

  if (!product) {
    return (
      <div>
        <Link to={backTo}>&larr; Quay lại danh sách</Link>
        <h3>Không tìm thấy sản phẩm có ID: {id}</h3>
      </div>
    );
  }

  return (
    <div>
      <Link to={backTo}>&larr; Quay lại danh sách</Link>

      <div className="detail">
        <img
          className="detail-image"
          src={product.image || placeholderImage(product.name)}
          alt={product.name}
        />
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p>ID: {product.id}</p>
          <p>Danh mục: {product.category}</p>
          <p>Giá: {product.price.toLocaleString("vi-VN")} đ</p>
          <p>Mô tả: {product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
