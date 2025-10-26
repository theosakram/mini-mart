"use client";

export type SortOption = "" | "price-asc" | "price-desc";

interface PriceSortProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function PriceSort({ sortBy, onSortChange }: PriceSortProps) {
  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value as SortOption)}
      className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white min-w-[200px]"
    >
      <option value="">Sort by Price</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
  );
}
