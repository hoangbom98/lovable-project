
import MainLayout from "@/components/layout/MainLayout";
import { CATEGORIES } from "@/data/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <MainLayout>
      <section className="py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">All Categories</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4 sm:gap-x-6 sm:gap-y-7 md:gap-7">
          {CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/${category.path}`}
                tabIndex={0}
                aria-label={category.name}
                role="link"
                className={`
                  group flex flex-col h-full p-5 sm:p-6 md:p-7 rounded-2xl
                  bg-gradient-to-br from-white/95 via-blue-50/80 to-blue-100/60 dark:from-[#141726] dark:via-[#181d2d] dark:to-[#20263a]
                  border border-border shadow-xl
                  card-elevated
                  transition-all duration-200
                  cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:z-10
                  hover:scale-[1.035] hover:shadow-[0_14px_42px_-8px_rgba(64,96,255,0.13),0_7px_28px_rgba(40,54,108,0.12)]
                  active:scale-100
                  animate-fade-in
                `}
                style={{
                  boxShadow:
                    "0 6px 32px -6px rgba(96,120,255,0.11), 0 3.5px 18px 0 rgba(10,24,60,0.08)",
                  minHeight: 210,
                  animationDelay: `${idx * 70}ms`,
                  animationFillMode: "both",
                }}
              >
                <div
                  className={`
                    flex items-center justify-center rounded-xl mb-4 sm:mb-5
                    w-11 h-11
                    bg-gray-100 dark:bg-[#20263a]
                    transition
                    group-hover:bg-gray-200 dark:group-hover:bg-[#23253a]
                  `}
                  aria-hidden="true"
                >
                  <Icon
                    size={22}
                    className={`
                      sm:w-7 sm:h-7 w-6 h-6
                      text-slate-500 group-hover:text-slate-600 group-focus-visible:text-slate-600
                      dark:text-slate-300 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200
                      transition
                    `}
                  />
                </div>
                <h3 className="text-[1.12rem] md:text-xl font-semibold mb-0.5 sm:mb-1 group-hover:text-primary transition-colors leading-snug">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-[15px] md:text-base mb-2 sm:mb-4 leading-relaxed flex-1">
                  {category.description}
                </p>
                <div className="mt-auto">
                  <span
                    className={`
                      inline-block text-xs font-semibold px-3 py-1 rounded-full
                      bg-primary/80 text-primary-foreground shadow-sm border border-primary/60 transition
                      group-hover:bg-primary group-hover:text-white
                      group-focus-visible:bg-primary group-focus-visible:text-white
                      dark:bg-primary/80 dark:text-primary-foreground dark:group-hover:bg-primary dark:group-hover:text-white
                    `}
                    aria-label={`${category.tools.length} tools in category`}
                  >
                    {category.tools.length} {category.tools.length === 1 ? "tool" : "tools"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
};

export default Categories;
