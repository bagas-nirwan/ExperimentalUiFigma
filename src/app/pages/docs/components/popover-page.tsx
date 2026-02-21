import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover";
import { Settings } from "lucide-react";

export function PopoverPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Popover</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Displays rich content in a floating panel anchored to a trigger element.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4>Dimensions</h4>
      <p>Set the dimensions for the layer.</p>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <div className="flex justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div>
                  <h4 className="text-sm text-foreground">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                </div>
                <div className="grid gap-3">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label className="text-sm">Width</Label>
                    <Input defaultValue="100%" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label className="text-sm">Height</Label>
                    <Input defaultValue="25px" className="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Settings Popover"
        description="A popover with settings controls."
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" size="icon">
      <Settings className="size-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-3">
      <Label>Max width</Label>
      <Input defaultValue="300px" />
    </div>
  </PopoverContent>
</Popover>`}
      >
        <div className="flex justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72">
              <div className="space-y-3">
                <h4 className="text-sm text-foreground">Settings</h4>
                <div className="space-y-2">
                  <Label className="text-sm">Max Width</Label>
                  <Input defaultValue="300px" className="h-8" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Padding</Label>
                  <Input defaultValue="16px" className="h-8" />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment against the trigger." },
            { name: "sideOffset", type: "number", default: "4", description: "Distance from the trigger." },
            { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: "Which side to show." },
          ]}
        />
      </div>
    </div>
  );
}
