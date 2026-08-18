"use client";

import React from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Skeleton, Slider } from "../ui";

type SliderRangeProps = ComponentProps<typeof Slider> & {
  loading?: boolean;
  showLabels?: boolean;
};

const SliderRange = React.forwardRef<HTMLDivElement, SliderRangeProps>(
  (
    {
      className,
      min: rawMin = 0,
      max: rawMax = 100,
      step: rawStep = 1,
      value,
      onValueChange,
      loading = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const step = Number(rawStep) || 1;
    const min = Number(rawMin) || 0;
    const max = Number(rawMax) || min + step;

    const safeMin = Math.min(min, max);
    const safeMax = Math.max(min, max);

    if (loading) {
      return (
        <div className={cn("relative w-full", className)}>
          <Skeleton className="h-14 w-full rounded-full" />
        </div>
      );
    }

    const displayValue: readonly number[] = (() => {
      if (Array.isArray(value)) {
        return value.map((v) => {
          const num = Number(v);
          if (isNaN(num)) return safeMin;
          return Math.max(safeMin, Math.min(safeMax, num));
        });
      }
      if (typeof value === "number") {
        const num = Number(value);
        if (isNaN(num)) return [safeMin];
        return [Math.max(safeMin, Math.min(safeMax, num))];
      }
      return [safeMin, safeMax];
    })();

    return (
      <div ref={ref} className={cn("relative w-full", className)}>
        <Slider
          min={safeMin}
          max={safeMax}
          step={step}
          value={displayValue}
          onValueChange={onValueChange}
          className={className}
          disabled={disabled || safeMin === safeMax}
          {...props}
        />
      </div>
    );
  },
);

SliderRange.displayName = "SliderRange";

export { SliderRange };
