import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const { products } = await getProducts();

  if (products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
