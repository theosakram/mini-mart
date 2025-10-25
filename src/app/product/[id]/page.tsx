import BackButton from "@/components/BackButton";
import ProductDetailCard from "@/components/ProductDetailCard";
import { getProductById } from "@/lib/api";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-4">
        <BackButton />
      </div>
      <ProductDetailCard product={product} />
    </div>
  );
}
