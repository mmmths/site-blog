import Image from "next/image";

type PostHeaderProps = {
  image: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
};

export function PostHeader({ image, title, date, author }: PostHeaderProps) {
  return (
    <>
      <figure className="relative aspect-[16/7] w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </figure>
      <header className="space-y-8 px-6 py-8 md:px-12 md:py-10">
        <h1 className="max-w-3xl text-heading-lg text-gray-100 md:text-heading-xl">
          {title}
        </h1>
        <div className="flex items-center gap-3">
          <Image
            src={author.avatar}
            alt={author.name}
            width={40}
            height={40}
            className="rounded-full border border-blue-200 object-cover"
          />
          <div>
            <p className="text-body-sm text-gray-200">{author.name}</p>
            <p className="text-body-xs text-gray-300">Publicado em {date}</p>
          </div>
        </div>
      </header>
    </>
  );
}