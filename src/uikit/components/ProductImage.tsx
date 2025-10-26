import Image from "next/image";

interface ProductImageProps {
  images: string[];
  thumbnail: string;
  title: string;
}

export default function ProductImage({ images, thumbnail, title }: ProductImageProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[0] || thumbnail}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative aspect-square bg-gray-100 rounded overflow-hidden"
            >
              <Image
                src={image}
                alt={`${title} ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
