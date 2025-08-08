import { Star, Shield, Plug } from "lucide-react";

const FEATURES = [
  {
    icon: Star,
    title: "100% Free",
    description:
      "All tools are completely free to use—no hidden fees, subscriptions, or paywalls.",
    color: "bg-gradient-to-br from-primary/80 via-blue-400/70 to-primary/50 text-white",
  },
  {
    icon: Shield,
    title: "Privacy-Focused",
    description:
      "Your data never leaves your device. Every tool runs entirely in your browser for true privacy.",
    color: "bg-gradient-to-br from-secondary/80 via-purple-400/70 to-secondary/50 text-white",
  },
  {
    icon: Plug,
    title: "Easy to Use",
    description:
      "Each tool is thoughtfully designed to accomplish tasks simply and quickly.",
    color: "bg-gradient-to-br from-accent/90 via-pink-400/70 to-accent/50 text-white",
  },
];

const WhyChooseUsSection = () => (
  <section
    className="w-full py-16 md:py-20 px-2 md:px-0 bg-background dark:bg-background"
    id="why-choose-us"
  >
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-14 md:gap-20">
      {/* Left: Headline */}
      <div className="md:w-5/12 flex flex-col items-start md:items-start md:text-left text-center w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-primary dark:text-primary">
          Why Choose UtilityHub?
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 tracking-tight font-medium mb-3">
          Your go-to destination for powerful, private, and entirely free online tools.
        </p>
        <p className="text-base text-muted-foreground max-w-md md:max-w-xs">
          Built for privacy, speed, and ease of use. <br className="hidden md:block" /> Discover 100+ utilities. No sign up, no nonsense.
        </p>
      </div>
      {/* Right: Feature Benefit Cards */}
      <div className="md:w-7/12 w-full grid grid-cols-1 gap-6">
        {FEATURES.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className={`
                group flex flex-row items-center gap-5 p-5 md:p-6 rounded-2xl
                shadow-xl border border-border bg-white/95 dark:bg-[#232b43]/85
                backdrop-blur-md transition-all duration-300
                hover:scale-[1.03] hover:shadow-[0_10px_32px_-8px_rgba(80,90,230,0.15)]
                focus-within:ring-2 focus-within:ring-primary/30
                animate-fade-in
              `}
              style={{
                animationDelay: `${idx * 120}ms`,
                animationFillMode: "both",
                minHeight: 100,
              }}
              tabIndex={0}
              aria-label={feature.title}
            >
              <div
                className={`${feature.color} rounded-xl flex items-center justify-center w-16 h-16 shadow-lg mr-3 shrink-0`}
                aria-hidden="true"
              >
                <Icon size={34} strokeWidth={2.2} className="block" />
              </div>
              <div className="flex flex-col items-start md:items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-1 text-primary dark:text-primary">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 md:text-base text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
