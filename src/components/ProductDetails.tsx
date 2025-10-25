import DetailRow from "./DetailRow";

interface ProductDetailsProps {
  category: string;
  sku: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  minimumOrderQuantity: number;
}

export default function ProductDetails({
  category,
  sku,
  dimensions,
  weight,
  minimumOrderQuantity
}: ProductDetailsProps) {
  return (
    <div className="border-t pt-6 space-y-3">
      <DetailRow label="Category" value={category} />
      <DetailRow label="SKU" value={sku} />
      <DetailRow
        label="Dimensions"
        value={`${dimensions.width} cm | ${dimensions.height} cm | ${dimensions.depth} cm`}
      />
      <DetailRow label="Weight" value={`${weight} kg`} />
      <DetailRow
        label="Min. Order"
        value={`${minimumOrderQuantity} units`}
      />
    </div>
  );
}
