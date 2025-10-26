"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-12 flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
      <button
        className="cursor-pointer px-3 sm:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={goToPrevious}
        aria-label="Previous page"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          // Show first page, last page, current page, and pages around current
          const showPage =
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1);

          // Show ellipsis
          const showEllipsisBefore =
            page === currentPage - 2 && currentPage > 3;
          const showEllipsisAfter =
            page === currentPage + 2 && currentPage < totalPages - 2;

          if (showEllipsisBefore || showEllipsisAfter) {
            return (
              <span key={page} className="px-2 sm:px-4 py-2 text-gray-400">
                ...
              </span>
            );
          }

          if (!showPage) return null;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`cursor-pointer px-3 sm:px-4 py-2 rounded-lg transition-colors min-w-10 ${
                page === currentPage
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 hover:bg-gray-50"
              }`}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className="cursor-pointer px-3 sm:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === totalPages}
        onClick={goToNext}
        aria-label="Next page"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
