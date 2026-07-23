import React from "react";
import { CheckboxFiltersGroup, FilterCheckbox, SliderRange, Title } from ".";
import { Input } from "../ui";
import { categoriesMetal } from "../data";

interface Props {
  className?: string;
}

export const FilterSide: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтры" size="sm" className="my-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Быстрая отгрузка" value={"fast_shipping"} />
        <FilterCheckbox text="Новые предложения" value={"new_offers"} />
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
        limit={5}
        defaultItems={categoriesMetal}
        items={categoriesMetal}
      />
    </div>
  );
};
