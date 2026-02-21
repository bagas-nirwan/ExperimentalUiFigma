import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { Search, Mail, Eye, EyeOff, Lock } from "lucide-react";

export function InputPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Input</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A text input field for collecting user data. Supports validation states, icons, and various types.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Input placeholder="Enter your email" />`}
      >
        <Input placeholder="Enter your email" className="max-w-sm" />
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        description="Pair inputs with labels for accessibility."
        code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
      >
        <div className="space-y-2 max-w-sm">
          <Label htmlFor="email-demo" className="text-sm">Email</Label>
          <Input id="email-demo" type="email" placeholder="you@example.com" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Input Types"
        description="Various HTML input types."
        code={`<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="Email input" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="file" />`}
      >
        <div className="space-y-3 max-w-sm">
          <Input type="text" placeholder="Text input" />
          <Input type="email" placeholder="Email input" />
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pr-10"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          <Input type="number" placeholder="Number" />
          <Input type="file" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Icon"
        description="Add icons inside the input for visual context."
        code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Search..." />
</div>`}
      >
        <div className="space-y-3 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search..." />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input className="pl-9" type="email" placeholder="Email address" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Validation States"
        description="Show error states with aria-invalid."
        code={`<Input aria-invalid="true" defaultValue="invalid@" />
<p className="text-sm text-destructive">Please enter a valid email.</p>`}
      >
        <div className="space-y-3 max-w-sm">
          <div className="space-y-1.5">
            <Label className="text-sm">Valid</Label>
            <Input defaultValue="user@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm">Invalid</Label>
            <Input aria-invalid="true" defaultValue="invalid-email" />
            <p className="text-sm text-destructive">Please enter a valid email address.</p>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        code={`<Input disabled placeholder="Disabled input" />`}
      >
        <Input disabled placeholder="Disabled input" className="max-w-sm" />
      </ComponentPreview>

      <ComponentPreview
        title="Form Pattern"
        description="A common login form pattern."
        code={`<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="login-email">Email</Label>
    <Input id="login-email" type="email" placeholder="you@example.com" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="login-password">Password</Label>
    <Input id="login-password" type="password" placeholder="••••••••" />
  </div>
  <Button className="w-full">Sign In</Button>
</form>`}
      >
        <form className="space-y-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="login-email" className="text-sm">Email</Label>
            <Input id="login-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password" className="text-sm">Password</Label>
            <Input id="login-password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full">Sign In</Button>
        </form>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "type", type: "string", default: '"text"', description: "The HTML input type." },
            { name: "placeholder", type: "string", default: "-", description: "Placeholder text." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the input." },
            { name: "aria-invalid", type: "boolean", default: "-", description: "Shows error styling." },
            { name: "className", type: "string", default: "-", description: "Additional CSS classes." },
          ]}
        />
      </div>
    </div>
  );
}
