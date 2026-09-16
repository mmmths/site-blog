import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

type PostBreadcrumbProps = {
  title: string;
};

export function PostBreadcrumb({ title }: PostBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-action-sm"
            render={<Link href="/blog" />}
          >
            Blog
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <span className="text-action-sm text-blue-200">{title}</span>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}