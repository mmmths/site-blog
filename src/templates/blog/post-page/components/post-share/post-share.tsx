import { cn } from "cn";
import { useState } from "react";
import type { Post } from "contentlayer/generated";

import { Link2 } from "lucide-react";
import { useShare } from "@/hooks";
import { buttonVariants } from "@/components/ui/button";

type PostShareProps = {
  post: Post;
};

export function PostShare({ post }: PostShareProps) {
  const [copied, setCopied] = useState(false);
  const postPath = `/blog/${post.slug}`;

  const { shareButtons } = useShare({
    url: postPath,
    title: post.title
  });

  async function handleCopyLink() {
    await navigator.clipboard.writeText(window.location.origin + postPath);
    setCopied(true);
  }

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700 p-4 md:p-6">
        <h2 className="mb-4 text-heading-xs text-gray-100">Compartilhar</h2>
        <div className=" space-y-3">
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

          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center gap-3 rounded-md border border-gray-400 px-3 py-2 text-left text-body-sm text-gray-200 transition-colors hover:border-blue-300 hover:text-blue-200"
          >
            <Link2 className="size-4" />{" "}
            {copied ? "Link copiado" : "Copiar link"}
          </button>
        </div>
      </div>
    </aside>
  );
}
