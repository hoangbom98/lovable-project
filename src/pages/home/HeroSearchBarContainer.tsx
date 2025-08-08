
import { useRef, useState, useEffect } from "react";
import { useToolSearch } from "@/hooks/useToolSearch";
import { useNavigate } from "react-router-dom";
import SearchBar from "@/components/layout/SearchBar";
import PopularSearches from "./PopularSearches";

const HeroSearchBarContainer = () => {
  const {
    searchQuery,
    setSearchQuery,
    results: searchResults,
    performSearch,
    debouncedSearch,
    clearSearch,
  } = useToolSearch();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle selecting a search result
  const handleResultSelect = (item: any) => {
    if (item?.path || item?.id) {
      navigate(item.path || `/tool/${item.id}`);
      setIsSearchFocused(false);
      clearSearch();
    }
  };

  // Handle clicks outside search to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div
        ref={searchRef}
        className="relative max-w-screen-lg mx-auto mb-12"
        aria-label="Search for tools"
      >
        <SearchBar
          value={searchQuery}
          onValueChange={(val) => {
            setSearchQuery(val);
            debouncedSearch(val);
          }}
          onClear={() => {
            clearSearch();
            setIsSearchFocused(false);
          }}
          dropdownItems={searchResults.map(tool => ({
            id: tool.id,
            label: tool.name,
            ...tool
          }))}
          onEnter={handleResultSelect}
          className=""
          emptyState={searchQuery && searchResults.length === 0 ? (
            <div className="py-6 px-4 text-center text-muted-foreground italic">
              No tools found matching "{searchQuery}"
            </div>
          ) : undefined}
          autoFocus={false}
          inputRef={undefined}
          placeholder="Search tools..."
          aria-label="Search for a tool"
        />
      </div>
      <PopularSearches
        onSearch={(term) => {
          setSearchQuery(term);
          performSearch(term);
          setIsSearchFocused(true);
        }}
      />
    </>
  );
};

export default HeroSearchBarContainer;
