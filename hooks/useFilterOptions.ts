import React from "react";
import { useSet } from "react-use";

export interface FilterItem {
  id: string;
  name: string;
}

interface UseFilterOptionsParams<T> {
  fetchFn: () => Promise<T[]>;
  initialSelectedIds?: string[];
}

export const useFilterOptions = <
  T extends { id: string | number; name: string },
>({
  fetchFn,
  initialSelectedIds,
}: UseFilterOptionsParams<T>) => {
  const [items, setItems] = React.useState<FilterItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  const [selectedIds, { toggle }] = useSet(
    new Set<string>(initialSelectedIds ?? []),
  );

  const fetchFnRef = React.useRef(fetchFn);
  fetchFnRef.current = fetchFn;

  React.useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchFnRef.current();

        if (isMounted) {
          setItems(
            data.map((item) => ({ id: String(item.id), name: item.name })),
          );
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return { items, loading, selectedIds, onCheck: toggle };
};
