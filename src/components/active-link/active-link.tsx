import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

type ActiveLinkProps = React.ComponentProps<typeof Link>;

export function ActiveLink({
  children,
  href,
  className,
  ...rest
}: ActiveLinkProps) {
  const router = useRouter();

  const currentPath = router.asPath.split("?")[0];

  const hrefPath =
    typeof href === "string" ? href : (href.pathname?.toString() ?? "");

  const isCurrentLink =
    hrefPath === "/"
      ? currentPath === "/"
      : currentPath === hrefPath || currentPath.startsWith(`${hrefPath}/`);

  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isCurrentLink ? "text-blue-500" : "text-muted-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}
