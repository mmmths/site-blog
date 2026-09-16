import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";

import { BlogHeader } from "./components/blog-header";
import { BlogResults } from "./components/blog-results";

export function BlogList() {
  const router = useRouter();
  const query = typeof router.query.q === "string" ? router.query.q.trim() : "";

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : allPosts;

  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <BlogHeader title={pageTitle} />
      <BlogResults posts={posts} />
    </div>
  );
}
