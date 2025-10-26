"use client";

interface ErrorStateProps {
  title?: string;
  description?: string;
  error?: Error;
  reset?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  description = "We encountered an error while loading the content. Please try again.",
  error,
  reset,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <svg
        className="w-24 h-24 text-red-300 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-center max-w-md mb-6">{description}</p>

      {error && process.env.NODE_ENV === "development" && (
        <details className="mb-6 max-w-2xl w-full">
          <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-900">
            View error details
          </summary>
          <pre className="mt-2 text-xs bg-gray-100 p-4 rounded-lg overflow-auto">
            {error.message}
          </pre>
        </details>
      )}

      {reset && (
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Try again
        </button>
      )}
    </div>
  );
}
