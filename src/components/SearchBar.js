import React from "react";

function SearchBar({ keyword, onChange }) {
  return (
    <div>
      <label>
        Tìm theo tên:{" "}
        <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          value={keyword}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default SearchBar;
