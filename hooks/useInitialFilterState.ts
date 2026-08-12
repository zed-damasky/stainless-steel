import { useSearchParams } from "next/navigation";
import qs from "qs";
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

function parseRange(
  obj: unknown,
  fromKey: string,
  toKey: string,
): RangeState | undefined {
  if (!obj || typeof obj !== "object") return undefined;

  const record = obj as Record<string, unknown>;
  const from = parseNumber(record[fromKey]);
  const to = parseNumber(record[toKey]);

  if (from === undefined && to === undefined) return undefined;

  return {
    from: from ?? 0,
    to: to ?? 0,
  };
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

    const queryString = searchParams.toString();
    if (!queryString) return emptyState;

    try {
      const parsed = qs.parse(queryString, {
        ignoreQueryPrefix: true,
        depth: 3,
        comma: true,
      });

      const badges = parseStringArray(parsed.badges);
      const materials = parseStringArray(parsed.materials);
      const categories = parseStringArray(parsed.categories);

      const price = parseRange(parsed.price, "priceFrom", "priceTo");
      const quantity = parseRange(
        parsed.quantity,
        "quantityFrom",
        "quantityTo",
      );

      return {
        badges,
        materials,
        categories,
        price,
        quantity,
      };
    } catch (error) {
      console.error("Failed to parse filter state from URL:", error);
      return emptyState;
    }
  }, [searchParams]);
}
