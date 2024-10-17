interface GridProps {
  items: JSX.Element[];
}

export default function Grid({ items }: GridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="border p-4 rounded-md shadow">
          {item}
        </div>
      ))}
    </div>
  );
}
