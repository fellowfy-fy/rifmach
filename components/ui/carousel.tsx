"use client";
import React from "react";

interface CarouselProps {
  items: JSX.Element[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <div className="flex overflow-x-auto gap-4 max-w-[1168px] h-[450px] overflow-visible items-end">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
