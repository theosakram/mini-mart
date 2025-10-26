interface DetailRowProps {
  label: string;
  value: string;
}

export default function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}
