"use client";

import { Product } from "@/types";
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import EmptyState from "../components/EmptyState";
import CategoryFilter from "../components/CategoryFilter";
import PriceSort, { SortOption } from "../components/PriceSort";
import { EmptySearchIcon } from "../icons/EmptySearchIcon";

type ProductContainerProps = {
  products: Array<Product>;
};

export const ProductsContainer = (props: ProductContainerProps) => {
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("");
  const [products] = useState(() => props.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((p) => p.category)),
    ).sort();
    return uniqueCategories;
  }, [products]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((p) =>
      p.title.toLowerCase().includes(name.toLowerCase()),
    );

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort by price
    if (sortBy === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [name, selectedCategory, sortBy, products]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (value: string) => {
    setName(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
        <SearchBar value={name} onChange={handleSearchChange} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <PriceSort sortBy={sortBy} onSortChange={handleSortChange} />
      </div>

      {filteredProducts.length === 0 ? (
        <EmptyState
          title={name ? "No products found" : "No products available"}
          description={
            name
              ? `We couldn't find any products matching "${name}". Try adjusting your search.`
              : "There are no products available at the moment."
          }
          icon={name ? <EmptySearchIcon /> : undefined}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};
