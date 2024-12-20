"use client"
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
VariantProps<typeof toggleVariants> & {
  ctaVariant?: 'primary' | 'secondary' | 'tertiary' | 'filter';
};

const ToggleGroupContext = React.createContext<{
  variant?: VariantProps<typeof toggleVariants>["variant"];
  size?: VariantProps<typeof toggleVariants>["size"];
  ctaVariant?: 'primary' | 'secondary' | 'tertiary' | 'filter';
}>({
  size: "default",
  variant: "default",
  ctaVariant: "primary"
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant, size, children, ctaVariant = 'primary', ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size, ctaVariant }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)
  
  const getVariantStyle = () => {
    switch (context.ctaVariant) {
      case 'secondary':
        return 'data-[state=on]:bg-[#70B8FE] data-[state=on]:text-white hover:bg-[#70B8FE]/90 hover:text-[#E2F2FF]/90 bg-transparent border border-[#70B8FE] text-[#70B8FE] font-light';
      case 'tertiary':
        return 'bg-[#E9EDF4] text-textsmain hover:bg-white data-[state=on]:bg-white data-[state=on]:text-main h-[30px] font-light';
      case 'filter':
        return 'bg-[#F5F7FA] text-textsmain hover:text-white hover:bg-[#70B8FE]/90 data-[state=on]:bg-main data-[state=on]:text-white h-[30px] font-light';
      default: // primary
        return 'border border-white/70 bg-transparent hover:bg-white hover:text-black text-white/70 h-[25px] data-[state=on]:bg-white data-[state=on]:text-main font-light';
    }
  };

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        "rounded-full px-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        getVariantStyle(),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }