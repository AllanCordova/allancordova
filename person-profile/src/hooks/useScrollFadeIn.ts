import { useEffect, useRef, useState } from "react";

export function useScrollFadeIn(duration = 0.8, delay = 0) {
  const dom = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dom.current) {
        const { top } = dom.current.getBoundingClientRect();
        if (top <= window.innerHeight * 0.85) setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    ref: dom,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `all ${duration}s ease ${delay}s`,
    },
  };
}
