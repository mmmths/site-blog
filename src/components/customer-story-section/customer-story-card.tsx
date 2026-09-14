import Image, { type ImageProps } from "next/image";

export type CustomerStory = {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: ImageProps["src"];
  };
};

type CustomerStoryProps = {
  testimonial: CustomerStory;
};

export function CustomerStoryCard({ testimonial }: CustomerStoryProps) {
  return (
    <div className="flex flex-col justify-between gap-8 rounded-lg border border-gray-500 p-6 md:p-10">
      <p className="text-body-md italic text-gray-200">{testimonial.content}</p>

      <div className="flex items-center gap-3">
        <Image
          src={testimonial.author.avatar}
          alt={testimonial.author.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />

        <div className="flex flex-col">
          <strong className="text-body-sm text-gray-100">
            {testimonial.author.name}
          </strong>

          <span className="text-body-xs text-gray-300">
            {testimonial.author.role}
          </span>
        </div>
      </div>
    </div>
  );
}
