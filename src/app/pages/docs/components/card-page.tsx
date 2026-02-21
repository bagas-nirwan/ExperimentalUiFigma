import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Switch } from "../../../components/ui/switch";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";

export function CardPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Card</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Displays content in a contained, visually distinct container with optional header, content, and footer sections.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`}
      >
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">This is the card content area. You can put any content here.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title="Form Card"
        description="A card with form elements inside."
        code={`<Card>
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>Enter your details below.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input placeholder="Name" />
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
  </CardContent>
  <CardFooter className="justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Create</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Enter your details to create a new account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm">Name</Label>
              <Input placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Email</Label>
              <Input type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Password</Label>
              <Input type="password" placeholder="Create a password" />
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Create Account</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title="Settings Card"
        description="Card with toggle settings."
        code={`<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>Manage your notification preferences.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    {items.map(item => (
      <div className="flex items-center justify-between">
        <div>
          <p>{item.title}</p>
          <p>{item.desc}</p>
        </div>
        <Switch />
      </div>
    ))}
  </CardContent>
</Card>`}
      >
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Push Notifications", desc: "Receive push on your device", default: true },
              { title: "Email Digest", desc: "Weekly summary via email", default: true },
              { title: "SMS Alerts", desc: "Critical alerts via SMS", default: false },
            ].map((item) => (
              <div key={item.title} className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <Switch defaultChecked={item.default} />
              </div>
            ))}
          </CardContent>
        </Card>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "className", type: "string", default: "-", description: "Additional CSS classes for the card container." },
            { name: "children", type: "ReactNode", required: true, description: "Card content. Use CardHeader, CardContent, CardFooter." },
          ]}
        />
      </div>
    </div>
  );
}
