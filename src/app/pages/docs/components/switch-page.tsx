import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Switch } from "../../../components/ui/switch";
import { Label } from "../../../components/ui/label";

export function SwitchPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Switch</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A toggle switch for turning settings on or off. Built on Radix UI Switch.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<div className="flex items-center gap-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Switch id="airplane" />
          <Label htmlFor="airplane" className="text-sm">Airplane Mode</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Settings List"
        description="Common pattern for a settings page."
        code={`{settings.map(setting => (
  <div className="flex items-center justify-between">
    <div>
      <Label>{setting.title}</Label>
      <p>{setting.description}</p>
    </div>
    <Switch defaultChecked={setting.enabled} />
  </div>
))}`}
      >
        <div className="max-w-md space-y-4">
          {[
            { title: "Dark Mode", desc: "Use dark theme across the app", enabled: false },
            { title: "Notifications", desc: "Receive push notifications", enabled: true },
            { title: "Auto-save", desc: "Automatically save changes", enabled: true },
            { title: "Analytics", desc: "Share anonymous usage data", enabled: false },
          ].map((s) => (
            <div key={s.title} className="flex items-center justify-between gap-4">
              <div>
                <Label className="text-sm">{s.title}</Label>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
              <Switch defaultChecked={s.enabled} />
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        code={`<Switch disabled />`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Switch disabled />
            <Label className="text-sm text-muted-foreground">Disabled off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch disabled defaultChecked />
            <Label className="text-sm text-muted-foreground">Disabled on</Label>
          </div>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "checked", type: "boolean", description: "Controlled state." },
            { name: "defaultChecked", type: "boolean", description: "Default state for uncontrolled." },
            { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on change." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the switch." },
          ]}
        />
      </div>
    </div>
  );
}
