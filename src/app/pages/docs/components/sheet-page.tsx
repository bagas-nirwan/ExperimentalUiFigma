import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Sheet, SheetContent, SheetDescription, SheetFooter,
  SheetHeader, SheetTitle, SheetTrigger,
} from "../../../components/ui/sheet";

export function SheetPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Sheet</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A panel that slides in from the edge of the screen. Also known as a drawer or side panel.
        </p>
      </div>

      <ComponentPreview
        title="Default (Right)"
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>Make changes here.</SheetDescription>
    </SheetHeader>
    <div className="p-4 space-y-4">
      <Input placeholder="Name" />
      <Input placeholder="Email" />
    </div>
    <SheetFooter>
      <Button>Save Changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <div className="flex justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="px-4 space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm">Name</Label>
                  <Input defaultValue="Sarah Chen" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Email</Label>
                  <Input defaultValue="sarah@example.com" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Username</Label>
                  <Input defaultValue="@sarahchen" />
                </div>
              </div>
              <SheetFooter>
                <Button>Save Changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sides"
        description="Sheet can slide in from any edge."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Left</Button>
  </SheetTrigger>
  <SheetContent side="left">...</SheetContent>
</Sheet>`}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" className="capitalize">{side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle className="capitalize">{side} Sheet</SheetTitle>
                  <SheetDescription>This sheet slides in from the {side}.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"right"', description: "Which edge the sheet slides from." },
            { name: "open", type: "boolean", description: "Controlled open state." },
            { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback on state change." },
          ]}
        />
      </div>
    </div>
  );
}
