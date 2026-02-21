import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Label } from "../../../components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel,
} from "../../../components/ui/select";

export function SelectPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Select</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A dropdown select component for choosing from a list of options. Built on Radix UI Select.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>`}
      >
        <div className="flex justify-center">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="cherry">Cherry</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Groups"
        description="Organize options into labeled groups."
        code={`<Select>
  <SelectTrigger className="w-[240px]">
    <SelectValue placeholder="Select timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern (EST)</SelectItem>
      <SelectItem value="cst">Central (CST)</SelectItem>
      <SelectItem value="pst">Pacific (PST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">GMT</SelectItem>
      <SelectItem value="cet">Central European (CET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      >
        <div className="flex justify-center">
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern (EST)</SelectItem>
                <SelectItem value="cst">Central (CST)</SelectItem>
                <SelectItem value="mst">Mountain (MST)</SelectItem>
                <SelectItem value="pst">Pacific (PST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">GMT</SelectItem>
                <SelectItem value="cet">Central European (CET)</SelectItem>
                <SelectItem value="eet">Eastern European (EET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        code={`<div className="space-y-2">
  <Label>Role</Label>
  <Select defaultValue="viewer">
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="admin">Admin</SelectItem>
      <SelectItem value="editor">Editor</SelectItem>
      <SelectItem value="viewer">Viewer</SelectItem>
    </SelectContent>
  </Select>
</div>`}
      >
        <div className="space-y-2 max-w-xs mx-auto">
          <Label className="text-sm">Role</Label>
          <Select defaultValue="viewer">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "value", type: "string", description: "Controlled value." },
            { name: "defaultValue", type: "string", description: "Default value for uncontrolled usage." },
            { name: "onValueChange", type: "(value: string) => void", description: "Callback when value changes." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the select." },
            { name: "placeholder", type: "string", description: "Placeholder text shown in SelectValue." },
          ]}
        />
      </div>
    </div>
  );
}
