"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type ActiveLinkProps = React.ComponentProps<typeof Link>;

export function ActiveLink({
  children,
  href,
  className,
  ...rest
}: ActiveLinkProps) {
  const pathName = usePathname();
  const linkPath = (typeof href === "string" ? href : href.pathname) ?? "";
  const isActive =
    pathName === linkPath || pathName?.startsWith(`${linkPath}/`);

  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isActive ? "text-blue-500" : "text-gray-100",
        className
      )}
    >
      {children}
    </Link>
  );
}
