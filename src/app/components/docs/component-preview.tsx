import React, { useState } from "react";
import { CodeBlock } from "./code-block";
import { Eye, Code } from "lucide-react";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  title?: string;
  description?: string;
}

export function ComponentPreview({
  children,
  code,
  title,
  description,
}: ComponentPreviewProps) {
  const [view, setView] = useState<"preview" | "code">("preview");

  return (
    <div className="rounded-xl border overflow-hidden">
      {(title || description) && (
        <div className="px-6 pt-5 pb-2">
          {title && (
            <h3 className="text-sm text-foreground">{title}</h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <div className="flex items-center gap-1 border-b px-4">
        <button
          onClick={() => setView("preview")}
          className={`flex items-center gap-1.5 px-3 py-2.5 text-sm transition-colors ${
            view === "preview"
              ? "border-b-2 border-foreground text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Eye className="size-3.5" />
          Preview
        </button>
        <button
          onClick={() => setView("code")}
          className={`flex items-center gap-1.5 px-3 py-2.5 text-sm transition-colors ${
            view === "code"
              ? "border-b-2 border-foreground text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Code className="size-3.5" />
          Code
        </button>
      </div>
      {view === "preview" ? (
        <div className="flex min-h-[200px] items-center justify-center p-8 bg-background">
          <div className="w-full max-w-2xl">{children}</div>
        </div>
      ) : (
        <div className="border-0 [&>div]:rounded-none [&>div]:border-0">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
}
