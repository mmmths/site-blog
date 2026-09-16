import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";

import { PostPage } from "@/templates/blog/post-page";

export default function BlogPostPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!post) {
    return null;
  }

  return <PostPage post={post} />;
}
