import React from "react";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { PropsTable } from "../../../components/docs/props-table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";

export function TabsPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary" className="mb-3">Component</Badge>
        <h1 className="text-3xl tracking-tight text-foreground">Tabs</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A set of layered sections of content, known as tab panels, displayed one at a time.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings...</TabsContent>
  <TabsContent value="password">Password settings...</TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="account" className="max-w-lg mx-auto">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm">Name</Label>
                  <Input defaultValue="Sarah Chen" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Username</Label>
                  <Input defaultValue="@sarahchen" />
                </div>
                <Button size="sm">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm">Current Password</Label>
                  <Input type="password" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">New Password</Label>
                  <Input type="password" />
                </div>
                <Button size="sm">Update Password</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Configure how you receive notifications.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Notification preferences will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <div>
        <h2 className="text-xl text-foreground mb-4">API Reference</h2>
        <PropsTable
          data={[
            { name: "value", type: "string", description: "Controlled active tab." },
            { name: "defaultValue", type: "string", description: "Default active tab." },
            { name: "onValueChange", type: "(value: string) => void", description: "Callback when tab changes." },
            { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Tab orientation." },
          ]}
        />
      </div>
    </div>
  );
}
