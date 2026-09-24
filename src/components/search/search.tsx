import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { SearchInput } from "./search-input";
import { useDebounce } from "@/hooks/use-debounce";

export function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";

  const [search, setSearch] = useState(query);
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    if (debouncedSearch === query) return;

    const nextUrl = new URLSearchParams();

    if (debouncedSearch) {
      nextUrl.set("q", debouncedSearch);
    }

    void router.replace(
      nextUrl.size > 0 ? `/blog?${nextUrl.toString()}` : "/blog",
      { scroll: false }
    );
  }, [debouncedSearch, query, router]);

  function handleSearch(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = search.trim();

    if (!value) {
      setSearch("");
      void router.replace("/blog", { scroll: false });
      return;
    }

    setSearch(value);
    const nextUrl = new URLSearchParams({ q: value });
    void router.push(`/blog?${nextUrl.toString()}`);
  }

  function handleResetInput() {
    setSearch("");
    void router.replace("/blog", { scroll: false });
  }

  return (
    <form role="search" onSubmit={handleSearch} className="w-full md:w-60">
      <SearchInput
        value={search}
        onChange={setSearch}
        onClear={handleResetInput}
      />
    </form>
  );
}
