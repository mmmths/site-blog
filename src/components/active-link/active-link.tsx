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

  const isCurrentLink = router.asPath === href || router.asPath === rest.as;

  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isCurrentLink ? "text-blue-500" : "text-gray-100",
        className
      )}
    >
      {children}
    </Link>
  );
}
