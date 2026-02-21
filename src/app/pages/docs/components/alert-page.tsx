import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "../../../components/ui/alert";
import { Info, XCircle, Terminal } from "lucide-react";

export function AlertPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Alert</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Displays a callout for user attention with contextual feedback messages.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Alert>
  <Info className="size-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`}
      >
        <div className="max-w-lg mx-auto space-y-3">
          <Alert>
            <Terminal className="size-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Variants"
        description="Different alert types for various contexts."
        code={`<Alert>
  <Info />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This is an informational message.</AlertDescription>
</Alert>
<Alert variant="destructive">
  <XCircle />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>`}
      >
        <div className="max-w-lg mx-auto space-y-3">
          <Alert>
            <Info className="size-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is an informational alert for general messages.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <XCircle className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong. Please try again later.</AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "variant", type: '"default" | "destructive"', default: '"default"', description: "The visual style of the alert." },
            { name: "className", type: "string", description: "Additional CSS classes." },
          ]}
        />
      </div>
    </div>
  );
}