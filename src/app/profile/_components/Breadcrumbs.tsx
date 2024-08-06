"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LINKS } from "@/utils/links";
import { usePathname } from "next/navigation";
import { PROFILE_TABS } from "../layout";

interface BreadcrumbsProps extends React.ComponentProps<typeof Breadcrumb> {}

export function Breadcrumbs({ ...props }: BreadcrumbsProps) {
  const pathname = usePathname();
  const current =
    Object.values(PROFILE_TABS).find((tab) => tab.link === pathname) ||
    PROFILE_TABS.profile;

  return (
    <Breadcrumb {...props}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={LINKS.HOME}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={LINKS.CART}>Profile</BreadcrumbLink>
        </BreadcrumbItem>
        {current && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{current.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
