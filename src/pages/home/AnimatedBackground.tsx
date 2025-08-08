
import React from "react";

// List of floating shape properties
const shapes = [
  {
    className: "left-4 top-12 w-16 h-16 bg-blue-400/30 animate-float-vert-slow",
    shape: "circle",
  },
  {
    className: "right-10 top-32 w-12 h-12 bg-secondary/30 animate-float-horiz-medium",
    shape: "circle",
  },
  {
    className: "left-1/3 bottom-20 w-24 h-24 bg-primary/30 animate-float-vert-medium",
    shape: "circle",
  },
  {
    className: "right-1/4 bottom-44 w-7 h-7 bg-pink-400/25 animate-float-horiz-slow rotate-45",
    shape: "triangle",
  },
  {
    className: "left-1/6 top-1/3 w-5 h-5 bg-yellow-300/15 animate-float-horiz-fast",
    shape: "triangle",
  },
  {
    className: "right-[8%] top-[18%] w-16 h-16 bg-primary/20 animate-float-vert-fast rotate-12",
    shape: "circle",
  },
];

function TriangleShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`absolute ${className}`} aria-hidden="true">
      <polygon points="16,0 32,32 0,32" fill="currentColor" />
    </svg>
  );
}

function CircleShape({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute rounded-full ${className}`} aria-hidden="true" />
  );
}

const AnimatedBackground = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden"
      aria-hidden="true"
    >
      {shapes.map((shape, idx) =>
        shape.shape === "triangle" ? (
          <TriangleShape className={shape.className} key={idx} />
        ) : (
          <CircleShape className={shape.className} key={idx} />
        )
      )}
    </div>
  );
};

export default AnimatedBackground;
