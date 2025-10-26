export const ProductsLoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Search Bar Skeleton */}
      <div className="mb-8">
        <div className="h-12 max-w-2xl bg-gray-200 rounded-lg" />
      </div>

      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4">
            <div className="aspect-square bg-gray-200 rounded-lg mb-4" />
            <div className="h-4 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-3" />
            <div className="h-6 w-20 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="mt-12 flex items-center justify-center gap-2">
        <div className="w-10 h-10 bg-gray-200 rounded-lg" />
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-10 h-10 bg-gray-200 rounded-lg" />
          ))}
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-lg" />
      </div>
    </div>
  );
};
