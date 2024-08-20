import { ServerOff } from "lucide-react";

function CantLoadError() {
  return (
    <div className="flex min-h-full w-full self-stretch">
      <div className="m-auto flex w-[20%] flex-wrap items-center justify-center gap-4">
        <ServerOff size="2rem" />
        <h3>Can&apos;t load data</h3>
      </div>
    </div>
  );
}
export default CantLoadError;
