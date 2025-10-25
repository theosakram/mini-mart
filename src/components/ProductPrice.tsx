interface ProductPriceProps {
  price: number;
  discountPercentage: number;
}

export default function ProductPrice({ price, discountPercentage }: ProductPriceProps) {
  const discountedPrice = price * (1 - discountPercentage / 100);

  return (
    <div className="flex items-baseline gap-3">
      <span className="text-3xl font-light">
        ${discountedPrice.toFixed(2)}
      </span>
      {discountPercentage > 0 && (
        <>
          <span className="text-lg text-gray-400 line-through">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm font-medium text-green-600">
            {discountPercentage}% off
          </span>
        </>
      )}
    </div>
  );
}
