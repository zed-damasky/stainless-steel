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
  shouldSyncRef: React.RefObject<boolean>;
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
        price: priceChanged ? price : undefined,
        quantity: quantityChanged ? quantity : undefined,
        badges:
          selectedBadgeIds.size > 0 ? Array.from(selectedBadgeIds) : undefined,
        materials:
          selectedMaterialIds.size > 0
            ? Array.from(selectedMaterialIds)
            : undefined,
        categories:
          selectedCategoryIds.size > 0
            ? Array.from(selectedCategoryIds)
            : undefined,
      };

      const queryString = qs.stringify(filters, {
        arrayFormat: "comma",
        skipNulls: true,
      });

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
