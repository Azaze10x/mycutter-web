"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypewriterText({
  text,
  className = "",
  speed = 80,
  delay = 0,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Reset when text changes (language switch)
  useEffect(() => {
    setDisplayed("");
    setIndex(0);
    setStarted(false);
  }, [text]);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed, started]);

  return (
    <span className={className}>
      {displayed}
      {started && index < text.length && (
        <span className="animate-pulse text-[#9f3f1a]">|</span>
      )}
    </span>
  );
}
