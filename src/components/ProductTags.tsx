interface ProductTagsProps {
  tags: string[];
}

export default function ProductTags({ tags }: ProductTagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
