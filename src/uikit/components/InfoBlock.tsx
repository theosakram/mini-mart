interface InfoBlockProps {
  title: string;
  content: string;
}

export default function InfoBlock({ title, content }: InfoBlockProps) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-900 mb-1">{title}</p>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
}
