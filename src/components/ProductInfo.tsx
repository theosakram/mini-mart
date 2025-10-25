interface ProductInfoProps {
  brand?: string;
  title: string;
  description: string;
}

export default function ProductInfo({ brand, title, description }: ProductInfoProps) {
  return (
    <div>
      {brand && <p className="text-sm text-gray-500 mb-1">{brand}</p>}
      <h1 className="text-3xl font-light mb-2">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
