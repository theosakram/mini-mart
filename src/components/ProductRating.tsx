interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

export default function ProductRating({ rating, reviewCount }: ProductRatingProps) {
  const averageRating = rating.toFixed(1);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <span className="text-yellow-400">★</span>
        <span className="ml-1 font-medium">{averageRating}</span>
      </div>
      <span className="text-gray-400">•</span>
      <span className="text-sm text-gray-500">
        {reviewCount} reviews
      </span>
    </div>
  );
}
