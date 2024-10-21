interface GridProps {
  items: JSX.Element[];
  columns?: {
    base?: string;
    md?: string;
    lg?: string;
  };
  gap?: {
    base?: string;
    md?: string;
    lg?: string;
  };
  isAuthors?: boolean;
}
/**
 * @class Удалить костыль isAuthors
 * @param param0
 * @returns
 */
export default function Grid({
  items,
  columns = { base: "1", md: "2", lg: "3" },
  gap = { base: "2", md: "4" },
  isAuthors,
}: GridProps) {
  return (
    <div
      className={`
        grid 
        grid-cols-${columns.base} 
        md:grid-cols-${columns.md} ${!isAuthors && "lg:grid-cols-3"}
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
