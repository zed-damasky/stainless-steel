"use client"

import React from "react";
import { CheckboxFiltersGroup, FilterCheckbox, SliderRange, Title } from ".";
import { Input } from "../ui";
import { cn } from "@/lib/utils";
import { useFilterMaterials } from "@/hooks/useFilterMaterials";

interface Props {
  className?: string;
}

export const FilterSide: React.FC<Props> = ({ className }) => {

  const {materials, loading, addedId, selectedIds} = useFilterMaterials();

  return (
    <div className={cn("mx-4", className)}>
      <Title text="Фильтры" size="sm" className="my-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="Быстрая отгрузка" id={"fast_shipping"} />
        <FilterCheckbox name="Новые предложения" id={"new_offers"} />
        <FilterCheckbox name="Популярное" id={"popular_offers"} />
        <FilterCheckbox name="Мало на складе" id={"low_in_stock"} />
      </div>

      <div className="mt-2 border-y border-y-neutral-100 py-4">
        <p className="font-bold mb-1">Цена от и до:</p>
        <div className="flex gap-2 mb-2">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={""}
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            defaultValue={""}
          />
        </div>
      </div>

      <SliderRange min={0} max={5000} step={10} value={[0, 5000]} />

      <div className="mt-2 border-y border-y-neutral-100 py-4">
        <p className="font-bold mb-1">Количество от и до:</p>
        <div className="flex gap-2 mb-2">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={""}
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            defaultValue={""}
          />
        </div>
      </div>
      <SliderRange min={0} max={5000} step={10} value={[0, 5000]} />

      <CheckboxFiltersGroup
        className="mt-5"
        title={"Материалы"}
        limit={4}
        defaultItems={materials.slice(0,5)}
        items={materials}
        loading={loading}
        onCheck={addedId}
        selectedIds={selectedIds}
        name="materials"
      />
    </div>
  );
};
