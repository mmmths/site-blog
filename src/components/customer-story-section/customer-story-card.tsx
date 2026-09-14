import Image, { type ImageProps } from "next/image";

export type CustomerStory = {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: ImageProps["src"];
  };
};

export function CustomerStoryCard({
  customerStory
}: {
  customerStory: CustomerStory;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12">
      <p className="text-balance text-gray-200">{customerStory.content}</p>

      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={customerStory.author.avatar}
            alt={customerStory.author.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <strong className="text-sm text-gray-200">
            {customerStory.author.name}
          </strong>

          <span className="text-xs text-gray-300">
            {customerStory.author.role}
          </span>
        </div>
      </div>
    </div>
  );
}
