import type { Post } from "contentlayer/generated";

import { PostBreadcrumb } from "./components/post-breadcrumb";
import { PostContainer } from "./components/post-container";

type PostPageProps = {
  post: Post;
};

export function PostPage({ post }: PostPageProps) {
  return (
    <main className="mt-32 text-gray-100">
      <div className="container space-y-12 px-4 md:px-8">
        <PostBreadcrumb title={post.title} />
        <PostContainer post={post} />
      </div>
    </main>
  );
}
