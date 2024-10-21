interface GridProps {
  items: JSX.Element[];
  columns?: {
    base?: number;
    md?: number;
    lg?: number;
  };
  gap?: {
    base?: string;
    md?: string;
    lg?: string;
  };
}

export default function Grid({ items, columns = { base: 1, md: 2, lg: 3}, gap = { base: "2", md: "4" } }: GridProps) {
  return (
    <div
      className={`
        grid 
        grid-cols-${columns.base} 
        md:grid-cols-${columns.md || columns.base} 
        lg:grid-cols-${columns.lg || columns.md || columns.base} 
        gap-${gap.base} 
        md:gap-${gap.md || gap.base} 
        lg:gap-${gap.lg || gap.md || gap.base}
      `}
    >
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
