const INFO = [
  "Fast delivery — 1-5 days*",
  "Free returns — 30 days",
  "$20 — one price for a delivery ",
  "Free delivery — from $1000",
];
export function DeliveryInfo() {
  return (
    <div className="flex h-fit w-full max-w-md grow flex-col rounded-2xl bg-bg-secondary p-4 font-medium">
      {INFO.map((info) => (
        <p
          key={info}
          className="flex min-w-fit items-center gap-2 px-2 before:block before:size-2 before:rounded-full before:bg-red"
        >
          {info}
        </p>
      ))}
    </div>
  );
}
