import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";

export function BadgePage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Badge</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Displays a small status indicator or label. Useful for counts, statuses, and categories.
        </p>
      </div>

      <ComponentPreview
        title="Variants"
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Use Cases"
        description="Common badge patterns in UIs."
        code={`<Badge>New</Badge>
<Badge variant="secondary">In Progress</Badge>
<Badge variant="outline">v2.1.0</Badge>
<Badge variant="destructive">Critical</Badge>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge className="bg-green-600 hover:bg-green-700 text-white border-transparent">Active</Badge>
          <Badge variant="secondary">Pending</Badge>
          <Badge variant="outline">Draft</Badge>
          <Badge variant="destructive">Error</Badge>
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-transparent">New</Badge>
          <Badge variant="outline">v2.1.0</Badge>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "variant", type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: "The visual style." },
            { name: "asChild", type: "boolean", default: "false", description: "Render as child element." },
            { name: "className", type: "string", description: "Additional CSS classes." },
          ]}
        />
      </div>
    </div>
  );
}
