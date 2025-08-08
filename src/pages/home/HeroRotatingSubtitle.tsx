
import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ROTATING_WORDS_EN = [
  "casino developers",
  "tech leads",
  "project managers",
  "game studios",
  "compliance teams",
  "security experts",
  "API integrators",
  "casino operators",
  "fintech teams",
  "gambling platforms",
  "gaming professionals",
];

const ROTATING_WORDS_VI = [
  "lập trình viên casino",
  "tech leads",
  "quản lý dự án",
  "studio game",
  "nhóm tuân thủ",
  "chuyên gia bảo mật",
  "tích hợp API",
  "vận hành casino",
  "nhóm fintech",
  "nền tảng cờ bạc",
  "chuyên gia gaming",
];

type Props = {
  className?: string;
};

const HeroRotatingSubtitle: React.FC<Props> = ({ className }) => {
  const { language } = useLanguage();
  const [currentRotatingWordIdx, setCurrentRotatingWordIdx] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const rotateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const ROTATING_WORDS = language === 'vi' ? ROTATING_WORDS_VI : ROTATING_WORDS_EN;

  const showRotatingWordIdx = (newIdx: number) => {
    setIsWordVisible(false);
    setTimeout(() => {
      setCurrentRotatingWordIdx(newIdx);
      setIsWordVisible(true);
    }, 340);
  };

  const handleRotatingWordKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      setPaused(true);
      let newIdx = currentRotatingWordIdx;
      if (e.key === "ArrowLeft") {
        newIdx = currentRotatingWordIdx === 0
          ? ROTATING_WORDS.length - 1
          : currentRotatingWordIdx - 1;
      } else if (e.key === "ArrowRight") {
        newIdx = currentRotatingWordIdx === ROTATING_WORDS.length - 1
          ? 0
          : currentRotatingWordIdx + 1;
      }
      if (newIdx !== currentRotatingWordIdx) {
        showRotatingWordIdx(newIdx);
      }
    }
  };

  useEffect(() => {
    if (paused) {
      if (rotateIntervalRef.current) {
        clearInterval(rotateIntervalRef.current);
        rotateIntervalRef.current = null;
      }
      return;
    }
    rotateIntervalRef.current = setInterval(() => {
      setIsWordVisible(false);
      setTimeout(() => {
        setCurrentRotatingWordIdx(idx =>
          idx + 1 < ROTATING_WORDS.length ? idx + 1 : 0
        );
        setIsWordVisible(true);
      }, 340);
    }, 2500);
    return () => {
      if (rotateIntervalRef.current) clearInterval(rotateIntervalRef.current);
    };
  }, [paused]);

  return (
    <p
      className={[
        "text-base md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 font-medium tracking-tight transition-all",
        className,
      ].join(" ")}
      style={{ lineHeight: "1.5" }}
      tabIndex={-1}
    >
      {language === 'vi' 
        ? "Nền tảng chuyên dụng cho "
        : "Specialized platform for "
      }
      <span
        className={`inline-block font-semibold text-primary transition-all ${
          isWordVisible
            ? "animate-fade-in animate-scale-in"
            : "animate-fade-out animate-scale-out"
        }`}
        aria-live="polite"
        style={{
          display: "inline-block",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        tabIndex={0}
        aria-label={ROTATING_WORDS[currentRotatingWordIdx]}
        role="text"
        onKeyDown={handleRotatingWordKeyDown}
      >
        {ROTATING_WORDS[currentRotatingWordIdx]}
      </span>
      {language === 'vi' 
        ? ". Quản lý tri thức và quy trình phát triển casino với bảo mật tối đa, tuân thủ pháp lý và tích hợp API tự động."
        : ". Knowledge & process management for casino development with maximum security, legal compliance, and automated API integration."
      }
    </p>
  );
};

export default HeroRotatingSubtitle;

