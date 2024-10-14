export const titleStyleVariants = {
  main: {
    color: "text-white",
    divider: "bg-white",
    heading: "h1",
    subtitle: "h3",
    headingMob: "32px",
    subtitleMob: "14px",
  },
  secondary: {
    color: "text-white",
    divider: "bg-white",
    heading: "h1",
    subtitle: "h3",
  },
  dark: {
    color: "text-headers",
    divider: "bg-main",
    heading: "h1",
    subtitle: "h3",
  },
  darkSecondary: {
    color: "text-headers",
    divider: "bg-main",
    heading: "h2",
    subtitle: "h3",
  },
};

export function getTitleStyles(variant: keyof typeof titleStyleVariants) {
  return titleStyleVariants[variant];
}
