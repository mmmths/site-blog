import Link from "next/link";
import { FileQuestion, Search } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "cn";

export default function NotFound() {
  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center px-4 flex-col"
      )}
    >
      <div className={cn("max-w-md w-full text-center")}>
        <FileQuestion size={64} className={cn("text-gray-100 mx-auto mb-6")} />
      </div>
      <div className={cn("relative inline-block mb-3 font-sans")}>
        <span
          className={cn(
            "text-8xl font-bold text-white inline-block",
            "transform -rotate-12 -translate-y-2 -translate-x-1"
          )}
        >
          4
        </span>
        <span className={cn("text-8xl font-bold text-white inline-block")}>
          0
        </span>
        <span className={cn("text-8xl font-bold text-white inline-block")}>
          4
        </span>
      </div>
      <p className={cn("text-gray-100 mb-8")}>Page not found</p>
      <div className={cn("mt-6 flex justify-center gap-4")}>
        <Link href="/" className={cn(buttonVariants({ variant: "default" }))}>
          Home
        </Link>
        <Link
          href="/blog?q="
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          <Search size={16} />
          Search posts
        </Link>
      </div>
    </div>
  );
}
