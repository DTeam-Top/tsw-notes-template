import { useEffect, useRef } from "react";

interface PagefindUIOptions {
  element: HTMLElement | null;
  showImages?: boolean;
  debounceTimeoutMs?: number;
  minQueryLength?: number;
  processTerm?: (term: string) => string;
  bundlePath?: string;
  translations?: {
    placeholder?: string;
    clear_search?: string;
    load_more?: string;
    search_label?: string;
    filters_label?: string;
    zero_results?: string;
    many_results?: string;
    one_result?: string;
    searching?: string;
  };
}

export default function SearchBar() {
  const searchInput = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import pagefind UI
    import("@pagefind/default-ui").then(module => {
      new module.PagefindUI({
        element: searchInput.current,
        showImages: false,
        debounceTimeoutMs: 100, // Reduce delay
        minQueryLength: 1, // Set minimum query length to 1 character
        bundlePath: "/pagefind/", // Explicitly set bundle path
        processTerm: (term: string) => term.trim(), // Process search term
        translations: {
          placeholder: "Search articles...",
          clear_search: "Clear",
          load_more: "Load more",
          search_label: "Search",
          filters_label: "Filters",
          zero_results: 'No results found for "[SEARCH_TERM]"',
          many_results: 'Found [COUNT] results for "[SEARCH_TERM]"',
          one_result: 'Found 1 result for "[SEARCH_TERM]"',
          searching: 'Searching for "[SEARCH_TERM]"...',
        },
      } as PagefindUIOptions);
    });
  }, []);

  return (
    <div className="pagefind-ui" ref={searchInput}>
      {/* Pagefind UI will be rendered here */}
    </div>
  );
}
