import { cn } from "cn";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      className={cn(
        "min-h-[400px] flex flex-col items-center justify-center px-4"
      )}
    >
      <div className={cn("relative")}>
        <Loader2 size={62} className={cn("text-gray-300 animate-spin")} />
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full rounded-full",
            "border-t-2 border-cyan-100 animated-[spin_3s_linear_infinite]"
          )}
        ></div>
      </div>
    </div>
  );
}
