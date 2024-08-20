"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { PaginationLinks } from "@/components/custom/PaginationLinks";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
}

function generatePageLink(
  page: number,
  pathname: string,
  search: URLSearchParams,
) {
  search.set("page", page.toString());

  return `${pathname}?${search.toString()}`;
}

export default function Pagination({ currentPage, lastPage }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = new URLSearchParams(searchParams.toString());
  const items = [
    {
      href: generatePageLink(currentPage - 1, pathname, search),
      page: currentPage - 1,
    },
    {
      href: generatePageLink(currentPage, pathname, search),
      page: currentPage,
    },
    {
      href: generatePageLink(currentPage + 1, pathname, search),
      page: currentPage + 1,
    },
  ];

  return (
    <PaginationLinks
      items={items.filter((item) => item.page !== 0 && item.page <= lastPage)}
      firstPage={{ href: generatePageLink(1, pathname, search), page: 1 }}
      lastPage={{
        href: generatePageLink(lastPage, pathname, search),
        page: lastPage,
      }}
      currentPage={currentPage}
    />
  );
}
