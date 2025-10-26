interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) return null;

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-light mb-6">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-6 last:border-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">{review.reviewerName}</p>
                <p className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{review.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
