import React from "react";
import {
  useCheckboxFilter,
  useFilterLimits,
  useFilterUrlSync,
  useInitialFilterState,
} from ".";
import { Api } from "@/services/apiClient";

export function useFilterSide() {
  const initialState = useInitialFilterState();

  const fetchMaterials = React.useCallback(() => Api.materials.getAll(), []);
  const fetchBadges = React.useCallback(() => Api.badges.getAll(), []);
  const fetchCategories = React.useCallback(() => Api.categories.getAll(), []);

  const materials = useCheckboxFilter({
    fetchFn: fetchMaterials,
    initialSelectedIds: initialState.materials,
  });
  const categories = useCheckboxFilter({
    fetchFn: fetchCategories,
    initialSelectedIds: initialState.categories,
  });
  const badges = useCheckboxFilter({
    fetchFn: fetchBadges,
    initialSelectedIds: initialState.badges,
  });

  const limits = useFilterLimits({
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
