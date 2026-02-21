import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";

export function CheckboxPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Checkbox</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A control that allows selecting one or more items from a set. Built on Radix UI Checkbox.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms-demo" />
          <Label htmlFor="terms-demo" className="text-sm">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Checkbox Group"
        description="Multiple checkboxes for selecting from a list."
        code={`{items.map(item => (
  <div className="flex items-center gap-2">
    <Checkbox id={item.id} defaultChecked={item.checked} />
    <Label htmlFor={item.id}>{item.label}</Label>
  </div>
))}`}
      >
        <div className="space-y-3">
          {[
            { id: "notify-email", label: "Email notifications", checked: true },
            { id: "notify-sms", label: "SMS notifications", checked: false },
            { id: "notify-push", label: "Push notifications", checked: true },
            { id: "notify-marketing", label: "Marketing emails", checked: false },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <Checkbox id={item.id} defaultChecked={item.checked} />
              <Label htmlFor={item.id} className="text-sm">{item.label}</Label>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Description"
        code={`<div className="flex items-start gap-3">
  <Checkbox id="privacy" className="mt-1" />
  <div>
    <Label htmlFor="privacy">Privacy Policy</Label>
    <p className="text-sm text-muted-foreground">
      You agree to our privacy policy and data processing.
    </p>
  </div>
</div>`}
      >
        <div className="max-w-md space-y-4">
          {[
            { id: "tos-desc", title: "Terms of Service", desc: "You agree to our terms of service and usage guidelines." },
            { id: "privacy-desc", title: "Privacy Policy", desc: "You agree to our privacy policy and data processing terms." },
          ].map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <Checkbox id={item.id} className="mt-1" />
              <div>
                <Label htmlFor={item.id} className="text-sm">{item.title}</Label>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        code={`<Checkbox disabled />`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox disabled />
            <Label className="text-sm text-muted-foreground">Disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox disabled defaultChecked />
            <Label className="text-sm text-muted-foreground">Disabled checked</Label>
          </div>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "checked", type: "boolean | 'indeterminate'", description: "Controlled checked state." },
            { name: "defaultChecked", type: "boolean", description: "Default checked for uncontrolled." },
            { name: "onCheckedChange", type: "(checked: boolean | 'indeterminate') => void", description: "Callback on change." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the checkbox." },
          ]}
        />
      </div>
    </div>
  );
}
