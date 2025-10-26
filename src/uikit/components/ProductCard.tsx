import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block rounded-2xl shadow hover:shadow-lg transition p-4 bg-white dark:bg-neutral-900 hover:scale-105 text-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="mt-3 font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-300">{product.category}</p>
      <p className="text-lg font-bold mt-1">${product.price}</p>
    </Link>
  );
}
