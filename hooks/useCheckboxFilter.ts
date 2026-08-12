import React from "react";
import { useFilterOptions } from "@/hooks/useFilterOptions";

interface UseCheckboxFilterOptions {
  fetchFn: () => Promise<any[]>;
  onChange: () => void;
  initialSelectedIds?: string[];
}

export function useCheckboxFilter<
  T extends { id: string | number; name: string },
>({ fetchFn, onChange, initialSelectedIds }: UseCheckboxFilterOptions) {
  const { items, loading, selectedIds, onCheck } = useFilterOptions<T>({
    fetchFn,
    initialSelectedIds,
  });

  const handleCheck = React.useCallback(
    (id: string) => {
      onChange();
      onCheck(id);
    },
    [onChange, onCheck],
  );

  return {
    items,
    loading,
    selectedIds,
    onCheck: handleCheck,
  };
}
