import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const steps = React.useMemo(() => {
    const max = props.max || 100;
    const min = props.min || 0;
    const step = props.step || 1;
    const count = Math.floor((max - min) / step);
    // Вычисляем позиции между значениями слайдер потом сделать да
    return Array.from({ length: count - 1 }, (_, i) => {
      const stepPosition = ((i + 1.5) / count) * 100;
      return stepPosition;
    });
  }, [props.max, props.min, props.step]);

  return (
    <div className="relative w-[400px]">
      <div className="absolute w-full top-1/2 -translate-y-1/2 pointer-events-none">
        {steps.map((position) => (
          <div
            key={position}
            className="absolute w-[1px] h-[10px] bg-slidercalc -translate-y-1/2"
            style={{ left: `${position}%` }}
          />
        ))}
      </div>
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-[2px] w-full grow overflow-hidden rounded-full bg-slidercalc">
          <SliderPrimitive.Range className="absolute h-full bg-slidercalc" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-8 w-8 rounded-full bg-contain bg-center bg-no-repeat border-none focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <img
            src="/icons/slidercalc.svg"
            alt="slider thumb"
            className="w-full h-full"
          />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }