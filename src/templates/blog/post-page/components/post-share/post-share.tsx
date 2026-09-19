import { cn } from "cn";
import type { Post } from "contentlayer/generated";

import { useShare } from "@/hooks";
import { buttonVariants } from "@/components/ui/button";

type PostShareProps = {
  post: Post;
};

export function PostShare({ post }: PostShareProps) {
  const postPath = `/blog/${post.slug}`;

  const { shareButtons } = useShare({
    url: postPath,
    title: post.title
  });

  return (
    <aside className="w-full min-w-0 space-y-6">
      <div className="w-full rounded-lg bg-gray-700 p-4 md:p-6">
        <h2 className="mb-4 text-heading-xs text-gray-100">Compartilhar</h2>
        <div className="space-y-3">
          {shareButtons.map((provider) => (
            <button
              type="button"
              key={provider.provider}
              onClick={provider.action}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-2"
              )}
            >
              {provider.icon}
              {provider.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
