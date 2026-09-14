import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";

export function Search() {
  const router = useRouter();
  const query = typeof router.query.q === "string" ? router.query.q : "";

  function handleSearch(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query)}`);
    }
  }

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.currentTarget.value;
    router.replace(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false
    });
  }

  return (
    <form className="relative group " onSubmit={handleSearch}>
      <SearchIcon
        className={cn(
          "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
          "text-gray-300 transition-colors duration-200 group-focus-within:text-blue-300",
          query ? "text-blue-300" : ""
        )}
      />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        className={cn(
          "h-10 w-72 rounded-md border border-gray-400 bg-transparent",
          "pl-9 text-body-sm text-gray-100 outline-none transition-all",
          "duration-200 focus-within:border-blue-300",
          "focus-within:ring-1 focus-within:ring-blue-300",
          "placeholder:!text-gray-200 placeholder:text-body-sm placeholder:!opacity-100"
        )}
      />
    </form>
  );
}
