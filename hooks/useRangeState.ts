import React from "react";

export const useRangeState = <T extends Record<keyof T, number>>(
  initial: T,
) => {
  const [state, setState] = React.useState<T>(initial);

  const updateField = (name: keyof T, value: number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return [state, updateField] as const;
};
