import Image from "next/image";

type PostContainerProps = {
  post: {
    image: string;
    title: string;
  };
};

export function PostContainer({ post: { image, title } }: PostContainerProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
      <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
        <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
          <Image src={image} alt={title} fill className="object-cover" />
        </figure>
      </article>
    </div>
  );
}
