import React from "react";
import { Skeleton } from "@/components/ui";

export const FiltersSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="h-8 w-32 rounded-lg" />

      <Skeleton className="h-10 w-full rounded-lg" />

      <div className="flex flex-col gap-3">
        <Skeleton className="h-5 w-24" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-8 w-28 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="h-5 w-24" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-8 w-28 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-14 w-full rounded-full" />
        <div className="flex gap-2">
          <Skeleton className="h-10 w-1/2 rounded-lg" />
          <Skeleton className="h-10 w-1/2 rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="h-6 w-24" />
        {[...Array(5)].map((_, i) => (
          <Skeleton key={`mat-${i}`} className="h-6 w-full rounded-md" />
        ))}
        <Skeleton className="h-6 w-20 mt-2" />
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="h-6 w-24" />
        {[...Array(5)].map((_, i) => (
          <Skeleton key={`cat-${i}`} className="h-6 w-full rounded-md" />
        ))}
      </div>
    </div>
  );
};
