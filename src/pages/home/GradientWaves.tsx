
import React from "react";

const GradientWaves = () => (
  <div
    className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden"
    aria-hidden="true"
  >
    {/* Back slow wave */}
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-[32vh] min-h-[200px] absolute bottom-0 left-0"
      style={{ zIndex: 1 }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="wave-gradient1"
          gradientTransform="rotate(20)"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.25)" />
          <stop offset="60%" stopColor="hsl(var(--secondary) / 0.15)" />
          <stop offset="100%" stopColor="hsl(var(--accent) / 0.12)" />
        </linearGradient>
      </defs>
      <path
        d="
          M0,120
          C320,200 800,0 1440,160
          L1440,320
          L0,320
          Z
        "
        fill="url(#wave-gradient1)"
        className="animate-wave-move-slow"
      />
    </svg>

    {/* Middle medium wave */}
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-[24vh] min-h-[140px] absolute bottom-[6%] left-0"
      style={{ zIndex: 2 }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="wave-gradient2"
          gradientTransform="rotate(-14)"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.33)" />
          <stop offset="60%" stopColor="hsl(var(--secondary) / 0.18)" />
          <stop offset="100%" stopColor="hsl(var(--accent) / 0.14)" />
        </linearGradient>
      </defs>
      <path
        d="
          M0,170
          C360,120 720,280 1440,160
          L1440,320
          L0,320
          Z
        "
        fill="url(#wave-gradient2)"
        className="animate-wave-move-medium"
      />
    </svg>

    {/* Front fast wave */}
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-[18vh] min-h-[80px] absolute bottom-[2%] left-0"
      style={{ zIndex: 3 }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="wave-gradient3"
          gradientTransform="rotate(-12)"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.39)" />
          <stop offset="60%" stopColor="hsl(var(--secondary) / 0.17)" />
          <stop offset="100%" stopColor="hsl(var(--accent) / 0.19)" />
        </linearGradient>
      </defs>
      <path
        d="
          M0,230
          C440,290 800,180 1440,240
          L1440,320
          L0,320
          Z
        "
        fill="url(#wave-gradient3)"
        className="animate-wave-move-fast"
      />
    </svg>
  </div>
);

export default GradientWaves;
