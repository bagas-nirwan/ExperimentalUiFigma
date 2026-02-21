import React, { useState } from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { CodeBlock } from "../../../components/docs/code-block";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Loader2, Mail, Download, ChevronRight, Plus, Trash2 } from "lucide-react";

export function ButtonPage() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Button</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Displays a button or a component that looks like a button. Supports multiple
          variants, sizes, and states.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="The default button style."
        code={`<Button>Button</Button>`}
      >
        <div className="flex items-center justify-center">
          <Button>Button</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Variants"
        description="Button comes in several visual variants."
        code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Three size options to fit different UI contexts."
        code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus /></Button>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Plus className="size-4" /></Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Icons"
        description="Buttons with leading or trailing icons."
        code={`<Button><Mail /> Login with Email</Button>
<Button variant="outline"><Download /> Download</Button>
<Button variant="secondary">Next <ChevronRight /></Button>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button><Mail className="size-4" /> Login with Email</Button>
          <Button variant="outline"><Download className="size-4" /> Download</Button>
          <Button variant="secondary">Next <ChevronRight className="size-4" /></Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading State"
        description="Show a loading spinner to indicate async operations."
        code={`<Button disabled>
  <Loader2 className="animate-spin" />
  Please wait
</Button>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button onClick={handleLoading} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Click to load"
            )}
          </Button>
          <Button disabled>
            <Loader2 className="size-4 animate-spin" />
            Please wait
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        description="Disabled buttons prevent interaction."
        code={`<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled</Button>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled</Button>
          <Button variant="destructive" disabled>Disabled</Button>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default: '"default"', description: "The visual style of the button." },
            { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "The size of the button." },
            { name: "asChild", type: "boolean", default: "false", description: "Render as a child component using Radix Slot." },
            { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction when true." },
            { name: "className", type: "string", default: "-", description: "Additional CSS classes." },
          ]}
        />
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Usage</h2>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <div className="flex gap-2">
      <Button>Save Changes</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">
        <Trash2 className="size-4" />
        Delete
      </Button>
    </div>
  );
}`}
          filename="example.tsx"
        />
      </div>
    </div>
  );
}
