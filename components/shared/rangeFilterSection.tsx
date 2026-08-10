import React from "react";
import { SliderRange } from ".";
import { Input } from "../ui";
import { cn } from "@/lib/utils";

interface RangeValues {
  from: number;
  to: number;
}

interface Limits {
  min: number;
  max: number;
}

interface Props {
  title: string;
  values: RangeValues;
  limits: Limits | null;
  loading?: boolean;
  step?: number;
  className?: string;
  onValueChange: (values: RangeValues) => void;
}

export const RangeFilterSection: React.FC<Props> = ({
  title,
  values,
  limits,
  loading = false,
  step = 1,
  className,
  onValueChange,
}) => {
  const getValidValue = (val: number, isMin: boolean) => {
    if (!limits) return val;
    if (isMin) return Math.max(val, limits.min);
    return val <= limits.min ? limits.max : Math.min(val, limits.max);
  };

  const handleInputChange = (field: "from" | "to", value: string) => {
    onValueChange({ ...values, [field]: Number(value) });
  };

  const handleSliderChange = (sliderValue: number | readonly number[]) => {
    if (!Array.isArray(sliderValue)) return;

    const [from, to] = sliderValue as [number, number];
    onValueChange({ from, to });
  };

  return (
    <div className={cn("my-2 border-y border-y-neutral-100 py-4", className)}>
      <p className="font-bold mb-1">{title}</p>

      <div className="flex gap-2 mb-2">
        <Input
          type="number"
          placeholder={String(limits?.min ?? 0)}
          min={limits?.min ?? 0}
          max={limits?.max ?? 0}
          value={String(values.from)}
          disabled={loading || !limits}
          onChange={(e) => handleInputChange("from", e.target.value)}
        />
        <Input
          type="number"
          placeholder={String(limits?.max ?? 0)}
          min={limits?.min ?? 0}
          max={limits?.max ?? 0}
          value={String(values.to)}
          disabled={loading || !limits}
          onChange={(e) => handleInputChange("to", e.target.value)}
        />
      </div>

      <SliderRange
        className="mt-5"
        loading={loading}
        min={limits?.min ?? 0}
        max={limits?.max ?? 0}
        step={step}
        value={[
          getValidValue(values.from, true),
          getValidValue(values.to, false),
        ]}
        onValueChange={handleSliderChange}
      />
    </div>
  );
};
