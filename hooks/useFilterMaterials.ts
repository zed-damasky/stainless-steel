//todo delete maybe

import { Material } from "@/lib/generated/prisma/client";
import { Api } from "@/services/apiClient";
import React from "react";
import { useSet } from "react-use";

type MaterialItem = Pick<Material, "id" | "name">;

interface ReturnProps {
  materials: MaterialItem[];
  loading: boolean;
  selectedIds: Set<string>;
  addedId: (id: string) => void;
}

export const useFilterMaterials = (): ReturnProps => {
  const [materials, setMaterials] = React.useState<ReturnProps["materials"]>(
    [],
  );
  const [loading, setLoading] = React.useState(true);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  React.useEffect(() => {
    async function fetchMaterials() {
      try {
        setLoading(true);
        const materials = await Api.materials.getAll();
        setMaterials(
          materials.map((material) => ({
            id: material.id,
            name: material.name,
          })),
        );
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchMaterials();
  }, []);

  return { materials, loading, addedId: toggle, selectedIds };
};
