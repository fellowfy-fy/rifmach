"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-medium ring-offset-white transition-colors hover:bg-neutral-100 hover:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-neutral-100 data-[state=on]:text-neutral-900 dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 dark:focus-visible:ring-neutral-300 dark:data-[state=on]:bg-neutral-800 dark:data-[state=on]:text-neutral-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-white bg-transparent hover:bg-neutral-100 hover:text-transparent text-white h-[25px]",
        tip_1: "bg-[#FFF0F0] border-[#EDD5D5] w-[80px] h-[48px] rounded-[5px]",
        tip_2: "bg-[#F0FAFF] border-[#CEDFE8] w-[80px] h-[48px] rounded-[5px]",
        tip_3: "bg-[#F1FEF8] border-[#D9EBE3] w-[80px] h-[48px] rounded-[5px]",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "sm",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
