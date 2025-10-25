import { Product } from "@/types";

const apiURL = "https://dummyjson.com";

export async function getProducts(
  limit = 20,
): Promise<{ products: Array<Product> }> {
  const res = await fetch(`${apiURL}/products?limit=${limit}`, {
    next: { revalidate: 60 * 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`${apiURL}/products/${id}`);
  return res.json();
}
