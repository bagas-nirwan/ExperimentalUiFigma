import React, { useState, useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { useTheme } from "../../lib/theme-context";
import {
  Sun,
  Moon,
  Menu,
  X,
  Search,
  ChevronDown,
  Layers,
  BookOpen,
  Palette,
  LayoutGrid,
  ToggleLeft,
  Square,
  CheckSquare,
  Circle,
  SlidersHorizontal,
  Table2,
  CreditCard,
  MessageSquare,
  Bell,
  ListCollapse,
  BadgeCheck,
  UserCircle,
  Info,
  Loader,
  PanelRight,
  MoreHorizontal,
  Crosshair,
  TextCursorInput,
  AlignLeft,
  FileText,
  Sparkles,
  Github,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
  defaultOpen?: boolean;
}

const navGroups: NavGroup[] = [
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { title: "Introduction", href: "/docs", icon: <BookOpen className="size-4" /> },
      { title: "Installation", href: "/docs/installation", icon: <FileText className="size-4" /> },
      { title: "Theming", href: "/docs/theming", icon: <Palette className="size-4" /> },
    ],
  },
  {
    title: "Form Elements",
    defaultOpen: true,
    items: [
      { title: "Input", href: "/docs/components/input", icon: <TextCursorInput className="size-4" /> },
      { title: "Textarea", href: "/docs/components/textarea", icon: <AlignLeft className="size-4" /> },
      { title: "Select", href: "/docs/components/select", icon: <ChevronDown className="size-4" /> },
      { title: "Checkbox", href: "/docs/components/checkbox", icon: <CheckSquare className="size-4" /> },
      { title: "Radio Group", href: "/docs/components/radio-group", icon: <Circle className="size-4" /> },
      { title: "Switch", href: "/docs/components/switch", icon: <ToggleLeft className="size-4" /> },
      { title: "Slider", href: "/docs/components/slider", icon: <SlidersHorizontal className="size-4" /> },
    ],
  },
  {
    title: "Buttons & Actions",
    defaultOpen: true,
    items: [
      { title: "Button", href: "/docs/components/button", icon: <Square className="size-4" />, badge: "Popular" },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu", icon: <MoreHorizontal className="size-4" /> },
    ],
  },
  {
    title: "Data Display",
    defaultOpen: true,
    items: [
      { title: "Table", href: "/docs/components/table", icon: <Table2 className="size-4" /> },
      { title: "Card", href: "/docs/components/card", icon: <CreditCard className="size-4" /> },
      { title: "Badge", href: "/docs/components/badge", icon: <BadgeCheck className="size-4" /> },
      { title: "Avatar", href: "/docs/components/avatar", icon: <UserCircle className="size-4" /> },
      { title: "Accordion", href: "/docs/components/accordion", icon: <ListCollapse className="size-4" /> },
      { title: "Tabs", href: "/docs/components/tabs", icon: <LayoutGrid className="size-4" /> },
    ],
  },
  {
    title: "Feedback & Overlays",
    defaultOpen: true,
    items: [
      { title: "Alert", href: "/docs/components/alert", icon: <Bell className="size-4" /> },
      { title: "Dialog", href: "/docs/components/dialog", icon: <MessageSquare className="size-4" />, badge: "Popular" },
      { title: "Sheet", href: "/docs/components/sheet", icon: <PanelRight className="size-4" /> },
      { title: "Tooltip", href: "/docs/components/tooltip", icon: <Info className="size-4" /> },
      { title: "Popover", href: "/docs/components/popover", icon: <Crosshair className="size-4" /> },
      { title: "Progress", href: "/docs/components/progress", icon: <Loader className="size-4" /> },
      { title: "Skeleton", href: "/docs/components/skeleton", icon: <Layers className="size-4" /> },
    ],
  },
];

export function DocLayout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());

  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return navGroups;
    const q = searchQuery.toLowerCase();
    return navGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.title.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [searchQuery]);

  const toggleGroup = (title: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>
      </div>
      <ScrollArea className="flex-1 overflow-hidden px-3 pb-4">
        <nav className="space-y-1">
          {filteredGroups.map((group) => {
            const isCollapsed = collapsedGroups.has(group.title);
            return (
              <div key={group.title} className="mb-2">
                <button
                  onClick={() => toggleGroup(group.title)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="tracking-wider uppercase">{group.title}</span>
                  <ChevronDown
                    className={`size-3.5 transition-transform ${
                      isCollapsed ? "-rotate-90" : ""
                    }`}
                  />
                </button>
                {!isCollapsed && (
                  <div className="mt-0.5 space-y-0.5">
                    {group.items.map((item) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                          }`}
                        >
                          {item.icon && (
                            <span className={isActive ? "text-foreground" : "text-muted-foreground"}>
                              {item.icon}
                            </span>
                          )}
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-background/80 backdrop-blur-md px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden rounded-md p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            {sidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-foreground">
              <Sparkles className="size-4 text-background" />
            </div>
            <span className="hidden sm:inline text-sm text-foreground">
              Experimental UI
            </span>
          </Link>
          <Badge variant="outline" className="hidden sm:inline-flex text-[10px]">
            v1.0
          </Badge>
        </div>
        <div className="flex items-center gap-1">
          <nav className="hidden md:flex items-center gap-1 mr-2">
            <Link
              to="/docs"
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                location.pathname.startsWith("/docs")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Docs
            </Link>
            <Link
              to="/docs/components/button"
              className={`rounded-md px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:text-foreground`}
            >
              Components
            </Link>
            <Link
              to="/docs/theming"
              className={`rounded-md px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:text-foreground`}
            >
              Theming
            </Link>
          </nav>
          <Separator orientation="vertical" className="hidden md:block h-5 mx-1" />
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="size-8">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="size-8" asChild>
            <a href="https://github.com/bagas-nirwan/ExperimentalUiFigma" target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
            </a>
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 top-14 z-40 w-72 border-r bg-background transition-transform lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}