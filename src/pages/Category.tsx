import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { CATEGORIES } from "@/data/categories";
import { useEffect } from "react";
import ToolCard from "@/components/ToolCard";
import ToolCardSkeleton from "@/components/ToolCardSkeleton";
import { FileText, Type, Hash, Calculator, Code, Palette, Search, Shield } from "lucide-react";

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

const getCategoryByPath = (path: string) => {
  return CATEGORIES.find(cat => cat.path === path);
};

const Category = () => {
  const { categoryPath } = useParams<{ categoryPath: string }>();
  const navigate = useNavigate();
  const category = categoryPath ? getCategoryByPath(categoryPath) : undefined;

  // Simulate loading
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 950);
    return () => clearTimeout(timer);
  }, [categoryPath]);

  React.useEffect(() => {
    if (!category) {
      navigate("/categories", { replace: true });
    }
  }, [category, navigate]);
  
  if (!category) return null;
  const Icon = category.icon;

  return (
    <MainLayout>
      <section className="py-8">
        <div className="flex items-center gap-4 mb-8">
          <div className={`${category.color} text-white w-16 h-16 rounded-lg flex items-center justify-center`}>
            <Icon size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
            <p className="text-foreground/70">{category.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-6">
          {loading
            ? Array.from({ length: category.tools.length || 4 }).map((_, i) => (
                <ToolCardSkeleton key={i} />
              ))
            : category.tools.map((tool, i) => (
                <ToolCard
                  key={tool.id}
                  icon={React.createElement(getToolIcon(tool.name), { size: 24 })}
                  name={tool.name}
                  description={tool.description}
                  to={tool.path || `/tool/${tool.id}`}
                  status={tool.new ? "new" : tool.popular ? "popular" : undefined}
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

export default Category;
