import React from "react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/docs/code-block";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowRight, Code2, Palette, Accessibility, Zap, Copy } from "lucide-react";

export function IntroductionPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Documentation</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Introduction</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          Experimental UI is a collection of beautifully designed, accessible, and customizable
          components built with React, Tailwind CSS, and Radix UI.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            icon: <Copy className="size-5" />,
            title: "Copy & Paste",
            description: "Components are designed to be copied into your project. No package lock-in.",
          },
          {
            icon: <Palette className="size-5" />,
            title: "Themeable",
            description: "Customize colors, typography, and spacing with CSS variables.",
          },
          {
            icon: <Accessibility className="size-5" />,
            title: "Accessible",
            description: "Built on Radix UI primitives with full keyboard and screen reader support.",
          },
          {
            icon: <Zap className="size-5" />,
            title: "Performant",
            description: "Tailwind CSS for zero-runtime styling. Tree-shakeable by default.",
          },
        ].map((item) => (
          <Card key={item.title} className="bg-card">
            <CardContent className="pt-6">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Quick Start</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm text-foreground mb-2">1. Install dependencies</h3>
            <CodeBlock
              code={`npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge`}
              language="bash"
            />
          </div>
          <div>
            <h3 className="text-sm text-foreground mb-2">2. Add the utility function</h3>
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
            <h3 className="text-sm text-foreground mb-2">3. Copy a component</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Browse the component documentation and copy the source code into your project.
              Each component page includes the full source code and usage examples.
            </p>
            <Button asChild className="gap-2">
              <Link to="/docs/components/button">
                Browse Components
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Design Philosophy</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            Experimental UI follows a <strong className="text-foreground">copy-paste</strong> approach
            inspired by shadcn/ui. Rather than installing a package, you own the code.
            This gives you full control over styling, behavior, and implementation details.
          </p>
          <p>
            Components are built on top of <strong className="text-foreground">Radix UI</strong> primitives,
            providing battle-tested accessibility patterns. Styling is handled through{" "}
            <strong className="text-foreground">Tailwind CSS</strong> with CSS custom properties
            for theming.
          </p>
          <p>
            The design system uses a semantic color system with{" "}
            <strong className="text-foreground">CSS variables</strong>, making it easy to create
            custom themes and support dark mode out of the box.
          </p>
        </div>
      </div>

      <div className="rounded-xl border bg-muted/30 p-6">
        <h3 className="text-sm text-foreground mb-2">Ready to dive in?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Start exploring the component library or learn about the theming system.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" className="gap-1.5">
            <Link to="/docs/components/button">
              Components
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="gap-1.5">
            <Link to="/docs/theming">
              Theming Guide
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}