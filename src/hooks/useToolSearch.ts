
import { useState, useRef } from "react";
import { CATEGORIES } from "@/data/categories";

// Type for search result (flattened with category info)
export interface ToolSearchResult {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  categoryColor: string;
  description: string;
  path?: string;
  score: number;
}

// Main hook
export function useToolSearch(initialQuery: string = "") {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState<ToolSearchResult[]>([]);
  const debounceTimeout = useRef<NodeJS.Timeout>();

  // All tools (flattened)
  const allTools: ToolSearchResult[] = CATEGORIES.flatMap((category) =>
    category.tools.map((tool) => ({
      ...tool,
      category: category.name,
      categoryId: category.id,
      categoryColor: category.color,
      score: 0,
    }))
  );

  // Main search function, exported for onChange usage
  const performSearch = (query: string) => {
    const searchTerm = query.toLowerCase().trim();
    // Early exit
    if (!searchTerm) {
      setResults([]);
      return;
    }
    const scoredResults = allTools
      .map((tool) => {
        const toolName = tool.name.toLowerCase();
        const toolDescription = tool.description.toLowerCase();
        const categoryName = tool.category.toLowerCase();
        let score = 0;

        if (toolName === searchTerm) score += 100;
        else if (toolName.startsWith(searchTerm)) score += 80;
        else if (toolName.includes(searchTerm)) score += 60;
        if (toolDescription.includes(searchTerm)) score += 30;
        if (categoryName.includes(searchTerm)) score += 20;

        // Word boundary matches
        const words = searchTerm.split(" ");
        words.forEach((word) => {
          if (word.length > 2) {
            const wordRegex = new RegExp(`\\b${word}\\b`, "i");
            if (wordRegex.test(toolName)) score += 40;
            if (wordRegex.test(toolDescription)) score += 20;
          }
        });

        return { ...tool, score };
      })
      .filter((tool) => tool.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    setResults(scoredResults);
  };

  // Debounced search (for use with onChange handlers)
  const debouncedSearch = (query: string, delay = 180) => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    setSearchQuery(query);

    debounceTimeout.current = setTimeout(() => {
      performSearch(query);
    }, delay);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setResults([]);
  };

  return {
    searchQuery,
    setSearchQuery,
    results,
    performSearch,
    debouncedSearch,
    clearSearch,
  };
}

