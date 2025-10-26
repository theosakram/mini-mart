# Mini Mart

## Setup Instructions

### Prerequisites

- Node.js 20.x or higher
- yarn package manager

### Installation

1. Clone the repository:
2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Architectural Decisions

### SSR + ISR for Product Data

The application uses a hybrid rendering strategy combining Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR):

- **SSR (Server-Side Rendering)**: The homepage and product detail pages are rendered on the server, ensuring SEO-friendly content and fast initial page loads with real data.
- **ISR (Incremental Static Regeneration)**: Product listings are cached and revalidated every 60 minutes (`next: { revalidate: 3600 }` in [api.ts:7](src/lib/api.ts#L7)), providing a balance between fresh data and optimal performance. This reduces API calls to the external service while keeping content reasonably up-to-date.

**Benefits:**

- SEO-optimized content for search engines
- Reduced server load and API requests through caching
- Fast initial page loads with pre-rendered content
- Automatic cache invalidation every hour to keep data fresh

### Client-Side Search, Filter, Sort, and Pagination

Once the product data is loaded on the server, all interactive features (search, category filtering, price sorting, and pagination) are handled client-side in the [ProductsContainer](src/uikit/containers/ProductsContainer.tsx) component:

- **Why Client-Side?**
  - Instant user feedback without server round-trips
  - Smoother user experience with no page reloads
  - Reduced server load for high-frequency user interactions
  - Better performance for filtering and sorting small-to-medium datasets

- **Implementation:**
  - Uses React hooks (`useState`, `useMemo`) for state management and memoization
  - Filters are applied in-memory after initial SSR data load
  - Pagination resets to page 1 when filters change for better UX
  - Smooth scroll to top on page changes

**Trade-off:** This approach works well for the current dataset size but would need server-side pagination for larger catalogs (10,000+ products).

### Component Architecture

The project follows a modular, atomic design pattern:

- **UIKit Components** (`src/uikit/components/`): Reusable, presentational components (ProductCard, SearchBar, Pagination, etc.)
- **Container Components** (`src/uikit/containers/`): Smart components that manage state and orchestrate child components
- **Type Safety**: TypeScript types defined in [src/types/index.ts](src/types/index.ts) ensure type safety across the application
- **Responsive Design**: Tailwind CSS for mobile-first, responsive layouts

### React Server Components

Next.js App Router with React Server Components is used for:

- Async data fetching at the component level ([page.tsx:7-19](src/app/page.tsx#L7-L19))
- Streaming UI with `Suspense` for loading states
- Reduced client-side JavaScript bundle size

## What I Would Add Next

### Short-term Improvements (1-2 days)

1. **Server-Side Pagination API**
   - Implement API endpoint for paginated product fetching
   - Add query parameters for page, limit, search, filters
   - Improves scalability for larger product catalogs

2. **URL Query Parameters for Filters**
   - Sync filter state (search, category, sort, page) with URL
   - Enables shareable filtered product links
   - Maintains filter state on browser back/forward navigation

3. **Enhanced Error Handling**
   - Better error boundaries with recovery options
   - Loading state indicators for slow connections

4. **Performance Optimizations**
   - Implement virtual scrolling for large product lists
   - Add image lazy loading and blur placeholders
   - Optimize bundle size with dynamic imports

### Medium-term Features (1 week)

5. **Product Search Enhancement**
   - Add debounced search to reduce re-renders
   - Implement fuzzy search for better matching
   - Add search suggestions/autocomplete

6. **Advanced Filtering**
   - Price range slider filter
   - Rating filter
   - Multi-select category filtering
   - Brand/tag filtering

7. **Testing & Quality**
    - Unit tests with Jest
    - Integration tests with Testing Library
    - E2E tests with Playwright/Cypress
    - Accessibility audits and improvements

## Tech Stack

- **Framework**: Next.js 16.0 (App Router)
- **UI**: React 19.2, Tailwind CSS 4.1
- **Language**: TypeScript 5
- **API**: DummyJSON (mock e-commerce API)

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage (product listing)
│   ├── product/[id]/      # Dynamic product detail pages
│   ├── layout.tsx         # Root layout
│   └── error.tsx          # Error boundary
├── lib/                   # Utilities and API functions
│   └── api.ts             # Product API calls
├── types/                 # TypeScript type definitions
│   └── index.ts           # Product and app types
└── uikit/                 # UI components library
    ├── components/        # Reusable UI components
    ├── containers/        # Container components with logic
    └── icons/             # SVG icon components
```
