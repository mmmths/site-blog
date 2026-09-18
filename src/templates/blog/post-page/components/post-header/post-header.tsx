import { Avatar } from "@/components/avatar";
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
      <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8">
        <h1 className=" mb-8 text-balance text-heading-lg text-gray-100 md:text-heading-xl lg:text-heading-xl">
          {title}
        </h1>
        <Avatar.Container>
          <Avatar.Image src={author.avatar.trim()} alt={title} size="sm" />
          <Avatar.Content>
            <Avatar.Title>{author.name}</Avatar.Title>
            <Avatar.Description>
              Publicado em
              <time dateTime={date}> {date}</time>
            </Avatar.Description>
          </Avatar.Content>
        </Avatar.Container>
      </header>
    </>
  );
}
