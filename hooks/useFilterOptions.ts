import React from "react";

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

  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(
    () => new Set(initialSelectedIds ?? []),
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

  React.useEffect(() => {
    setSelectedIds(new Set(initialSelectedIds ?? []));
  }, [initialSelectedIds]);

  const toggle = React.useCallback((key: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, []);

  return { items, loading, selectedIds, onCheck: toggle };
};
