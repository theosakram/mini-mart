"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-light text-lg cursor-pointer group"
    >
      <span className="transition-transform group-hover:-translate-x-1">←</span>
      <span>Back</span>
    </button>
  );
}
