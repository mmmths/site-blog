import Link from "next/link";
import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { PostContainer } from "./posts";

export default function PostPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const post = allPosts.find((post) =>
    post.slug.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <main className="mt-32 text-gray-100">
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
            <span className="text-blue-200 text-action-sm">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PostContainer image={post?.image ?? ""} title={post?.title ?? ""} />
    </main>
  );
}
