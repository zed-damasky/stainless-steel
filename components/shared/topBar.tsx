import { cn } from "@/lib/utils";
import React from "react";
import { Container } from ".";
import { Categories, SortPopup } from ".";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-1 shadow-lg shadow-black/5 z-10 mx-4",
        className,
      )}
    >
      <Container>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
