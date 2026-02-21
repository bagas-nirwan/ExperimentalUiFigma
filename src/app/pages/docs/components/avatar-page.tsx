import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";

export function AvatarPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Avatar</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          An image element with a fallback for representing a user. Supports images and initials.
        </p>
      </div>

      <ComponentPreview
        title="With Fallback"
        description="Shows initials when no image is available."
        code={`<Avatar>
  <AvatarFallback>SC</AvatarFallback>
</Avatar>`}
      >
        <div className="flex items-center justify-center gap-4">
          <Avatar>
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Control the avatar size using Tailwind classes."
        code={`<Avatar className="size-8">
  <AvatarFallback className="text-xs">SM</AvatarFallback>
</Avatar>
<Avatar className="size-12">
  <AvatarFallback>MD</AvatarFallback>
</Avatar>
<Avatar className="size-16">
  <AvatarFallback className="text-lg">LG</AvatarFallback>
</Avatar>`}
      >
        <div className="flex items-center justify-center gap-4">
          <Avatar className="size-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="size-14">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="size-20">
            <AvatarFallback className="text-lg">XL</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Avatar Group"
        description="Stack multiple avatars together."
        code={`<div className="flex -space-x-3">
  {users.map(user => (
    <Avatar className="border-2 border-background">
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
  ))}
</div>`}
      >
        <div className="flex items-center justify-center">
          <div className="flex -space-x-3">
            {["SC", "JD", "AR", "ML", "+3"].map((initials) => (
              <Avatar key={initials} className="border-2 border-background size-10">
                <AvatarFallback className="text-xs">{initials}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "className", type: "string", description: "Additional CSS classes. Use to control size." },
            { name: "src", type: "string", description: "Image URL (on AvatarImage)." },
            { name: "alt", type: "string", description: "Alt text (on AvatarImage)." },
          ]}
        />
      </div>
    </div>
  );
}
