import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        header: "text-h3 regular text-headers",
        footer: "text-h4 regular text-[#8F8F9C] hover:underline px-0 mx-0",
        destructive:
          "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        callback:
          "border border-main bg-white rounded-[22.5px] text-[#529ACA] font-normal tracking-[0.2em] h-[36px]",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        main: "bg-gradient-to-t from-[#FBBF06] to-[#FBE203] w-full md:w-auto h-[45px] md:h-[41px] shadow-lg shadow-[#E9A502]/60 text-textsmain active:bg-[#FBE203]",
        secondary:
          "bg-gradient-to-t from-[#70C6FD] to-[#23B4E4] w-full md:w-[300px] h-[45px] md:h-[41px] shadow-lg shadow-[#70C6FD]/60 text-white active:bg-[#FBE203]",
        expand: "text-h4 text-main hover:underline ",
        image: "p-0 bg-transparent",
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
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children} {/* Render the children inside the button */}
      </Comp>
    )
  }
)
Button.displayName = "Button"


export { Button, buttonVariants }
