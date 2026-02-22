import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./lib/theme-context";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}