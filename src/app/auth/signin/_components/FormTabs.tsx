"use client";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import SignInForm from "@/components/forms/SignInForm/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm/SignUpForm";

enum Tab {
  SIGN_IN = "signin",
  SIGN_UP = "signup",
}

export default function FormTabs() {
  const [selectedTab, setSelectedTab] = React.useState<Tab>(Tab.SIGN_IN);

  return (
    <Tabs
      defaultValue={selectedTab}
      value={selectedTab}
      className="flex size-full flex-col gap-4"
      onValueChange={(v) =>
        setSelectedTab(v === Tab.SIGN_IN ? Tab.SIGN_IN : Tab.SIGN_UP)
      }
    >
      <h3 className="text-center">
        {selectedTab === Tab.SIGN_IN ? "Welcome back!" : "Register now!"}
      </h3>
      <TabsList className="flex-row rounded-2xl bg-black p-1 text-text-light *:w-auto *:rounded-xl *:border-none *:leading-5">
        <TabsTrigger
          value={Tab.SIGN_IN}
          className="data-[state=active]:bg-bg-primary data-[state=active]:text-text-primary"
        >
          Sign In
        </TabsTrigger>
        <TabsTrigger
          value={Tab.SIGN_UP}
          className="data-[state=active]:bg-bg-primary data-[state=active]:text-text-primary"
        >
          Sign Up
        </TabsTrigger>
      </TabsList>
      <div className="h-full *:h-full">
        <TabsContent value={Tab.SIGN_IN}>
          <SignInForm />
        </TabsContent>
        <TabsContent value={Tab.SIGN_UP}>
          <SignUpForm />
        </TabsContent>
      </div>
    </Tabs>
  );
}
