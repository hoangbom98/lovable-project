
import React from "react";

const POPULAR_SEARCH_TERMS = [
  "password",
  "image",
  "calculator",
  "converter",
  "generator",
];

const PopularSearches = ({
  onSearch,
}: {
  onSearch: (term: string) => void;
}) => (
  <div
    className="flex flex-wrap justify-center gap-2 text-sm items-center"
    aria-label="Popular searches"
    role="group"
    aria-describedby="popular-search-desc"
  >
    <span
      className="text-foreground/60 flex items-center h-8 mr-1 font-medium"
      id="popular-search-desc"
    >
      Popular searches:
    </span>
    {POPULAR_SEARCH_TERMS.map((term) => (
      <button
        key={term}
        onClick={() => onSearch(term)}
        className={`
          capitalize
          rounded-full
          px-4 py-1
          font-semibold
          border
          bg-white
          border-blue-100
          text-blue-600
          shadow-sm
          transition-all
          duration-150
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-300/70
          hover:bg-blue-50
          hover:border-blue-300
          hover:text-blue-700
          active:scale-95
          h-8 flex items-center
          dark:bg-blue-600
          dark:text-white
          dark:border-white
          dark:hover:bg-blue-500
          dark:hover:text-white
          dark:hover:border-white
        `}
        tabIndex={0}
        type="button"
        aria-label={`Search for ${term}`}
        style={{ boxShadow: "0 0.5px 7px 0 rgba(80,110,210,0.03)" }}
      >
        {term.charAt(0).toUpperCase() + term.slice(1)}
      </button>
    ))}
  </div>
);

export default PopularSearches;
