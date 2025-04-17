"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-100 to-pink-100"></div>

      {/* Animated circles */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-2xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-2xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
}
