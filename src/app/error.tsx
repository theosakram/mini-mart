"use client";

import ErrorState from "@/uikit/components/ErrorState";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <ErrorState
        title="Failed to load products"
        description="We encountered an error while loading the products. Please try again."
        error={error}
        reset={reset}
      />
    </main>
  );
}
