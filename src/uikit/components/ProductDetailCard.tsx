import { Product } from "@/types";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import ProductAvailability from "./ProductAvailability";
import ProductTags from "./ProductTags";
import ProductDetails from "./ProductDetails";
import ProductPolicies from "./ProductPolicies";
import ReviewList from "./ReviewList";

interface ProductDetailCardProps {
  product: Product;
}

export default function ProductDetailCard({ product }: ProductDetailCardProps) {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <ProductImage
          images={product.images}
          thumbnail={product.thumbnail}
          title={product.title}
        />

        <div className="space-y-6">
          <ProductInfo
            brand={product.brand}
            title={product.title}
            description={product.description}
          />

          <ProductRating
            rating={product.rating}
            reviewCount={product.reviews.length}
          />

          <ProductPrice
            price={product.price}
            discountPercentage={product.discountPercentage}
          />

          <ProductAvailability
            stock={product.stock}
            availabilityStatus={product.availabilityStatus}
          />

          <ProductTags tags={product.tags} />

          <ProductDetails
            category={product.category}
            sku={product.sku}
            dimensions={product.dimensions}
            weight={product.weight}
            minimumOrderQuantity={product.minimumOrderQuantity}
          />

          <ProductPolicies
            shippingInformation={product.shippingInformation}
            warrantyInformation={product.warrantyInformation}
            returnPolicy={product.returnPolicy}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewList reviews={product.reviews} />
    </div>
  );
}
