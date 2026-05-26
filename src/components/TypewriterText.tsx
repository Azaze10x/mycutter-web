"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypewriterText({
  text,
  className = "",
  speed = 80,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <h1 className={className}>
      {displayed}
      {index < text.length && (
        <span className="animate-pulse text-[#9f3f1a]">|</span>
      )}
    </h1>
  );
}
