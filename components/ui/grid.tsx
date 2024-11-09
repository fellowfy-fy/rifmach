interface GridProps {
  items: JSX.Element[];
  columns?: {
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };
  gap?: {
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };
  isAuthors?: boolean;
}

export default function Grid({
  items,
  columns = { base: "1", md: "2", lg: "3", xl: "4", '2xl': "4" },
  gap = { base: "2", md: "4", lg: "4", xl: "4", '2xl': "4" },
  isAuthors,
}: GridProps) {
  const getGridColsClass = () => {
    const baseClass = {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
    }[columns.base || "1"];

    const mdClass = {
      "1": "md:grid-cols-1",
      "2": "md:grid-cols-2",
      "3": "md:grid-cols-3",
      "4": "md:grid-cols-4",
    }[columns.md || columns.base || "1"];

    const lgClass = isAuthors ? "" : {
      "1": "lg:grid-cols-1",
      "2": "lg:grid-cols-2",
      "3": "lg:grid-cols-3",
      "4": "lg:grid-cols-4",
    }[columns.lg || columns.md || columns.base || "3"];

    const xlClass = {
      "1": "xl:grid-cols-1",
      "2": "xl:grid-cols-2",
      "3": "xl:grid-cols-3",
      "4": "xl:grid-cols-4",
    }[columns.xl || columns.lg || columns.md || columns.base || "4"];

    const xxlClass = {
      "1": "2xl:grid-cols-1",
      "2": "2xl:grid-cols-2",
      "3": "2xl:grid-cols-3",
      "4": "2xl:grid-cols-4",
    }[columns["2xl"] || columns.xl || columns.lg || columns.md || columns.base || "4"];

    return `${baseClass} ${mdClass} ${lgClass} ${xlClass} ${xxlClass}`;
  };

  const getGapClass = () => {
    const baseGap = `gap-${gap.base}`;
    const mdGap = gap.md ? `md:gap-${gap.md}` : '';
    const lgGap = gap.lg ? `lg:gap-${gap.lg}` : '';
    const xlGap = gap.xl ? `xl:gap-${gap.xl}` : '';
    const xxlGap = gap["2xl"] ? `2xl:gap-${gap["2xl"]}` : '';

    return `${baseGap} ${mdGap} ${lgGap} ${xlGap} ${xxlGap}`;
  };

  return (
    <div className={`grid ${getGridColsClass()} ${getGapClass()}`}>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}