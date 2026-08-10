"use client";

import React from "react";
import { CheckboxFiltersGroup, Title, RangeFilterSection } from ".";
import { cn } from "@/lib/utils";
import { useRangeState } from "@/hooks/useRangeState";
import { useFilterOptions } from "@/hooks/useFilterOptions";
import { Api } from "@/services/apiClient";
import qs from "qs";
import { useRouter } from "next/navigation";

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

export const FilterSide: React.FC<Props> = ({ className }) => {
  const router = useRouter();

  const fetchMaterials = React.useCallback(() => Api.materials.getAll(), []);
  const fetchBadges = React.useCallback(() => Api.badges.getAll(), []);
  const fetchLimits = React.useCallback(() => Api.products.getStats(), []);

  const {
    items: materials,
    loading: materialsLoading,
    selectedIds: selectedMaterialIds,
    onCheck: onMaterialCheck,
  } = useFilterOptions(fetchMaterials);

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

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

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

  return (
    <div className={cn("mx-4", className)}>
      <Title text="Фильтры" size="sm" className="my-5 font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title=""
          limit={4}
          items={badges}
          loading={badgesLoading}
          onCheck={onBadgeCheck}
          selectedIds={selectedBadgeIds}
          name="badges"
        />
      </div>

      <RangeFilterSection
        title="Цена от и до:"
        values={{ from: price.priceFrom, to: price.priceTo }}
        limits={priceLimits}
        loading={limitsLoading}
        onValueChange={(vals) =>
          updatePriceFields({ priceFrom: vals.from, priceTo: vals.to })
        }
      />

      <RangeFilterSection
        title="Количество от и до:"
        values={{ from: quantity.quantityFrom, to: quantity.quantityTo }}
        limits={quantityLimits}
        loading={limitsLoading}
        onValueChange={(vals) =>
          updateQuantityFields({
            quantityFrom: vals.from,
            quantityTo: vals.to,
          })
        }
      />

      <CheckboxFiltersGroup
        title="Материалы"
        limit={4}
        defaultItems={materials.slice(0, 4)}
        items={materials}
        loading={materialsLoading}
        onCheck={onMaterialCheck}
        selectedIds={selectedMaterialIds}
        name="materials"
      />
    </div>
  );
};
