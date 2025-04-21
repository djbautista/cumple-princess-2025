"use client";

import { motion } from "framer-motion";

export default function SuccessEffect() {
  // Random pirate celebration phrases
  const celebrationPhrases = [
    "¡Arrrr, Correcto!",
    "¡Tesoro Encontrado!",
    "¡Bien Hecho, Marinera!",
    "¡Por las Barbas de Neptuno!",
    "¡Avante, Camarada!"
  ];

  const randomPhrase = celebrationPhrases[Math.floor(Math.random() * celebrationPhrases.length)];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Confetti pieces */}
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 10 + 5;
        const color = ["bg-yellow-400", "bg-amber-500", "bg-red-400", "bg-green-400", "bg-blue-400"][Math.floor(Math.random() * 5)];

        return (
          <motion.div
            key={i}
            className={`absolute rounded-sm ${color}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: "-20px"
            }}
            initial={{ y: -20, opacity: 0, rotate: 0 }}
            animate={{
              y: `${Math.random() * 100 + 100}vh`,
              opacity: [0, 1, 0],
              rotate: Math.random() > 0.5 ? 360 : -360
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              ease: "easeOut"
            }}
          />
        );
      })}

      {/* Gold coins */}
      {[...Array(10)].map((_, i) => {
        const direction = Math.random() > 0.5 ? 1 : -1;

        return (
          <motion.div
            key={`coin-${i}`}
            className="absolute w-6 h-6 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center text-yellow-800 font-bold"
            style={{
              left: `${50 + (Math.random() * 20 - 10)}%`,
              top: "50%"
            }}
            initial={{ y: 0, scale: 0 }}
            animate={{
              y: [0, -100 + (Math.random() * 50 - 25)],
              x: [0, 100 * direction * (Math.random() * 0.5 + 0.5)],
              scale: [0, 1, 0],
              rotate: direction * 360
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut"
            }}
          >
            $
          </motion.div>
        );
      })}

      {/* Success flash */}
      <motion.div
        className="absolute inset-0 bg-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.5 }}
      />

      {/* Pirate-themed success message */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-amber-800"
        initial={{ scale: 0, rotate: -10 }}
        animate={{
          scale: [0, 1.5, 1],
          rotate: [-10, 5, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 1.2 }}
      >
        {randomPhrase}
      </motion.div>
    </div>
  );
}
