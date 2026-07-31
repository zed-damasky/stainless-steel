"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filterCheckBox";
import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onCheck?: (id: string) => void;
  defaultValue?: string[];
  className?: string;
  loading?: boolean;
  selectedIds?: Set<string>;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Найти...",
  onCheck,
  className,
  loading,
  selectedIds,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const list = showAll
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : (defaultItems || items).slice(0, limit);

  const onChangedSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {[...Array(limit)].map((_, i) => (
          <Skeleton key={i} className="h-6 mb-4 rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangedSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 pr-2 ">
        {list.map((item, index) => (
          <FilterCheckbox
            onCheckedChange={() => onCheck?.(item.id)}
            checked={selectedIds?.has(item.id)}
            key={index}
            id={item.id}
            name={item.name}
            endAdornment={item.endAdornment}
          />
        ))}
        {list.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-2">
            Ничего не найдено
          </p>
        )}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-2 font-bold"
          >
            {showAll ? "- Скрыть" : "+ Развернуть"}
          </button>
        </div>
      )}
    </div>
  );
};
