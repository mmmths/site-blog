"use client";
import { Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";

import { BlogHeader } from "./components/blog-header";
import { BlogResults } from "./components/blog-results";

export type BlogListProps = {
  posts: Post[];
};

export function BlogList({ posts }: BlogListProps) {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const postList = query
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <BlogHeader title={pageTitle} />
      <BlogResults posts={postList} />
    </div>
  );
}
