import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "../../../components/ui/dialog";

export function DialogPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Dialog</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects a response.
          Built on Radix UI Dialog for full accessibility.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A basic dialog with title, description, and actions."
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Form"
        description="Dialog containing a form for user input."
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <Input placeholder="Name" />
      <Input placeholder="Username" />
    </div>
    <DialogFooter>
      <Button>Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label className="text-sm">Name</Label>
                  <Input defaultValue="Sarah Chen" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Username</Label>
                  <Input defaultValue="@sarahchen" />
                </div>
              </div>
              <DialogFooter>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "open", type: "boolean", description: "Controlled open state." },
            { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes." },
            { name: "modal", type: "boolean", default: "true", description: "Whether the dialog is modal." },
          ]}
        />
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-green-500">&#10003;</span> Focus is trapped within the dialog when open</li>
          <li className="flex gap-2"><span className="text-green-500">&#10003;</span> Pressing Escape closes the dialog</li>
          <li className="flex gap-2"><span className="text-green-500">&#10003;</span> Content behind the dialog is inert</li>
          <li className="flex gap-2"><span className="text-green-500">&#10003;</span> Focus returns to trigger on close</li>
        </ul>
      </div>
    </div>
  );
}
