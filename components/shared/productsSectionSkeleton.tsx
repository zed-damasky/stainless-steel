import React from "react";
import { Skeleton } from "@/components/ui";

export const ProductsSectionSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: 3 }).map((_, groupIndex) => (
        <div key={groupIndex}>
          <Skeleton className="mb-5 h-8 w-64 rounded-lg" />

          <div className="grid grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, cardIndex) => (
              <div key={cardIndex} className="flex flex-col">
                <Skeleton className="mb-3 h-65 w-full rounded-lg" />
                <Skeleton className="mb-1 h-5 w-4/5" />
                <Skeleton className="mb-2 h-5 w-2/3" />
                <Skeleton className="mb-1 h-4 w-full" />
                <Skeleton className="mb-1 h-4 w-5/6" />
                <Skeleton className="mb-4 h-4 w-3/4" />

                <div className="mt-auto flex items-center justify-between">
                  <Skeleton className="h-7 w-24" />
                  <Skeleton className="h-10 w-32 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
