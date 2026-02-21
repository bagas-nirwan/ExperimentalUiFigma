import React from "react";
import { CodeBlock } from "../../components/docs/code-block";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { useTheme } from "../../lib/theme-context";
import { Sun, Moon } from "lucide-react";

const colorTokens = [
  { name: "--background", light: "#ffffff", dark: "oklch(0.145 0 0)", desc: "App background" },
  { name: "--foreground", light: "oklch(0.145 0 0)", dark: "oklch(0.985 0 0)", desc: "Default text color" },
  { name: "--primary", light: "#030213", dark: "oklch(0.985 0 0)", desc: "Primary actions, links" },
  { name: "--secondary", light: "oklch(0.95 ...)", dark: "oklch(0.269 0 0)", desc: "Secondary elements" },
  { name: "--muted", light: "#ececf0", dark: "oklch(0.269 0 0)", desc: "Muted backgrounds" },
  { name: "--accent", light: "#e9ebef", dark: "oklch(0.269 0 0)", desc: "Accent highlights" },
  { name: "--destructive", light: "#d4183d", dark: "oklch(0.396 ...)", desc: "Error, danger states" },
  { name: "--border", light: "rgba(0,0,0,0.1)", dark: "oklch(0.269 0 0)", desc: "Border color" },
];

const semanticColors = [
  { name: "Primary", classes: "bg-primary text-primary-foreground", usage: "Main actions, CTAs" },
  { name: "Secondary", classes: "bg-secondary text-secondary-foreground", usage: "Secondary actions" },
  { name: "Destructive", classes: "bg-destructive text-white", usage: "Danger, delete actions" },
  { name: "Muted", classes: "bg-muted text-muted-foreground", usage: "Subtle backgrounds" },
  { name: "Accent", classes: "bg-accent text-accent-foreground", usage: "Highlighted states" },
];

export function ThemingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Guide</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Theming</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          Learn how to customize the design system with CSS variables, create custom themes,
          and implement dark mode.
        </p>
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Color System</h2>
        <p className="text-sm text-muted-foreground mb-4">
          The design system uses semantic color tokens defined as CSS custom properties.
          Each color has a foreground variant for text that appears on top of it.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {semanticColors.map((color) => (
            <div key={color.name} className="rounded-lg border overflow-hidden">
              <div className={`h-16 ${color.classes} flex items-center justify-center text-sm`}>
                {color.name}
              </div>
              <div className="p-3">
                <div className="text-sm text-foreground">{color.name}</div>
                <div className="text-xs text-muted-foreground">{color.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Dark Mode</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Dark mode is implemented using a CSS class on the root element. Toggle the theme
          to see how all components adapt automatically.
        </p>
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="sm"
            onClick={() => theme !== "light" && toggleTheme()}
            className="gap-2"
          >
            <Sun className="size-4" />
            Light
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            size="sm"
            onClick={() => theme !== "dark" && toggleTheme()}
            className="gap-2"
          >
            <Moon className="size-4" />
            Dark
          </Button>
        </div>
        <CodeBlock
          code={`// Toggle dark mode by adding/removing the 'dark' class
document.documentElement.classList.toggle('dark');

// Or persist preference
const theme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.toggle('dark', theme === 'dark');`}
          filename="theme-toggle.ts"
        />
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Design Tokens</h2>
        <p className="text-sm text-muted-foreground mb-4">
          All color tokens with their light and dark mode values:
        </p>
        <div className="rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left text-xs text-foreground">Token</th>
                  <th className="px-4 py-3 text-left text-xs text-foreground">Light</th>
                  <th className="px-4 py-3 text-left text-xs text-foreground">Dark</th>
                  <th className="px-4 py-3 text-left text-xs text-foreground">Usage</th>
                </tr>
              </thead>
              <tbody>
                {colorTokens.map((token) => (
                  <tr key={token.name} className="border-b last:border-0">
                    <td className="px-4 py-2.5">
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                        {token.name}
                      </code>
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                      {token.light}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                      {token.dark}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">
                      {token.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Custom Theme Example</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Create a custom theme by overriding the CSS variables:
        </p>
        <CodeBlock
          code={`/* Ocean Blue theme */
:root {
  --primary: #0066cc;
  --primary-foreground: #ffffff;
  --secondary: #e8f4fd;
  --secondary-foreground: #0066cc;
  --accent: #f0f7ff;
  --accent-foreground: #003d7a;
  --destructive: #cc3300;
}

.dark {
  --primary: #4da6ff;
  --primary-foreground: #001a33;
  --background: #0d1117;
  --foreground: #e6edf3;
}`}
          filename="themes/ocean.css"
          language="css"
        />
      </div>

      <div>
        <h2 className="text-xl text-foreground mb-4">Spacing & Radius</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Border radius uses a scale based on the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--radius</code> token:
        </p>
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { name: "sm", value: "calc(var(--radius) - 4px)", className: "rounded-sm" },
            { name: "md", value: "calc(var(--radius) - 2px)", className: "rounded-md" },
            { name: "lg", value: "var(--radius)", className: "rounded-lg" },
            { name: "xl", value: "calc(var(--radius) + 4px)", className: "rounded-xl" },
          ].map((r) => (
            <div key={r.name} className="text-center">
              <div
                className={`mx-auto mb-2 size-16 border-2 border-foreground/20 bg-muted ${r.className}`}
              />
              <div className="text-sm text-foreground">radius-{r.name}</div>
              <div className="text-xs text-muted-foreground font-mono">{r.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}