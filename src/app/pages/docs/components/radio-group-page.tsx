import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Label } from "../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";

export function RadioGroupPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Radio Group</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A set of checkable buttons where only one can be checked at a time. Built on Radix UI Radio Group.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="comfortable" className="max-w-sm mx-auto">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1" className="text-sm">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2" className="text-sm">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3" className="text-sm">Compact</Label>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <ComponentPreview
        title="With Descriptions"
        description="Add context to each option."
        code={`<RadioGroup defaultValue="free">
  {plans.map(plan => (
    <div className="flex items-start space-x-3">
      <RadioGroupItem value={plan.value} id={plan.value} className="mt-1" />
      <div>
        <Label htmlFor={plan.value}>{plan.name}</Label>
        <p className="text-sm text-muted-foreground">{plan.desc}</p>
      </div>
    </div>
  ))}
</RadioGroup>`}
      >
        <RadioGroup defaultValue="team" className="max-w-md mx-auto">
          {[
            { value: "free", name: "Free", desc: "Perfect for trying out. Up to 3 projects." },
            { value: "team", name: "Team - $12/mo", desc: "For small teams. Unlimited projects." },
            { value: "enterprise", name: "Enterprise", desc: "Custom pricing for large organizations." },
          ].map((plan) => (
            <div key={plan.value} className="flex items-start space-x-3 rounded-lg border p-4">
              <RadioGroupItem value={plan.value} id={plan.value} className="mt-0.5" />
              <div>
                <Label htmlFor={plan.value} className="text-sm">{plan.name}</Label>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "value", type: "string", description: "Controlled value." },
            { name: "defaultValue", type: "string", description: "Default selected value." },
            { name: "onValueChange", type: "(value: string) => void", description: "Callback on change." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables all items." },
            { name: "orientation", type: '"horizontal" | "vertical"', default: '"vertical"', description: "Layout direction." },
          ]}
        />
      </div>
    </div>
  );
}
