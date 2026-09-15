import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDebounce } from "@/hooks/use-debounce";
import { SearchInput } from "./search-input";

export function Search() {
  const router = useRouter();
  const query = typeof router.query.q === "string" ? router.query.q : "";

  const [search, setSearch] = useState(query);
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    if (!router.isReady) return;
    if (debouncedSearch === query) return;

    void router.replace(
      {
        pathname: "/blog",
        query: debouncedSearch ? { q: debouncedSearch } : {}
      },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [debouncedSearch, query, router]);

  function handleSearch(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = search.trim();

    if (!value) {
      setSearch("");
      return;
    }

    setSearch(value);
    void router.push({
      pathname: "/blog",
      query: { q: value }
    });
  }

  function handleResetInput() {
    setSearch("");
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
