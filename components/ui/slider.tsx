// Slider.tsx
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
React.ElementRef<typeof SliderPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const steps = React.useMemo(() => {
    const positions = [];
    const totalWidth = 393;
    const standardGap = 33;
    const specialGap = 58;

    // Добавляем первые 9 делений
    for (let i = 0; i < 9; i++) {
      positions.push((i * standardGap / totalWidth) * 100);
    }
    
    // 10-е деление с увеличенным отступом
    positions.push(((9 * standardGap + specialGap) / totalWidth) * 100);
    
    // Последнее деление
    positions.push(100);
    
    return positions;
  }, []);

  return (
    <div className="relative max-w-[393px]">
      <div className="absolute w-full top-1/2 -translate-y-1/2 pointer-events-none">
        {steps.map((position, index) => (
          <div
            key={index}
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
        <SliderPrimitive.Thumb className="block h-8 w-8 rounded-full bg-contain bg-center bg-no-repeat border-none mx-auto focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <img
            src="/icons/slidercalc.svg"
            alt="slider thumb"
            className="w-full h-full"
          />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
