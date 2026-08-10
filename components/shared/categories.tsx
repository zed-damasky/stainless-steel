"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { categoriesProducts } from "../data";
import { useCategoryStore } from "@/store/category";
import { Category } from "@/lib/generated/prisma/client";

interface Props {
  className?: string;
  dbCategories: Category[];
}

export const Categories: React.FC<Props> = ({ className, dbCategories }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const setActiveId = useCategoryStore((state) => state.setActiveId);

  const validCategories = React.useMemo(() => {
    return categoriesProducts
      .map((listCategory) => {
        const dbCategory = dbCategories.find(
          (db) => db.name.toLowerCase() === listCategory.name.toLowerCase(),
        );
        return dbCategory ? { id: dbCategory.id, name: dbCategory.name } : null;
      })
      .filter(Boolean) as { id: string; name: string }[];
  }, [dbCategories]);

  React.useEffect(() => {
    if (!categoryActiveId && validCategories.length > 0) {
      setActiveId(validCategories[0].id);
    }
  }, [validCategories, categoryActiveId, setActiveId]);

  return (
    <div
      className={cn(
        "flex flex-wrap gap-1 bg-gray-50  rounded-2xl my-1",
        className,
      )}
    >
      {validCategories.map(({ id, name }) => (
        <a
          key={id}
          href={`/#${name}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveId(id);
           document
              .getElementById(name)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id
              ? "bg-white shadow-md shadow-gray-200 text-primary"
              : "hover:bg-gray-200 text-gray-600",
          )}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
