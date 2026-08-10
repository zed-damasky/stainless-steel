"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Container } from ".";
import { Categories, SortPopup } from ".";
import { Category } from "@/lib/generated/prisma/client";

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-1 shadow-lg shadow-black/5 z-10 mx-4",
        className,
      )}
    >
      <Container>
        <Categories dbCategories={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
