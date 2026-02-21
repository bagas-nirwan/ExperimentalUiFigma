import React, { useState, useEffect } from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";

export function ProgressPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Progress</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Displays an indicator showing the completion progress of a task.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Progress value={33} />`}
      >
        <div className="max-w-md mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-foreground">33%</span>
            </div>
            <Progress value={33} />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Animated"
        description="Progress bar with a continuously updating value."
        code={`const [progress, setProgress] = useState(0);
// Update progress in useEffect...
<Progress value={progress} />`}
      >
        <div className="max-w-md mx-auto space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Uploading...</span>
            <span className="text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Multiple Values"
        description="Show different progress levels."
        code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
      >
        <div className="max-w-md mx-auto space-y-4">
          {[
            { label: "Storage", value: 25 },
            { label: "Bandwidth", value: 50 },
            { label: "CPU", value: 75 },
            { label: "Memory", value: 90 },
          ].map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="text-foreground">{item.value}%</span>
              </div>
              <Progress value={item.value} />
            </div>
          ))}
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "value", type: "number", description: "Current progress value (0-100)." },
            { name: "max", type: "number", default: "100", description: "Maximum value." },
            { name: "className", type: "string", description: "Additional CSS classes." },
          ]}
        />
      </div>
    </div>
  );
}
