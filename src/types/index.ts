
import { type ComponentType } from "react";
import { LucideProps } from "lucide-react";

export interface ToolCategory {
  id: string;
  name: string;
  path: string; // <-- Added for SEO-friendly URLs!
  icon: ComponentType<LucideProps>;
  color: string;
  description: string;
  tools: Tool[];
}

export interface Tool {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  popular?: boolean;
  new?: boolean;
  path?: string;
}
