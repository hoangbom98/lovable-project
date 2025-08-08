import React from "react";
import { Link } from "react-router-dom";
import { getPopularTools } from "@/data/categories";
import ToolCard from "@/components/ToolCard";
import ToolCardSkeleton from "@/components/ToolCardSkeleton";
import { Search, FileText, Type, Hash, Calculator, Code, Palette, Shield } from "lucide-react";

// Icon mapping for different tool types
const getToolIcon = (toolName: string) => {
  const name = toolName.toLowerCase();
  if (name.includes('case') || name.includes('converter')) return Type;
  if (name.includes('counter') || name.includes('word')) return Hash;
  if (name.includes('calculator')) return Calculator;
  if (name.includes('generator') || name.includes('lorem')) return FileText;
  if (name.includes('code') || name.includes('json')) return Code;
  if (name.includes('color') || name.includes('palette')) return Palette;
  if (name.includes('seo') || name.includes('meta')) return Search;
  if (name.includes('password') || name.includes('security')) return Shield;
  return FileText; // default icon
};

const PopularToolsSection = () => {
  const popularTools = getPopularTools();

  // Simulate loading state for demonstration and polish (real would come from API)
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const displayCount = 8;
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Popular Tools</h2>
        <Link 
          to="/popular"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-6">
        {loading
          ? Array.from({ length: displayCount }).map((_, i) => (
              <ToolCardSkeleton key={i} />
            ))
          : popularTools.slice(0, displayCount).map((tool, i) => (
              <ToolCard
                key={tool.id}
                icon={React.createElement(getToolIcon(tool.name), { size: 24 })}
                name={tool.name}
                description={tool.description}
                to={tool.path || `/tool/${tool.id}`}
                status={tool.new ? "new" : tool.popular ? "popular" : undefined}
                aria-label={tool.name}
                style={{ animationDelay: `${i * 70}ms` }}
                className="hover:scale-105 touch-active"
              />
            ))}
      </div>
    </section>
  );
};

export default PopularToolsSection;
