"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ExpandableContentProps<T> {
  content: T;
  maxLength?: number;
  renderContent: (content: T, isExpanded: boolean) => React.ReactNode;
  className?: string;
}

export function ExpandableContent<T>({ 
  content, 
  maxLength = 220,
  renderContent,
  className = ""
}: ExpandableContentProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Проверяем, нужна ли кнопка "Развернуть"
  const needsExpansion = typeof content === 'string' && content.length > maxLength;

  return (
    <div className={className}>
      {renderContent(content, isExpanded)}
      
      {needsExpansion && (
        <div className="mt-4 flex justify-end">
          <Button
            variant="expand"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Свернуть" : "Развернуть"}
          </Button>
        </div>
      )}
    </div>
  );
}