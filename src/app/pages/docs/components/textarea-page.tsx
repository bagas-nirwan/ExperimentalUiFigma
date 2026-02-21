import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";

export function TextareaPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Textarea</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A multi-line text input field. Supports auto-resize behavior via CSS field-sizing.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Textarea placeholder="Type your message here." />`}
      >
        <Textarea placeholder="Type your message here." className="max-w-md mx-auto" />
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        code={`<div className="space-y-2">
  <Label htmlFor="message">Your message</Label>
  <Textarea id="message" placeholder="Write something..." />
</div>`}
      >
        <div className="space-y-2 max-w-md mx-auto">
          <Label htmlFor="bio" className="text-sm">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." />
          <p className="text-xs text-muted-foreground">Max 200 characters.</p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Button"
        description="Common feedback form pattern."
        code={`<div className="space-y-4">
  <Textarea placeholder="Your feedback..." />
  <Button>Submit</Button>
</div>`}
      >
        <div className="space-y-3 max-w-md mx-auto">
          <Label className="text-sm">Feedback</Label>
          <Textarea placeholder="How can we improve?" />
          <div className="flex justify-end">
            <Button size="sm">Send Feedback</Button>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        code={`<Textarea disabled placeholder="Disabled textarea" />`}
      >
        <Textarea disabled placeholder="Disabled textarea" className="max-w-md mx-auto" />
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "placeholder", type: "string", description: "Placeholder text." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the textarea." },
            { name: "rows", type: "number", description: "Number of visible rows." },
            { name: "className", type: "string", description: "Additional CSS classes." },
          ]}
        />
      </div>
    </div>
  );
}
