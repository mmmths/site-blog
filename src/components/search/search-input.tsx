import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

export function SearchInput({
  value,
  onClear,
  onChange,
  inputRef
}: SearchInputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;

    onChange(value);
  }

  return (
    <div className="group relative w-full md:w-60">
      <SearchIcon
        className={cn(
          "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
          "text-gray-300 transition-colors duration-200",
          "group-focus-within:text-blue-300",
          value && "text-blue-300"
        )}
      />
      <input
        ref={inputRef}
        type="search"
        aria-label="Buscar posts"
        placeholder="Search"
        value={value}
        onChange={handleChange}
        className={cn(
          "h-10 w-full rounded-md border border-gray-400 bg-transparent",
          "pl-9 pr-9 text-body-sm text-gray-100 outline-none",
          "transition-all duration-200",
          "focus:border-blue-300 focus:ring-1 focus:ring-blue-300",
          "placeholder:text-body-sm placeholder:!text-gray-200",
          "placeholder:!opacity-100",
          "[&::-webkit-search-cancel-button]:hidden"
        )}
      />
      {value && (
        <button
          type="button"
          aria-label="Clean search"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
        >
          <CircleX className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
