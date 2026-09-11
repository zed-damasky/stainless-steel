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

  const rangeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  React.useEffect(() => {
    if (limitsLoading || !shouldSyncRef.current) return;

    shouldSyncRef.current = false;

    const instantFilters = {
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

    const priceChanged =
      !!priceLimits &&
      (price.priceFrom !== priceLimits.min ||
        price.priceTo !== priceLimits.max);
    const quantityChanged =
      !!quantityLimits &&
      (quantity.quantityFrom !== quantityLimits.min ||
        quantity.quantityTo !== quantityLimits.max);

    if (rangeTimeoutRef.current) clearTimeout(rangeTimeoutRef.current);

    rangeTimeoutRef.current = setTimeout(() => {
      const rangeFilters = {
        price: priceChanged ? price : undefined,
        quantity: quantityChanged ? quantity : undefined,
      };

      const allFilters = { ...instantFilters, ...rangeFilters };

      const queryString = qs.stringify(allFilters, {
        arrayFormat: "comma",
        skipNulls: true,
      });

      router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    }, 100);

    const instantQueryString = qs.stringify(instantFilters, {
      arrayFormat: "comma",
      skipNulls: true,
    });

    if (instantQueryString) {
      router.replace(`${pathname}?${instantQueryString}`, { scroll: false });
    } else if (!priceChanged && !quantityChanged) {
      router.replace(pathname, { scroll: false });
    }

    return () => {
      if (rangeTimeoutRef.current) clearTimeout(rangeTimeoutRef.current);
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
