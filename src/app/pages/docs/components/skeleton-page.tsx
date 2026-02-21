import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Skeleton } from "../../../components/ui/skeleton";

export function SkeletonPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Skeleton</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Used to show a placeholder while content is loading. Provides visual feedback during async operations.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex items-center space-x-4 max-w-sm mx-auto">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Card Skeleton"
        description="Loading state for a card component."
        code={`<div className="rounded-xl border p-6 space-y-4">
  <Skeleton className="h-6 w-1/3" />
  <Skeleton className="h-4 w-2/3" />
  <Skeleton className="h-32 w-full rounded-lg" />
  <div className="flex gap-2">
    <Skeleton className="h-9 w-20" />
    <Skeleton className="h-9 w-20" />
  </div>
</div>`}
      >
        <div className="rounded-xl border p-6 space-y-4 max-w-md mx-auto">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-32 w-full rounded-lg" />
          <div className="flex gap-2">
            <Skeleton className="h-9 w-20 rounded-md" />
            <Skeleton className="h-9 w-20 rounded-md" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="List Skeleton"
        description="Loading state for a list of items."
        code={`{Array.from({ length: 4 }).map((_, i) => (
  <div key={i} className="flex items-center gap-3">
    <Skeleton className="h-10 w-10 rounded-full" />
    <div className="space-y-1.5 flex-1">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  </div>
))}`}
      >
        <div className="space-y-4 max-w-md mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "className", type: "string", description: "CSS classes to control size and shape of the skeleton." },
          ]}
        />
      </div>
    </div>
  );
}
