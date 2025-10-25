interface ProductAvailabilityProps {
  stock: number;
  availabilityStatus: string;
}

export default function ProductAvailability({
  stock,
  availabilityStatus,
}: ProductAvailabilityProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-2 h-2 rounded-full ${
          stock > 0 ? "bg-green-500" : "bg-red-500"
        }`}
      />
      <span className="text-sm">
        {availabilityStatus} &bull; {stock} in stock
      </span>
    </div>
  );
}
