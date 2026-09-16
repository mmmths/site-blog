import Image from "next/image";
import Link from "next/link";
import type { Post } from "contentlayer/generated";

import { cn } from "@/lib/utils";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const { slug, title, description, image, date, author } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "flex h-full w-full max-w-2xl flex-col rounded-[12px]",
        "border-[1px] border-gray-400 bg-gray-600 overflow-hidden",
        "transition-all duration-300 hover:border-[1px] hover:border-blue-300"
      )}
    >
      <div className="flex flex-1 flex-col overflow-hidden rounded-md p-2">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 backdrop-blur-sm rounded-bl-[10px]">
            <span className="text-gray-300 text-body-xs">
              {new Date(date).toLocaleDateString("pt-BR")}
            </span>
          </div>
          <Image
            src={image.trim()}
            alt={title}
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-[8px]"
          />
        </div>
        <div className={cn("mt-4 flex flex-1 flex-col gap-4 px-2")}>
          <h2 className="min-h-[3rem] text-heading-sm text-gray-100 line-clamp-3">
            {title}
          </h2>
          <p className="text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>
          <div className="mt-auto flex items-center gap-3 border-t border-gray-400 py-4">
            <div
              className={cn(
                "relative h-5 w-5 md:h-6 md:w-6 overflow-hidden",
                "rounded-full border-blue-200 border-[1px]"
              )}
            >
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <span className="text-body-sm text-gray-300">{author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
