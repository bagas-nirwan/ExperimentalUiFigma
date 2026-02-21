import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../components/ui/tooltip";
import { Plus, Bold, Italic, Underline } from "lucide-react";

export function TooltipPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Tooltip</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A popup that displays information related to an element when it receives keyboard focus or mouse hover.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>`}
      >
        <div className="flex justify-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Positions"
        description="Tooltips can appear on different sides."
        code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Top</Button>
  </TooltipTrigger>
  <TooltipContent side="top">Tooltip on top</TooltipContent>
</Tooltip>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild>
                <Button variant="outline" className="capitalize">{side}</Button>
              </TooltipTrigger>
              <TooltipContent side={side}>
                <p>Tooltip on {side}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Icon Buttons"
        description="Common pattern for icon buttons with tooltips."
        code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button size="icon" variant="outline">
      <Plus className="size-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Add new item</TooltipContent>
</Tooltip>`}
      >
        <div className="flex items-center justify-center gap-1">
          {[
            { icon: <Bold className="size-4" />, label: "Bold" },
            { icon: <Italic className="size-4" />, label: "Italic" },
            { icon: <Underline className="size-4" />, label: "Underline" },
          ].map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  {item.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Which side the tooltip appears." },
            { name: "sideOffset", type: "number", default: "0", description: "Distance from the trigger." },
            { name: "delayDuration", type: "number", default: "0", description: "Delay before showing (ms)." },
          ]}
        />
      </div>
    </div>
  );
}
