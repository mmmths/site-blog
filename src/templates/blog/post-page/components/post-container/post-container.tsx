import type { Post } from "contentlayer/generated";
import { PostHeader } from "../post-header";
import { PostShare } from "../post-share";
import { Markdown } from "@/components/markdown";

type PostContainerProps = {
  post: Post;
};

export function PostContainer({ post }: PostContainerProps) {
  return (
    <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12">
      <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
        <PostHeader
          image={post.image}
          title={post.title}
          date={new Date(post.date).toLocaleDateString("pt-BR")}
          author={post.author}
        />
        <div className="prose prove-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
          <Markdown content={post.body.raw} />
        </div>
      </article>
      <PostShare slug={post.slug} />
    </div>
  );
}
