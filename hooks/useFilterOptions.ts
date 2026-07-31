import React from "react";
import { useSet } from "react-use";

export interface FilterItem {
  id: string;
  name: string;
}

export const useFilterOptions = <
  T extends { id: string | number; name: string },
>(
  fetchFn: () => Promise<T[]>,
) => {
  const [items, setItems] = React.useState<FilterItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  const [selectedIds, { toggle }] = useSet(new Set<string>());

  React.useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchFn();

        if (isMounted) {
          setItems(
            data.map((item) => ({
              id: String(item.id),
              name: item.name,
            })),
          );
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchFn]);

  return { items, loading, selectedIds, onCheck: toggle };
};
