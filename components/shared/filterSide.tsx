"use client";
//todo useMemo ext, fix DRY 

import React from "react";
import { CheckboxFiltersGroup, Title, RangeFilterSection } from ".";
import { cn } from "@/lib/utils";
import { useRangeState } from "@/hooks/useRangeState";
import { useFilterOptions } from "@/hooks/useFilterOptions";
import { Api } from "@/services/apiClient";
import qs from "qs";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useSearchParam } from "react-use";

interface Props {
  className?: string;
}

interface PriceRangeProps {
  priceFrom: number;
  priceTo: number;
}

interface QuantityRangeProps {
  quantityFrom: number;
  quantityTo: number;
}

interface QueryFilters extends PriceRangeProps, QuantityRangeProps {
  materials: string[];
  badges: string[];
  categories: string[];
}

export const FilterSide: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const router = useRouter();
  const pathname = usePathname();

  const shouldSyncUrlRef = React.useRef(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchMaterials = React.useCallback(() => Api.materials.getAll(), []);
  const fetchBadges = React.useCallback(() => Api.badges.getAll(), []);
  const fetchLimits = React.useCallback(() => Api.products.getStats(), []);
  const fetchCategories = React.useCallback(() => Api.categories.getAll(), []);

  const {
    items: materials,
    loading: materialsLoading,
    selectedIds: selectedMaterialIds,
    onCheck: onMaterialCheck,
  } = useFilterOptions(fetchMaterials);

  const {
    items: categories,
    loading: categoriesLoading,
    selectedIds: selectedCategoryIds,
    onCheck: onCategoryCheck,
  } = useFilterOptions(fetchCategories);

  const {
    items: badges,
    loading: badgesLoading,
    selectedIds: selectedBadgeIds,
    onCheck: onBadgeCheck,
  } = useFilterOptions(fetchBadges);

  const [priceLimits, setPriceLimits] = React.useState<{
    min: number;
    max: number;
  } | null>(null);

  const [quantityLimits, setQuantityLimits] = React.useState<{
    min: number;
    max: number;
  } | null>(null);
  

  const handleBadgeCheck = (id: string) => {
    shouldSyncUrlRef.current = true;
    onBadgeCheck(id);
  };

    const handleCategoryCheck = (id: string) => {
    shouldSyncUrlRef.current = true;
    onCategoryCheck(id);
  };

  const handleMaterialCheck = (id: string) => {
    shouldSyncUrlRef.current = true;
    onMaterialCheck(id);
  };
  const handlePriceChange = (vals: { from: number; to: number }) => {
    shouldSyncUrlRef.current = true;

    updatePriceFields({
      priceFrom: vals.from,
      priceTo: vals.to,
    });
  };
  const handleQuantityChange = (vals: { from: number; to: number }) => {
    shouldSyncUrlRef.current = true;

    updateQuantityFields({
      quantityFrom: vals.from,
      quantityTo: vals.to,
    });
  };

  const [limitsLoading, setLimitsLoading] = React.useState(true);

  const [price, updatePrice, updatePriceFields] =
    useRangeState<PriceRangeProps>({
      priceFrom: priceLimits?.min ?? 0,
      priceTo: priceLimits?.max ?? 0,
    });

  const [quantity, updateQuantity, updateQuantityFields] =
    useRangeState<QuantityRangeProps>({
      quantityFrom: quantityLimits?.min ?? 0,
      quantityTo: quantityLimits?.max ?? 0,
    });

  React.useEffect(() => {
    const loadLimits = async () => {
      try {
        const res = await fetchLimits();
        setPriceLimits(res.price);
        setQuantityLimits(res.quantity);
      } catch (e) {
        console.error(e);
      } finally {
        setLimitsLoading(false);
      }
    };
    loadLimits();
  }, [fetchLimits]);

  React.useEffect(() => {
    if (priceLimits) {
      updatePrice("priceFrom", priceLimits.min);
      updatePrice("priceTo", priceLimits.max);
    }
  }, [priceLimits, updatePrice]);

  React.useEffect(() => {
    if (quantityLimits) {
      updateQuantity("quantityFrom", quantityLimits.min);
      updateQuantity("quantityTo", quantityLimits.max);
    }
  }, [quantityLimits, updateQuantity]);

  React.useEffect(() => {
    if (limitsLoading) return;

    if (!shouldSyncUrlRef.current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      shouldSyncUrlRef.current = false;

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
    }, 30);

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
  ]);

  /*
  React.useEffect(() => {
    if (limitsLoading) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const filters = {
        price,
        quantity,
        badges: Array.from(selectedBadgeIds),
        materials: Array.from(selectedMaterialIds),
      };
      const queryString = qs.stringify(filters, {
        arrayFormat: "comma",
      });
      router.push(`?${queryString}`, { scroll: false });
    }, 300);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    selectedMaterialIds,
    selectedBadgeIds,
    price,
    quantity,
    router,
    limitsLoading,
  ]);
*/
  return (
    <div className={cn("mx-4", className)}>
      <Title text="Фильтры" size="md" className="font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          limit={4}
          items={badges}
          loading={badgesLoading}
          onCheck={handleBadgeCheck}
          selectedIds={selectedBadgeIds}
          name="badges"
        />
      </div>

      <RangeFilterSection
        title="Цена от и до:"
        values={{ from: price.priceFrom, to: price.priceTo }}
        limits={priceLimits}
        loading={limitsLoading}
        onValueChange={handlePriceChange}
      />

      <RangeFilterSection
        title="Количество от и до:"
        values={{ from: quantity.quantityFrom, to: quantity.quantityTo }}
        limits={quantityLimits}
        loading={limitsLoading}
        onValueChange={handleQuantityChange}
      />

      <CheckboxFiltersGroup
        title="Материалы"
        limit={4}
        defaultItems={materials.slice(0, 4)}
        items={materials}
        loading={materialsLoading}
        onCheck={handleMaterialCheck}
        selectedIds={selectedMaterialIds}
        name="materials"
      />

      <CheckboxFiltersGroup
        title="Категории"
        limit={4}
        defaultItems={categories.slice(0, 4)}
        items={categories}
        loading={categoriesLoading}
        onCheck={handleCategoryCheck}
        selectedIds={selectedCategoryIds}
        name="categories"
      />
    </div>
  );
};
