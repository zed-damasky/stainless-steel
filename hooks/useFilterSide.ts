import React from "react";
import {
  useCheckboxFilter,
  useFilterLimits,
  useFilterUrlSync,
  useInitialFilterState,
} from ".";

import { Api } from "@/services/apiClient";

export function useFilterSide() {
  const shouldSyncUrlRef = React.useRef(false);
  const initialState = useInitialFilterState();

  const markAsChanged = React.useCallback(() => {
    shouldSyncUrlRef.current = true;
  }, []);

  const fetchMaterials = React.useCallback(() => Api.materials.getAll(), []);
  const fetchBadges = React.useCallback(() => Api.badges.getAll(), []);
  const fetchCategories = React.useCallback(() => Api.categories.getAll(), []);

  const materials = useCheckboxFilter({
    fetchFn: fetchMaterials,
    onChange: markAsChanged,
    initialSelectedIds: initialState.materials,
  });

  const categories = useCheckboxFilter({
    fetchFn: fetchCategories,
    onChange: markAsChanged,
    initialSelectedIds: initialState.categories,
  });

  const badges = useCheckboxFilter({
    fetchFn: fetchBadges,
    onChange: markAsChanged,
    initialSelectedIds: initialState.badges,
  });

  const limits = useFilterLimits({
    onChange: markAsChanged,
    initialPrice: initialState.price,
    initialQuantity: initialState.quantity,
  });

  useFilterUrlSync({
    selectedBadgeIds: badges.selectedIds,
    selectedMaterialIds: materials.selectedIds,
    selectedCategoryIds: categories.selectedIds,
    price: limits.price,
    quantity: limits.quantity,
    priceLimits: limits.priceLimits,
    quantityLimits: limits.quantityLimits,
    limitsLoading: limits.limitsLoading,
    shouldSyncRef: shouldSyncUrlRef,
  });

  return {
    badges: badges.items,
    badgesLoading: badges.loading,
    selectedBadgeIds: badges.selectedIds,
    onBadgeCheck: badges.onCheck,

    categories: categories.items,
    categoriesLoading: categories.loading,
    selectedCategoryIds: categories.selectedIds,
    onCategoryCheck: categories.onCheck,

    materials: materials.items,
    materialsLoading: materials.loading,
    selectedMaterialIds: materials.selectedIds,
    onMaterialCheck: materials.onCheck,

    price: limits.price,
    priceLimits: limits.priceLimits,
    onPriceChange: limits.onPriceChange,

    quantity: limits.quantity,
    quantityLimits: limits.quantityLimits,
    onQuantityChange: limits.onQuantityChange,

    limitsLoading: limits.limitsLoading,
  };
}
