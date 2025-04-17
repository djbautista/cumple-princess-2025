"use client";

import { motion } from "framer-motion";

export default function DecorativeElements() {
  const decorations = [
    // Bags
    { emoji: "👜", x: "5%", y: "10%", size: "3rem", delay: 0 },
    { emoji: "👝", x: "95%", y: "15%", size: "3.5rem", delay: 0.2 },

    // Clothing
    { emoji: "👗", x: "15%", y: "85%", size: "3rem", delay: 0.4 },
    { emoji: "👚", x: "85%", y: "80%", size: "3.2rem", delay: 0.3 },
    { emoji: "👠", x: "90%", y: "70%", size: "2.8rem", delay: 0.6 },
    { emoji: "👢", x: "7%", y: "75%", size: "2.7rem", delay: 0.5 },

    // Accessories
    { emoji: "💍", x: "10%", y: "30%", size: "2.5rem", delay: 0.7 },
    { emoji: "👓", x: "88%", y: "35%", size: "2.9rem", delay: 0.8 },
    { emoji: "💄", x: "20%", y: "20%", size: "2.6rem", delay: 0.9 },
    { emoji: "💎", x: "80%", y: "25%", size: "2.4rem", delay: 1.0 },

    // Sparkles
    { emoji: "✨", x: "50%", y: "5%", size: "2.5rem", delay: 1.1 },
    { emoji: "✨", x: "30%", y: "40%", size: "2.2rem", delay: 1.2 },
    { emoji: "✨", x: "70%", y: "45%", size: "2.3rem", delay: 1.3 },
    { emoji: "✨", x: "25%", y: "65%", size: "2rem", delay: 1.4 },
    { emoji: "✨", x: "75%", y: "60%", size: "2.1rem", delay: 1.5 }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {decorations.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: item.x,
            top: item.y,
            fontSize: item.size
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: item.delay,
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}
