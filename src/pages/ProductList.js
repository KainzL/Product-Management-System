import React from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductItem from "../components/ProductItem";
import Pagination from "../components/Pagination";

const pageSize = 3;

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "none";

  const categories = [...new Set(products.map((product) => product.category))];

  const filterProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()) &&
      (category === "all" || product.category === category),
  );

  if (sort === "price-asc") {
    filterProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === "price-desc") {
    filterProducts.sort((a, b) => b.price - a.price);
  }

  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const totalPages = Math.max(1, Math.ceil(filterProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const displayProducts = filterProducts.slice(startIndex, startIndex + pageSize);

  function updateParams(changes) {
    const nextParams = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) => {
      if (value === "" || value === "none" || value === "all" || value === null) {
        nextParams.delete(key);
      } else {
        nextParams.set(key, String(value));
      }
    });
    setSearchParams(nextParams);
  }
  function goToPage(newPage) {
    updateParams({ page: newPage });
  }

  function handleKeywordChange(event) {
    updateParams({ keyword: event.target.value, page: 1 });
  }
  function handleCategoryChange(event) {
    updateParams({ category: event.target.value, page: 1 });
  }
  function handleSortChange(event) {
    updateParams({ sort: event.target.value, page: 1 });
  }

  return (
    <div>
      <h3>Danh sách sản phẩm</h3>

      <div className="toolbar">
        <SearchBar keyword={keyword} onChange={handleKeywordChange} />
        <div className="filters">
          <CategoryFilter
            categories={categories}
            category={category}
            onChange={handleCategoryChange}
          />
          <div>
            <label>
              Sắp xếp theo giá:{" "}
              <select value={sort} onChange={handleSortChange}>
                <option value="none">Mặc định</option>
                <option value="price-asc">Thấp đến cao</option>
                <option value="price-desc">Cao đến thấp</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="toolbar">
        <p>
          Tổng: {filterProducts.length} | Trang: {totalPages}
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts.length === 0 ? (
            <tr>
              <td colSpan={5}>Không có sản phẩm nào.</td>
            </tr>
          ) : (
            displayProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
