export default function Loading() {
  const qubeStyle =
    "animate-morph block h-full w-full origin-bottom rounded-[25%] bg-black";
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="*:animate-jump flex w-fit items-end justify-between gap-2 pt-4 *:size-2 *:shrink-0">
        <div>
          <div className={qubeStyle}></div>
        </div>
        <div style={{ animationDelay: "-0.63s" }}>
          <div className={qubeStyle} style={{ animationDelay: "-0.63s" }}></div>
        </div>
        <div style={{ animationDelay: "-0.35s" }}>
          <div className={qubeStyle} style={{ animationDelay: "-0.35s" }}></div>
        </div>
      </div>
    </div>
  );
}
