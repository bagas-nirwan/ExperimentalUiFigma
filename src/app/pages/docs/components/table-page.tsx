import React, { useState } from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from "../../../components/ui/table";
import { ArrowUpDown } from "lucide-react";

const invoices = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
];

export function TablePage() {
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sorted = [...invoices].sort((a, b) => {
    const aVal = parseFloat(a.amount.replace("$", "").replace(",", ""));
    const bVal = parseFloat(b.amount.replace("$", "").replace(",", ""));
    return sortDir === "asc" ? aVal - bVal : bVal - aVal;
  });

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Table</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A responsive table component for displaying structured data in rows and columns.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A simple table with headers and data rows."
        code={`<Table>
  <TableCaption>A list of recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map(invoice => (
      <TableRow key={invoice.id}>
        <TableCell>{invoice.id}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{invoice.method}</TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
      >
        <Table>
          <TableCaption>A list of recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="text-foreground">{inv.id}</TableCell>
                <TableCell>
                  <Badge
                    variant={inv.status === "Paid" ? "default" : inv.status === "Pending" ? "secondary" : "outline"}
                    className={inv.status === "Paid" ? "bg-green-600 border-transparent text-white" : ""}
                  >
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right text-foreground">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentPreview>

      <ComponentPreview
        title="Sortable"
        description="Click column headers to sort data."
        code={`<TableHead>
  <button onClick={toggleSort} className="flex items-center gap-1">
    Amount <ArrowUpDown className="size-3.5" />
  </button>
</TableHead>`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">
                <button
                  onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  Amount
                  <ArrowUpDown className="size-3.5" />
                </button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="text-foreground">{inv.id}</TableCell>
                <TableCell>
                  <Badge
                    variant={inv.status === "Paid" ? "default" : "secondary"}
                    className={inv.status === "Paid" ? "bg-green-600 border-transparent text-white" : ""}
                  >
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right text-foreground">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "className", type: "string", description: "Additional CSS classes for the table." },
            { name: "children", type: "ReactNode", required: true, description: "Table content (TableHeader, TableBody, etc.)." },
          ]}
        />
      </div>
    </div>
  );
}
