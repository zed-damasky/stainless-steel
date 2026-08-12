"use client";

import React from "react";
import { CheckboxFiltersGroup, Title, RangeFilterSection } from ".";
import { cn } from "@/lib/utils";
import { useFilterSide } from "@/hooks";

interface Props {
  className?: string;
}

export const FilterSide: React.FC<Props> = ({ className }) => {
  const {
    badges,
    badgesLoading,
    selectedBadgeIds,
    onBadgeCheck,

    categories,
    categoriesLoading,
    selectedCategoryIds,
    onCategoryCheck,

    materials,
    materialsLoading,
    selectedMaterialIds,
    onMaterialCheck,

    price,
    priceLimits,
    onPriceChange,

    quantity,
    quantityLimits,
    onQuantityChange,

    limitsLoading,
  } = useFilterSide();

  return (
    <div className={cn("mx-4", className)}>
      <Title text="Фильтры" size="md" className="font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
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
        onValueChange={onPriceChange}
      />

      <RangeFilterSection
        title="Количество от и до:"
        values={{ from: quantity.quantityFrom, to: quantity.quantityTo }}
        limits={quantityLimits}
        loading={limitsLoading}
        onValueChange={onQuantityChange}
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

      <CheckboxFiltersGroup
        title="Категории"
        limit={4}
        defaultItems={categories.slice(0, 4)}
        items={categories}
        loading={categoriesLoading}
        onCheck={onCategoryCheck}
        selectedIds={selectedCategoryIds}
        name="categories"
      />
    </div>
  );
};
