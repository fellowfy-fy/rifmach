import { PoemCard } from "../PoemCard/PoemCard";

interface PoemCardExtendedProps {
  title: string;
  text: string;
}

export default function PoemCardExtended({ title, text }: PoemCardExtendedProps) {
  return (
    <div>
      <PoemCard title={title} text={text} />
    </div>
  );
}