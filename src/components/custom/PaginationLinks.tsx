import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
interface IPaginationItem {
  href: string;
  page: number;
}
interface PaginationLinksProps {
  items: IPaginationItem[];
  currentPage?: number;
  firstPage?: IPaginationItem;
  lastPage?: IPaginationItem;
}

export function PaginationLinks(props: PaginationLinksProps) {
  const currentIndex = props.items.findIndex(
    (item) => item.page === props.currentPage,
  );
  if (currentIndex === -1 || props.items.length < 2) return null;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={props.items.at(currentIndex - 1)?.href || "#"}
            isActive={currentIndex > 0}
          />
        </PaginationItem>
        {props.firstPage &&
          !props.items.some((v) => v.page == props.firstPage?.page) && (
            <>
              <PaginationItem>
                <PaginationLink href={props.firstPage.href}>
                  {props.firstPage.page}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}
        {props.items.map((item) => (
          <PaginationItem key={item.page}>
            <PaginationLink
              href={item.href}
              isCurrent={item.page === props.currentPage}
            >
              {item.page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {props.lastPage &&
          !props.items.some((v) => v.page == props.lastPage?.page) && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={props.lastPage.href}>
                  {props.lastPage.page}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
        <PaginationItem>
          <PaginationNext
            href={props.items.at(currentIndex + 1)?.href || "#"}
            isActive={currentIndex < props.items.length - 1}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
