/*
import LZString from "lz-string";
import type { FilterState } from "@/hooks/useInitialFilterState";

export function encodeFilters(filters: FilterState): string {
  try {
    const cleanFilters = Object.fromEntries(
      Object.entries(filters).filter(([, value]) => value !== undefined)
    );

    const json = JSON.stringify(cleanFilters);
    return LZString.compressToEncodedURIComponent(json);
  } catch (error) {
    console.error("Failed to encode filters:", error);
    return "";
  }
}

export function decodeFilters(encoded: string): FilterState | undefined {
  if (!encoded) return undefined;

  try {
    const json = LZString.decompressFromEncodedURIComponent(encoded);
    if (!json) return undefined;

    const parsed = JSON.parse(json);
    // ZOD valid here?
    return parsed as FilterState;
  } catch (error) {
    console.error("Failed to decode filters:", error);
    return undefined;
  }
}
  ///////////////////////
  filterSchema.ts
import { z } from "zod";

export const FilterSchema = z.object({
  badges: z.array(z.string()).optional(),
  materials: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(),
  price: z
    .object({
      from: z.number().int().nonnegative(),
      to: z.number().int().nonnegative(),
    })
    .optional(),
  quantity: z
    .object({
      from: z.number().int().nonnegative(),
      to: z.number().int().nonnegative(),
    })
    .optional(),
});

export type FilterState = z.infer<typeof FilterSchema>;

/*

useInitialFilterState.ts
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { decodeFilters } from "@/lib/filterCodec";

export interface RangeState {
  from: number;
  to: number;
}

export interface FilterState {
  badges?: string[];
  materials?: string[];
  categories?: string[];
  price?: RangeState;
  quantity?: RangeState;
}


export function useInitialFilterState(): FilterState {
  const searchParams = useSearchParams();

  return useMemo(() => {
    if (!searchParams) return {};

    const encoded = searchParams.get("f");
    if (!encoded) return {};

    const decoded = decodeFilters(encoded);
    return decoded ?? {};
  }, [searchParams]);
}

///////////////////////

useFilterUrlSync.ts
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { encodeFilters } from "@/lib/filterCodec";

interface UseFilterUrlSyncOptions {
  selectedBadgeIds: Set<string>;
  selectedMaterialIds: Set<string>;
  selectedCategoryIds: Set<string>;
  price: { priceFrom: number; priceTo: number };
  quantity: { quantityFrom: number; quantityTo: number };
  priceLimits: { min: number; max: number } | null;
  quantityLimits: { min: number; max: number } | null;
  limitsLoading: boolean;
  shouldSyncRef: React.MutableRefObject<boolean>;
}

export function useFilterUrlSync({
  selectedBadgeIds,
  selectedMaterialIds,
  selectedCategoryIds,
  price,
  quantity,
  priceLimits,
  quantityLimits,
  limitsLoading,
  shouldSyncRef,
}: UseFilterUrlSyncOptions) {
  const router = useRouter();
  const pathname = usePathname();
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    if (limitsLoading) return;
    if (!shouldSyncRef.current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      shouldSyncRef.current = false;

      const priceChanged =
        !!priceLimits &&
        (price.priceFrom !== priceLimits.min ||
          price.priceTo !== priceLimits.max);

      const quantityChanged =
        !!quantityLimits &&
        (quantity.quantityFrom !== quantityLimits.min ||
          quantity.quantityTo !== quantityLimits.max);

      const filters = {
        price: priceChanged ? { from: price.priceFrom, to: price.priceTo } : undefined,
        quantity: quantityChanged
          ? { from: quantity.quantityFrom, to: quantity.quantityTo }
          : undefined,
        badges: selectedBadgeIds.size > 0 ? Array.from(selectedBadgeIds) : undefined,
        materials: selectedMaterialIds.size > 0 ? Array.from(selectedMaterialIds) : undefined,
        categories: selectedCategoryIds.size > 0 ? Array.from(selectedCategoryIds) : undefined,
      };

   
      const encoded = encodeFilters(filters);
      const queryString = encoded ? `f=${encoded}` : "";

      router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    selectedMaterialIds,
    selectedCategoryIds,
    selectedBadgeIds,
    price,
    quantity,
    router,
    limitsLoading,
    pathname,
    priceLimits,
    quantityLimits,
    shouldSyncRef,
  ]);
}

*/