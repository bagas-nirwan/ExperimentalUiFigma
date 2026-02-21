import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  data: PropDef[];
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="text-xs">Prop</TableHead>
            <TableHead className="text-xs">Type</TableHead>
            <TableHead className="text-xs">Default</TableHead>
            <TableHead className="text-xs">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell>
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-1 text-xs text-destructive">*</span>
                )}
              </TableCell>
              <TableCell>
                <code className="text-xs font-mono text-muted-foreground">
                  {prop.type}
                </code>
              </TableCell>
              <TableCell>
                {prop.default ? (
                  <code className="text-xs font-mono text-muted-foreground">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-xs text-muted-foreground">-</span>
                )}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {prop.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
