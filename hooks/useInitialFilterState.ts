import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export interface RangeState {
  from: number;
  to: number;
}

export interface InitialFilterState {
  badges: string[] | undefined;
  materials: string[] | undefined;
  categories: string[] | undefined;
  price: RangeState | undefined;
  quantity: RangeState | undefined;
}

function parseStringArray(value: unknown): string[] | undefined {
  if (!value) return undefined;

  if (Array.isArray(value)) {
    const filtered = value.filter(
      (item): item is string => typeof item === "string" && item.trim() !== "",
    );
    return filtered.length > 0 ? filtered : undefined;
  }

  if (typeof value === "string") {
    const filtered = value.split(",").filter((item) => item.trim() !== "");
    return filtered.length > 0 ? filtered : undefined;
  }

  return undefined;
}

function parseNumber(value: unknown): number | undefined {
  if (value === null || value === undefined) return undefined;

  const str = String(value).trim();
  if (str === "") return undefined;

  const num = Number(str);
  if (Number.isNaN(num) || !Number.isFinite(num)) return undefined;

  return num;
}

export function useInitialFilterState(): InitialFilterState {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const emptyState: InitialFilterState = {
      badges: undefined,
      materials: undefined,
      categories: undefined,
      price: undefined,
      quantity: undefined,
    };

    if (!searchParams) return emptyState;

    try {
      const badges = parseStringArray(searchParams.get("badges"));
      const materials = parseStringArray(searchParams.get("materials"));
      const categories = parseStringArray(searchParams.get("categories"));

      const priceFrom = parseNumber(searchParams.get("priceFrom"));
      const priceTo = parseNumber(searchParams.get("priceTo"));
      const quantityFrom = parseNumber(searchParams.get("quantityFrom"));
      const quantityTo = parseNumber(searchParams.get("quantityTo"));

      const price =
        priceFrom !== undefined || priceTo !== undefined
          ? { from: priceFrom ?? 0, to: priceTo ?? 0 }
          : undefined;

      const quantity =
        quantityFrom !== undefined || quantityTo !== undefined
          ? { from: quantityFrom ?? 0, to: quantityTo ?? 0 }
          : undefined;

      return { badges, materials, categories, price, quantity };
    } catch (error) {
      console.error("Failed to parse filter state from URL:", error);
      return emptyState;
    }
  }, [searchParams]);
}
