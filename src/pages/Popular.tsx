
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { getPopularTools } from "@/data/categories";
import { FileText, Type, Hash, Calculator, Code, Palette, Search, Shield } from "lucide-react";
import ToolCard from "@/components/ToolCard";
import ToolCardSkeleton from "@/components/ToolCardSkeleton";

// Helper: icon pick logic
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

const Popular = () => {
  const popularTools = getPopularTools();

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <section className="py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Popular Tools</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-6">
          {loading
            ? Array.from({ length: popularTools.length || 8 }).map((_, i) => (
                <ToolCardSkeleton key={i} />
              ))
            : popularTools.map((tool, i) => (
                <ToolCard
                  key={tool.id}
                  icon={React.createElement(getToolIcon(tool.name), { size: 24 })}
                  name={tool.name}
                  description={tool.description}
                  to={tool.path || `/tool/${tool.id}`}
                  status={tool.popular && !tool.new ? "popular" : tool.new ? "new" : undefined}
                  aria-label={tool.name}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="hover:scale-105 touch-active"
                />
              ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Popular;
