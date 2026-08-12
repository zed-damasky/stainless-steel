import React from "react";
import { useRangeState } from "@/hooks/useRangeState";
import { Api } from "@/services/apiClient";
import type { RangeState } from "@/hooks/useInitialFilterState";

interface PriceRangeProps {
  priceFrom: number;
  priceTo: number;
}

interface QuantityRangeProps {
  quantityFrom: number;
  quantityTo: number;
}

interface UseFilterLimitsOptions {
  onChange: () => void;
  initialPrice?: RangeState;
  initialQuantity?: RangeState;
}

export function useFilterLimits({
  onChange,
  initialPrice,
  initialQuantity,
}: UseFilterLimitsOptions) {
  const fetchLimits = React.useCallback(() => Api.products.getStats(), []);

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
      priceFrom: initialPrice?.from ?? priceLimits?.min ?? 0,
      priceTo: initialPrice?.to ?? priceLimits?.max ?? 0,
    });

  const [quantity, updateQuantity, updateQuantityFields] =
    useRangeState<QuantityRangeProps>({
      quantityFrom: initialQuantity?.from ?? quantityLimits?.min ?? 0,
      quantityTo: initialQuantity?.to ?? quantityLimits?.max ?? 0,
    });

  const handlePriceChange = React.useCallback(
    (vals: { from: number; to: number }) => {
      onChange();
      updatePriceFields({
        priceFrom: vals.from,
        priceTo: vals.to,
      });
    },
    [onChange, updatePriceFields],
  );

  const handleQuantityChange = React.useCallback(
    (vals: { from: number; to: number }) => {
      onChange();
      updateQuantityFields({
        quantityFrom: vals.from,
        quantityTo: vals.to,
      });
    },
    [onChange, updateQuantityFields],
  );

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
    if (!priceLimits || initialPrice) return;
    updatePrice("priceFrom", priceLimits.min);
    updatePrice("priceTo", priceLimits.max);
  }, [priceLimits, initialPrice, updatePrice]);

  React.useEffect(() => {
    if (!quantityLimits || initialQuantity) return;
    updateQuantity("quantityFrom", quantityLimits.min);
    updateQuantity("quantityTo", quantityLimits.max);
  }, [quantityLimits, initialQuantity, updateQuantity]);

  return {
    price,
    priceLimits,
    onPriceChange: handlePriceChange,

    quantity,
    quantityLimits,
    onQuantityChange: handleQuantityChange,

    limitsLoading,
  };
}
