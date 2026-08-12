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
  const getValidValue = (val: number, field: "from" | "to") => {
    if (!limits) return val;

    if (field === "from") {
      return Math.max(limits.min, Math.min(val, values.to));
    }

    return Math.min(limits.max, Math.max(val, values.from));
  };

  const handleInputChange = (field: "from" | "to", value: string) => {
    onValueChange({ ...values, [field]: Number(value) });
  };

  const handleInputBlur = (field: "from" | "to") => {
    if (!limits) return;

    let val = values[field];

    if (isNaN(val) || val === null) {
      val = field === "from" ? limits.min : limits.max;
    }

    val = Math.max(limits.min, Math.min(limits.max, val));

    if (field === "from") {
      val = Math.min(val, values.to);
    } else {
      val = Math.max(val, values.from);
    }

    if (val !== values[field]) {
      onValueChange({ ...values, [field]: val });
    }
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
          onBlur={() => handleInputBlur("from")}
        />
        <Input
          type="number"
          placeholder={String(limits?.max ?? 0)}
          min={limits?.min ?? 0}
          max={limits?.max ?? 0}
          value={String(values.to)}
          disabled={loading || !limits}
          onChange={(e) => handleInputChange("to", e.target.value)}
          onBlur={() => handleInputBlur("to")}
        />
      </div>

      <SliderRange
        className="mt-5"
        loading={loading}
        min={limits?.min ?? 0}
        max={limits?.max ?? 0}
        step={step}
        value={[
          getValidValue(values.from, "from"),
          getValidValue(values.to, "to"),
        ]}
        onValueChange={handleSliderChange}
      />
    </div>
  );
};
