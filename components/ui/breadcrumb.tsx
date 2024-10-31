import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

// Определяем варианты стилей
const variants = {
  default: {
    list: "text-white",
    page: "text-white/60"
  },
  muted: {
    list: "text-textsmain",
    page: "text-textsmain/60"
  },
  solid: {
    list: "text-textsmain",
    page: "text-textsmain"
  }
} as const;

type VariantType = keyof typeof variants;

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  separator?: React.ReactNode;
  variant?: VariantType;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ variant = "default", ...props }, ref) => (
    <nav ref={ref} aria-label="breadcrumb" {...props} />
  )
);
Breadcrumb.displayName = "Breadcrumb"

interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {
  variant?: VariantType;
}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        // Здесь настраивается расстояние между элементами через gap
        "flex flex-wrap items-center gap-2 break-words text-[10px] md:text-[12px] md:gap-1",
        variants[variant].list,
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-4", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem"

interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
  variant?: VariantType;
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ asChild, className, variant = "default", ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        ref={ref}
        className={cn(
          // Удалили hover: и сделали подчеркивание постоянным
          "transition-colors underline",
          variants[variant].list,
          className
        )}
        {...props}
      />
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink"

interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {
  variant?: VariantType;
}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal", variants[variant].page, className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn(
      // Здесь настраивается размер и поворот разделителя
      "[&>svg]:size-3.5 [&>svg]:rotate-[160deg]",
      className
    )}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}