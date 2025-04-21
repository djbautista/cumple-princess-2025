"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PirateMap from "@/public/images/pirate-map.jpg";

export default function PirateMapBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Map background with subtle motion */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 60, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <Image src={PirateMap} alt="Pirate Treasure Map" fill className="object-cover object-center" priority />
      </motion.div>

      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>

      {/* Additional decorative elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-amber-200 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-300 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
}
