import React from "react";

function CategoryFilter({ categories, category, onChange }) {
  return (
    <div>
      <label>
        Danh mục:{" "}
        <select value={category} onChange={onChange}>
          <option value="all">Tất cả</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default CategoryFilter;
