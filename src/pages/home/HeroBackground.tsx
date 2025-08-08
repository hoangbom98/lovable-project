import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import GradientWaves from "./GradientWaves";

const HeroBackground = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 left-0 right-0 top-0 w-screen h-full -z-10 overflow-hidden"
    style={{
      width: "100vw",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
    }}
  >
    {/* Motion background shapes */}
    <AnimatedBackground />
    {/* Animated gradient waves */}
    <GradientWaves />
    {/* Gradients overlays */}
    <div
      className="
        absolute left-1/2 top-0 w-screen h-[60vh]
        -translate-x-1/2 -translate-y-12
        blur-2xl opacity-70
        bg-gradient-to-tr from-primary/30 via-blue-400/30 to-secondary/30
        animate-fade-in
        transition-opacity duration-700
        dark:from-primary/20 dark:via-blue-900/30 dark:to-secondary/20
      "
      style={{
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
    <div
      className="
        absolute left-1/2 bottom-0 w-screen h-[24vh]
        -translate-x-1/2 translate-y-16
        rounded-full blur-3xl opacity-40
        bg-gradient-to-tr from-secondary/50 via-white/0 to-primary/40
        transition-opacity duration-700
        dark:from-secondary/20 dark:to-primary/30
      "
      style={{
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  </div>
);

export default HeroBackground;
