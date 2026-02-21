import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home";
import { DocLayout } from "./components/layout/doc-layout";
import { IntroductionPage } from "./pages/docs/introduction";
import { InstallationPage } from "./pages/docs/installation";
import { ThemingPage } from "./pages/docs/theming";
import { ButtonPage } from "./pages/docs/components/button-page";
import { InputPage } from "./pages/docs/components/input-page";
import { CardPage } from "./pages/docs/components/card-page";
import { DialogPage } from "./pages/docs/components/dialog-page";
import { SelectPage } from "./pages/docs/components/select-page";
import { CheckboxPage } from "./pages/docs/components/checkbox-page";
import { SwitchPage } from "./pages/docs/components/switch-page";
import { TabsPage } from "./pages/docs/components/tabs-page";
import { BadgePage } from "./pages/docs/components/badge-page";
import { AccordionPage } from "./pages/docs/components/accordion-page";
import { AlertPage } from "./pages/docs/components/alert-page";
import { AvatarPage } from "./pages/docs/components/avatar-page";
import { TooltipPage } from "./pages/docs/components/tooltip-page";
import { ProgressPage } from "./pages/docs/components/progress-page";
import { SliderPage } from "./pages/docs/components/slider-page";
import { TablePage } from "./pages/docs/components/table-page";
import { TextareaPage } from "./pages/docs/components/textarea-page";
import { RadioGroupPage } from "./pages/docs/components/radio-group-page";
import { SkeletonPage } from "./pages/docs/components/skeleton-page";
import { SheetPage } from "./pages/docs/components/sheet-page";
import { PopoverPage } from "./pages/docs/components/popover-page";
import { DropdownMenuPage } from "./pages/docs/components/dropdown-menu-page";
import { NotFoundPage, DocsNotFoundPage } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/docs",
    Component: DocLayout,
    children: [
      { index: true, Component: IntroductionPage },
      { path: "installation", Component: InstallationPage },
      { path: "theming", Component: ThemingPage },
      { path: "components/button", Component: ButtonPage },
      { path: "components/input", Component: InputPage },
      { path: "components/card", Component: CardPage },
      { path: "components/dialog", Component: DialogPage },
      { path: "components/select", Component: SelectPage },
      { path: "components/checkbox", Component: CheckboxPage },
      { path: "components/switch", Component: SwitchPage },
      { path: "components/tabs", Component: TabsPage },
      { path: "components/badge", Component: BadgePage },
      { path: "components/accordion", Component: AccordionPage },
      { path: "components/alert", Component: AlertPage },
      { path: "components/avatar", Component: AvatarPage },
      { path: "components/tooltip", Component: TooltipPage },
      { path: "components/progress", Component: ProgressPage },
      { path: "components/slider", Component: SliderPage },
      { path: "components/table", Component: TablePage },
      { path: "components/textarea", Component: TextareaPage },
      { path: "components/radio-group", Component: RadioGroupPage },
      { path: "components/skeleton", Component: SkeletonPage },
      { path: "components/sheet", Component: SheetPage },
      { path: "components/popover", Component: PopoverPage },
      { path: "components/dropdown-menu", Component: DropdownMenuPage },
      { path: "*", Component: DocsNotFoundPage },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);