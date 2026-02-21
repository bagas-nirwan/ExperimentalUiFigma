import React from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="text-8xl text-muted-foreground/30">404</div>
        <div>
          <h1 className="text-2xl tracking-tight text-foreground">
            Page not found
          </h1>
          <p className="mt-2 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild className="gap-2">
            <Link to="/">
              <Home className="size-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link to="/docs">
              <ArrowLeft className="size-4" />
              Documentation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function DocsNotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="space-y-4 max-w-md">
        <div className="text-6xl text-muted-foreground/30">404</div>
        <h1 className="text-xl tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="text-sm text-muted-foreground">
          This documentation page doesn't exist. Try browsing the sidebar or go
          back to the introduction.
        </p>
        <Button asChild size="sm" className="gap-2">
          <Link to="/docs">
            <ArrowLeft className="size-4" />
            Back to Introduction
          </Link>
        </Button>
      </div>
    </div>
  );
}
