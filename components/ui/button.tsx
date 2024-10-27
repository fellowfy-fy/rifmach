import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        header: "text-h3 regular text-headers",
        footer: "text-h4 regular text-[#8F8F9C] px-0 mx-0 hover:text-main light",
        destructive:
          "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        callback:
          "border hover:bg-[#70C6FD] hover:text-white border-main bg-white rounded-[22.5px] text-[#529ACA] font-normal tracking-[0.2em] h-[36px] w-[202px] text-[12px] flex items-center justify-center",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        main: "relative bg-gradient-to-t from-[#FBBF06] to-[#FBE203] h-[34px] shadow-lg shadow-[#E9A502]/60 text-textsmain active:bg-[#FBE203] hover:bg-[#FBE203] hover:from-[#FBE203] hover:to-[#FBE203]",

        secondary:
           "relative bg-gradient-to-t from-[#70C6FD] to-[#23B4E4] h-[45px] md:h-[41px] shadow-lg shadow-[#70C6FD]/60 text-white after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[3px] after:bg-[#70C6FD] after:rounded-b-md hover:bg-[#81D1FF] hover:from-[#81D1FF] hover:to-[#81D1FF]",
        expand: "text-h4 text-main hover:underline",
        image: "p-0 bg-transparent",
        outline: "p-0",
        demo: "text-white text-[14px] text-center flex justify-center"
      },
      size: {
        default: "h-10 px-4 py-2",
        footer: "px-0 h-5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "p-0",
      },
    },
    defaultVariants: {
      variant: "header",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
