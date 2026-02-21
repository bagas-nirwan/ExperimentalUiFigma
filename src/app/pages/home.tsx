import React from "react";
import { Link } from "react-router";
import { useTheme } from "../lib/theme-context";
import { copyToClipboard } from "../lib/copy-to-clipboard";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Label } from "../components/ui/label";
import {
  Sun,
  Moon,
  ArrowRight,
  Sparkles,
  Palette,
  Accessibility,
  Zap,
  Code2,
  Copy,
  Check,
  Github,
  Layers,
  Shield,
  Smartphone,
  ChevronRight,
  Star,
  Terminal,
  Box,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { label: "Components", value: "30+", icon: <Box className="size-5" /> },
  { label: "Variants", value: "100+", icon: <Layers className="size-5" /> },
  { label: "Accessible", value: "WCAG AA", icon: <Shield className="size-5" /> },
  { label: "Responsive", value: "Mobile First", icon: <Smartphone className="size-5" /> },
];

const features = [
  {
    title: "Copy & Paste Ready",
    description: "Every component comes with production-ready code. Just copy, paste, and customize to your needs.",
    icon: <Code2 className="size-5" />,
  },
  {
    title: "Dark Mode Built-in",
    description: "Seamless light and dark mode support with CSS variables. Toggle with a single click.",
    icon: <Palette className="size-5" />,
  },
  {
    title: "Fully Accessible",
    description: "Built on Radix UI primitives with keyboard navigation, screen reader support, and ARIA compliance.",
    icon: <Accessibility className="size-5" />,
  },
  {
    title: "Lightning Fast",
    description: "Optimized with Tailwind CSS, tree-shakeable, and zero runtime overhead for peak performance.",
    icon: <Zap className="size-5" />,
  },
];

const componentCategories = [
  {
    title: "Form Elements",
    count: 7,
    items: ["Input", "Select", "Checkbox", "Switch", "Slider", "Textarea", "Radio Group"],
    href: "/docs/components/input",
  },
  {
    title: "Data Display",
    count: 6,
    items: ["Table", "Card", "Badge", "Avatar", "Accordion", "Tabs"],
    href: "/docs/components/card",
  },
  {
    title: "Feedback & Overlays",
    count: 7,
    items: ["Dialog", "Sheet", "Alert", "Tooltip", "Popover", "Progress", "Skeleton"],
    href: "/docs/components/dialog",
  },
  {
    title: "Actions",
    count: 2,
    items: ["Button", "Dropdown Menu"],
    href: "/docs/components/button",
  },
];

export function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [installCopied, setInstallCopied] = React.useState(false);

  const handleCopyInstall = () => {
    copyToClipboard("npx experimental-ui init");
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-foreground">
                <Sparkles className="size-4 text-background" />
              </div>
              <span className="text-sm text-foreground">Experimental UI</span>
            </Link>
            <Badge variant="outline" className="text-[10px]">v1.0</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
            <Link to="/docs/components/button" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Components</Link>
            <Link to="/docs/theming" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Theming</Link>
          </nav>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="size-8">
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="size-8">
              <Github className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.02)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
                <Star className="size-3" />
                Open Source Design System
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground"
            >
              Beautiful components{" "}
              <span className="bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text">
                built for production
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A comprehensive, accessible, and customizable component library built
              with React, Tailwind CSS, and Radix UI. Copy-paste components that
              work perfectly in any project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button asChild className="h-11 px-6 gap-2">
                <Link to="/docs">
                  Get Started
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-11 px-6 gap-2">
                <Link to="/docs/components/button">
                  Browse Components
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <button
                onClick={handleCopyInstall}
                className="inline-flex items-center gap-3 rounded-lg border bg-muted/50 px-4 py-2.5 font-mono text-sm text-muted-foreground hover:bg-muted transition-colors"
              >
                <Terminal className="size-4" />
                <span>npx experimental-ui init</span>
                {installCopied ? (
                  <Check className="size-4 text-green-500" />
                ) : (
                  <Copy className="size-4" />
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-background border text-muted-foreground">
                  {stat.icon}
                </div>
                <div className="text-2xl text-foreground tracking-tight">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl tracking-tight text-foreground">
              See it in action
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every component is interactive, accessible, and production-ready right out of the box.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Card Preview */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Create Project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm">Project Name</Label>
                  <Input placeholder="my-awesome-project" />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Public Repository</Label>
                  <Switch defaultChecked />
                </div>
                <Button className="w-full">Create Project</Button>
              </CardContent>
            </Card>

            {/* Notification Card */}
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage your notification preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Email notifications", desc: "Receive emails about activity", checked: true },
                  { label: "Push notifications", desc: "Receive push notifications", checked: false },
                  { label: "SMS notifications", desc: "Receive SMS for critical alerts", checked: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Checkbox defaultChecked={item.checked} className="mt-0.5" />
                    <div>
                      <div className="text-sm text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Team Members Card */}
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Invite your team to collaborate.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Sarah Chen", role: "Admin", initials: "SC" },
                  { name: "Alex Rivera", role: "Editor", initials: "AR" },
                  { name: "Jordan Lee", role: "Viewer", initials: "JL" },
                ].map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-foreground truncate">{member.name}</div>
                      <div className="text-xs text-muted-foreground">{member.role}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">{member.role}</Badge>
                  </div>
                ))}
                <Separator />
                <Button variant="outline" className="w-full gap-2 text-sm">
                  Invite Member
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl tracking-tight text-foreground">
              Why Experimental UI?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Built with modern best practices, designed for real-world applications.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <Card className="h-full bg-background hover:border-foreground/20 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-sm text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl tracking-tight text-foreground">
              Component Library
            </h2>
            <p className="mt-3 text-muted-foreground">
              A comprehensive set of components organized into logical categories.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {componentCategories.map((category) => (
              <Link
                key={category.title}
                to={category.href}
                className="group rounded-xl border bg-card p-6 hover:border-foreground/20 transition-all hover:shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-foreground">{category.title}</h3>
                  <Badge variant="secondary">{category.count} components</Badge>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>View components</span>
                  <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl tracking-tight text-foreground">
            Start building today
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Explore the documentation, browse components, and start building
            beautiful interfaces in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild className="h-11 px-8 gap-2">
              <Link to="/docs">
                Read the Docs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-11 px-8">
              <Link to="/docs/components/button">
                Explore Components
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded bg-foreground">
                <Sparkles className="size-3 text-background" />
              </div>
              <span className="text-sm text-muted-foreground">
                Experimental UI. Built with React & Tailwind CSS.
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Open source under MIT License
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}