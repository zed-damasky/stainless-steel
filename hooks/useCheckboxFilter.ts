import React from "react";
import { useFilterOptions } from ".";

interface UseCheckboxFilterOptions<T> {
  fetchFn: () => Promise<T[]>;
  initialSelectedIds?: string[];
}

export function useCheckboxFilter<T extends { id: string | number; name: string }>({
  fetchFn,
  initialSelectedIds,
}: UseCheckboxFilterOptions<T>) {
  const { items, loading, selectedIds, onCheck } = useFilterOptions<T>({
    fetchFn,
    initialSelectedIds,
  });

  return { items, loading, selectedIds, onCheck };
}