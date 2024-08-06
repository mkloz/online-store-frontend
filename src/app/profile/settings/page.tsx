"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1>Settings</h1>
      <Tabs className="items-start" defaultValue="contacts">
        <TabsList className="border-t-2px w-fit flex-col *:font-medium">
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="delivery">Delivery address</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="contacts">Contacts</TabsContent>
        <TabsContent value="delivery">Delivery</TabsContent>
        <TabsContent value="password">Password</TabsContent>
      </Tabs>
    </div>
  );
}
