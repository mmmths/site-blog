import { Search } from "@/components/search";

type BlogHeaderProps = {
  title: string;
};

export function BlogHeader({ title }: BlogHeaderProps) {
  return (
    <header className="pb-14">
      <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-4 md:px-0">
          <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag text-cyan-100 md:text-left">
            BLOG
          </span>
          <h1 className="max-w-2xl text-start text-heading-lg text-gray-100 text-balance md:text-left md:text-heading-xl">
            {title}
          </h1>
        </div>
        <Search />
      </div>
    </header>
  );
}
