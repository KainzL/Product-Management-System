import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h3>404 - Không tìm thấy trang</h3>
      <p>Trang bạn đang tìm kiếm không tồn tại</p>
      <button onClick={() => navigate("/")}>Về trang chủ</button>
    </div>
  );
}

export default NotFound;
