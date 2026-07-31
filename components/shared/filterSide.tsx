"use client";

import React from "react";
import { CheckboxFiltersGroup, SliderRange, Title } from ".";
import { Input } from "../ui";
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
  // const { materials, loading, addedId, selectedIds } = useFilterMaterials();
  const router = useRouter();

  const fetchMaterials = React.useCallback(() => Api.materials.getAll(), []);
  const fetchBadges = React.useCallback(() => Api.badges.getAll(), []);

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

  const [price, updatePrice] = useRangeState<PriceRangeProps>({
    priceFrom: 0,
    priceTo: 5000,
  });

  const [quantity, updateQuantity] = useRangeState<QuantityRangeProps>({
    quantityFrom: 0,
    quantityTo: 5000,
  });

  React.useEffect(() => {
    const filters = {
      price,
      quantity,
      badges: Array.from(selectedBadgeIds),
      materials: Array.from(selectedMaterialIds),
    };
    const queryString = qs.stringify(filters, {
      arrayFormat: "comma",
    });
    router.push(`?${queryString}`);
  }, [selectedMaterialIds, selectedBadgeIds, price, quantity, router]);

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

      <div className="my-2 border-y border-y-neutral-100 py-4">
        <p className="font-bold mb-1">Цена от и до:</p>
        <div className="flex gap-2 mb-2">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(price.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            value={String(price.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <SliderRange
          className="mt-5"
          min={0}
          max={5000}
          step={1}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) => {
            updatePrice("priceFrom", priceFrom);
            updatePrice("priceTo", priceTo);
          }}
        />
      </div>

      <div className="my-2 border-y border-y-neutral-100 py-4">
        <p className="font-bold mb-1">Количество от и до:</p>
        <div className="flex gap-2 mb-2">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(quantity.quantityFrom)}
            onChange={(e) =>
              updateQuantity("quantityFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            value={String(quantity.quantityTo)}
            onChange={(e) =>
              updateQuantity("quantityTo", Number(e.target.value))
            }
          />
        </div>
        <SliderRange
          className="mt-5"
          min={0}
          max={5000}
          step={10}
          value={[quantity.quantityFrom, quantity.quantityTo]}
          onValueChange={([quantityFrom, quantityTo]) => {
            updateQuantity("quantityFrom", quantityFrom);
            updateQuantity("quantityTo", quantityTo);
          }}
        />
      </div>

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
