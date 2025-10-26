export default function ProductDetailLoadingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section Skeleton */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-200 rounded-lg" />
            {/* Thumbnail Gallery */}
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-20 h-20 bg-gray-200 rounded" />
              ))}
            </div>
          </div>

          {/* Product Info Section Skeleton */}
          <div className="space-y-6">
            {/* Brand and Title */}
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-8 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
            </div>

            {/* Rating */}
            <div className="h-6 w-32 bg-gray-200 rounded" />

            {/* Price */}
            <div className="space-y-2">
              <div className="h-8 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>

            {/* Availability */}
            <div className="h-6 w-40 bg-gray-200 rounded" />

            {/* Tags */}
            <div className="flex gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-6 w-20 bg-gray-200 rounded-full" />
              ))}
            </div>

            {/* Product Details */}
            <div className="space-y-3 border-t pt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-40 bg-gray-200 rounded" />
                </div>
              ))}
            </div>

            {/* Policies */}
            <div className="space-y-3 border-t pt-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-1">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section Skeleton */}
        <div className="mt-12 space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-5 w-32 bg-gray-200 rounded" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
