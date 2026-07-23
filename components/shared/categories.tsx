import { cn } from "@/lib/utils";
import React from "react";
import { categoriesProducts } from "../data";

interface Props {
  className?: string;
}

const categories = categoriesProducts;
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("flex flex-wrap gap-1 bg-gray-50  rounded-2xl my-1", className)}
    >
      {categories.map((category, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};
