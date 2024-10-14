import React from "react";
import { cn } from "@/lib/utils";
import TitleContent from "@/lib/title-content";
import { getTitleStyles } from "@/lib/title-styles";

interface TitleProps {
  styleVariant: "main" | "secondary" | "dark" | "darkSecondary"; // стили
  contentVariant: "main" | "secondary" | "dark" | "darkSecondary"; // контент
  withDivider?: boolean;
}

export default function Title({
  styleVariant = "main", // default style
  contentVariant = "main", // default content
}: TitleProps) {
  const styles = getTitleStyles(styleVariant); // Get the styles from the external function
  const { text, subtitle } = TitleContent({ variant: contentVariant }); // Get the content based on contentVariant

  return (
    <div className="text-left items-left">
      {styles.heading === "h1" ? (
        <h1 className={cn("font-harmonia", styles.color)}>{text}</h1>
      ) : (
        <h2 className={cn("font-harmonia", styles.color)}>{text}</h2>
      )}
      <h3 className={cn("font-harmonia", styles.color)}>{subtitle}</h3>
    </div>
  );
}
