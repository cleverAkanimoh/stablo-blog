"use client"

import clsx from "clsx";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  effect?: "fade" | "slide" | "letter";
  slideDirection?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  effect = "fade",
  slideDirection = "left",
  delay = 0,
  duration = 0.5,
  className = "",
}) => {
    
  const variants = {
    fade: { opacity: [0, 1] },
    slide: {
      x: slideDirection === "left" ? [-50, 0] : slideDirection === "right" ? [50, 0] : 0,
      y: slideDirection === "up" ? [50, 0] : slideDirection === "down" ? [-50, 0] : 0,
      opacity: [0, 1],
    },
  };

  return effect === "letter" ? (
    <span className={`inline-flex dark:text-gray-300 ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + index * 0.05, duration }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  ) : (
    <motion.span
      initial={variants[effect as keyof typeof variants]}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration }}
      className={clsx("dark:text-gray-300",className)}
    >
      {text}
    </motion.span>
  );
};
