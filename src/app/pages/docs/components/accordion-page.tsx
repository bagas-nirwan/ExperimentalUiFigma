import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";

const faqItems = [
  { q: "Is it accessible?", a: "Yes. It adheres to the WAI-ARIA design pattern for accordions. Keyboard navigation and screen reader support are built-in." },
  { q: "Is it styled?", a: "Yes. It comes with default styles that match the design system. You can customize every aspect using Tailwind CSS classes." },
  { q: "Is it animated?", a: "Yes. It uses CSS animations for smooth open/close transitions. You can customize the animation duration and easing." },
  { q: "Can I use it with forms?", a: "Absolutely. Accordion sections can contain any content, including form elements, images, and other components." },
];

export function AccordionPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Accordion</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal an associated section of content.
        </p>
      </div>

      <ComponentPreview
        title="Default (Single)"
        description="Only one item can be open at a time."
        code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion type="single" collapsible className="max-w-lg mx-auto">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ComponentPreview>

      <ComponentPreview
        title="Multiple"
        description="Multiple items can be open simultaneously."
        code={`<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>First Item</AccordionTrigger>
    <AccordionContent>Content...</AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion type="multiple" className="max-w-lg mx-auto">
          {faqItems.slice(0, 3).map((item, i) => (
            <AccordionItem key={i} value={`multi-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "type", type: '"single" | "multiple"', required: true, description: "Whether one or multiple items can be opened." },
            { name: "collapsible", type: "boolean", default: "false", description: "Allow closing all items (single mode only)." },
            { name: "value", type: "string | string[]", description: "Controlled open items." },
            { name: "defaultValue", type: "string | string[]", description: "Default open items." },
          ]}
        />
      </div>
    </div>
  );
}
