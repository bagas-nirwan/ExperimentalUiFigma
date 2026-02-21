import React from "react";
import { CodeBlock } from "../../components/docs/code-block";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "../../components/ui/alert";
import { Info } from "lucide-react";

export function InstallationPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Guide</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Installation</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          How to install dependencies and set up your project to use Experimental UI components.
        </p>
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Prerequisites</h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>Experimental UI components require the following in your project:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>React 18 or higher</li>
            <li>Tailwind CSS v4</li>
            <li>TypeScript (recommended but optional)</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Step 1: Install Core Dependencies</h2>
        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-3">
            <CodeBlock
              code={`npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge`}
              language="bash"
            />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-3">
            <CodeBlock
              code={`pnpm add @radix-ui/react-slot class-variance-authority clsx tailwind-merge`}
              language="bash"
            />
          </TabsContent>
          <TabsContent value="yarn" className="mt-3">
            <CodeBlock
              code={`yarn add @radix-ui/react-slot class-variance-authority clsx tailwind-merge`}
              language="bash"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Step 2: Add the Utility Function</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Create a <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">cn</code> utility
          that merges Tailwind classes intelligently:
        </p>
        <CodeBlock
          code={`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
          filename="lib/utils.ts"
        />
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Step 3: Configure CSS Variables</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Add the design tokens to your global CSS file. These CSS variables power the entire theming system:
        </p>
        <CodeBlock
          code={`:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --border: rgba(0, 0, 0, 0.1);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  /* ... more dark mode tokens */
}`}
          filename="styles/globals.css"
          language="css"
        />
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Step 4: Start Using Components</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Copy a component from the docs and import it into your project:
        </p>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button";

export default function MyPage() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="outline">Secondary action</Button>
    </div>
  );
}`}
          filename="app/page.tsx"
        />
      </div>

      <Alert>
        <Info className="size-4" />
        <AlertTitle>Component-specific dependencies</AlertTitle>
        <AlertDescription>
          Some components require additional Radix UI packages. Check each component's
          documentation page for its specific dependencies.
        </AlertDescription>
      </Alert>
    </div>
  );
}