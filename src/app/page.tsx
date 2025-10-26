import { Suspense } from "react";
import { getProducts } from "@/lib/api";
import { ProductsContainer } from "@/uikit/containers/ProductsContainer";
import { ProductsLoadingSkeleton } from "@/uikit/components/ProductsLoadingSkeleton";
import EmptyState from "@/uikit/components/EmptyState";

async function ProductList() {
  const { products } = await getProducts();

  if (products.length === 0) {
    return (
      <EmptyState
        title="No products available"
        description="We don't have any products in our catalog at the moment. Please check back later."
      />
    );
  }

  return <ProductsContainer products={products} />;
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Products</h1>

      <Suspense fallback={<ProductsLoadingSkeleton />}>
        <ProductList />
      </Suspense>
    </main>
  );
}
