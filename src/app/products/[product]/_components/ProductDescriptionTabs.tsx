import { ScrollArea } from "../../../../components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { IProduct } from "../../../../types/product";

interface ProductDescriptionTabsProps {
  product: IProduct;
}
const DELIVERY = [
  "fast delivery — 1-5 days*",
  "$20 one price for delivery",
  "free shipping from $1000",
  "swift processing",
  "careful packaging",
  "real-time tracking",
  "timely shipping",
  "International shipping",
  "responsive customer support",
  "positive post-purchase experience",
];

export default function ProductDescriptionTabs({
  product,
}: ProductDescriptionTabsProps) {
  return (
    <Tabs defaultValue="delivery">
      <TabsList className="border-t-2px w-full grow flex-col">
        <TabsTrigger value="about">About the product</TabsTrigger>
        <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
        <TabsTrigger value="delivery">Delivery</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <ScrollArea className="h-52 w-full break-words pr-2">
          {product.discription}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="characteristics">
        <ScrollArea className="h-52 w-full break-words pr-2">
          {product.characteristic.split(";").map((item) => {
            const [key, value] = item.split(":");
            return (
              <p
                key={key}
                className="flex justify-between decoration-red hover:underline"
              >
                <span className="capitalize text-gray">{key}</span>{" "}
                <span className="m-auto font-bold">{value}</span>
              </p>
            );
          })}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="delivery">
        <ScrollArea className="h-52 w-full break-words pr-2">
          <div className="flex flex-wrap">
            {DELIVERY.map((item, index) => (
              <p
                key={index}
                className="flex min-w-fit basis-full items-center gap-2 px-2 before:block before:size-2 before:rounded-full before:bg-red sm:basis-1/2"
              >
                {item}
              </p>
            ))}
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
