import type { Post } from "contentlayer/generated";

import { EmptyPosts, PostCard, PostGridCard } from "../../post-page/components";

type BlogResultsProps = {
  posts: Post[];
};

export function BlogResults({ posts }: BlogResultsProps) {
  if (posts.length === 0) {
    return <EmptyPosts />;
  }

  return (
    <PostGridCard>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </PostGridCard>
  );
}
