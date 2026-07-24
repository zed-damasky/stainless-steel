"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { categoriesProducts } from "../data";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

const categories = categoriesProducts;

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn(
        "flex flex-wrap gap-1 bg-gray-50  rounded-2xl my-1",
        className,
      )}
    >
      {categories.map(({ id, name }, index) => (
        <a
          key={index}
          href={`/#${name}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
