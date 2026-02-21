import React, { useState } from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";

export function SliderPage() {
  const [value, setValue] = useState([50]);
  const [range, setRange] = useState([25, 75]);

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Slider</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          An input for selecting a value from a range. Supports single value and range selection.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Slider defaultValue={[50]} max={100} step={1} />`}
      >
        <div className="max-w-md mx-auto space-y-2">
          <div className="flex justify-between text-sm">
            <Label className="text-sm">Volume</Label>
            <span className="text-muted-foreground">{value[0]}%</span>
          </div>
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Range"
        description="Select a range with two thumbs."
        code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}
      >
        <div className="max-w-md mx-auto space-y-2">
          <div className="flex justify-between text-sm">
            <Label className="text-sm">Price Range</Label>
            <span className="text-muted-foreground">${range[0]} - ${range[1]}</span>
          </div>
          <Slider value={range} onValueChange={setRange} max={100} step={1} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Steps"
        description="Slider with defined step intervals."
        code={`<Slider defaultValue={[50]} max={100} step={25} />`}
      >
        <div className="max-w-md mx-auto space-y-2">
          <Label className="text-sm">Quality</Label>
          <Slider defaultValue={[50]} max={100} step={25} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
            <span>Ultra</span>
            <span>Max</span>
          </div>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "value", type: "number[]", description: "Controlled value." },
            { name: "defaultValue", type: "number[]", description: "Default value." },
            { name: "onValueChange", type: "(value: number[]) => void", description: "Callback on change." },
            { name: "min", type: "number", default: "0", description: "Minimum value." },
            { name: "max", type: "number", default: "100", description: "Maximum value." },
            { name: "step", type: "number", default: "1", description: "Step interval." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the slider." },
          ]}
        />
      </div>
    </div>
  );
}
