import React from "react";
import qs from "qs";
import { useRouter, usePathname } from "next/navigation";

interface UseFilterUrlSyncOptions {
  selectedBadgeIds: Set<string>;
  selectedMaterialIds: Set<string>;
  selectedCategoryIds: Set<string>;
  price: { priceFrom: number; priceTo: number };
  quantity: { quantityFrom: number; quantityTo: number };
  priceLimits: { min: number; max: number } | null;
  quantityLimits: { min: number; max: number } | null;
  limitsLoading: boolean;
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
}: UseFilterUrlSyncOptions) {
  const router = useRouter();
  const pathname = usePathname();
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    if (limitsLoading) return;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const priceChanged = !!priceLimits && (price.priceFrom !== priceLimits.min || price.priceTo !== priceLimits.max);
      const quantityChanged = !!quantityLimits && (quantity.quantityFrom !== quantityLimits.min || quantity.quantityTo !== quantityLimits.max);

      const allFilters = {
        badges: selectedBadgeIds.size > 0 ? Array.from(selectedBadgeIds) : undefined,
        materials: selectedMaterialIds.size > 0 ? Array.from(selectedMaterialIds) : undefined,
        categories: selectedCategoryIds.size > 0 ? Array.from(selectedCategoryIds) : undefined,
        priceFrom: priceChanged ? price.priceFrom : undefined,
        priceTo: priceChanged ? price.priceTo : undefined,
        quantityFrom: quantityChanged ? quantity.quantityFrom : undefined,
        quantityTo: quantityChanged ? quantity.quantityTo : undefined,
      };

      const queryString = qs.stringify(allFilters, {
        arrayFormat: "comma",
        skipNulls: true,
      });

      router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    }, 300);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    selectedMaterialIds, selectedCategoryIds, selectedBadgeIds,
    price, quantity, router, limitsLoading, pathname, priceLimits, quantityLimits,
  ]);
}