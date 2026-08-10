import React from "react";

export const useRangeState = <T extends Record<keyof T, number>>(
  initial: T,
) => {
  const [state, setState] = React.useState<T>(initial);

  const updateField = React.useCallback((name: keyof T, value: number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const updateFields = React.useCallback((values: Partial<T>) => {
    setState((prev) => ({ ...prev, ...values }));
  }, []);

  return [state, updateField, updateFields] as const;
};