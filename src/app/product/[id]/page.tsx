import { Suspense } from "react";
import BackButton from "@/uikit/components/BackButton";
import ProductDetailCard from "@/uikit/components/ProductDetailCard";
import ProductDetailLoadingSkeleton from "@/uikit/components/ProductDetailLoadingSkeleton";
import { getProductById } from "@/lib/api";

async function ProductDetail({ id }: { id: string }) {
  const product = await getProductById(id);

  return <ProductDetailCard product={product} />;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="mb-4">
        <BackButton />
      </div>

      <Suspense fallback={<ProductDetailLoadingSkeleton />}>
        <ProductDetail id={id} />
      </Suspense>
    </div>
  );
}
