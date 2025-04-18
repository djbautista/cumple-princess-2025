"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Background from "@/components/Background";
import DecorativeElements from "@/components/DecorativeElements";

interface GiftItem {
  id: string;
  name: string;
  description: string;
  emoji: string;
  date: string;
  href?: string;
}

export default function Home() {
  const gifts: GiftItem[] = [
    {
      id: "gift1",
      name: "Regalo Especial #1",
      description: "Tu primer regalo sorpresa...",
      emoji: "🎁",
      date: "17 de Abril del 2025, a las 9:00 pm",
      href: "17"
    },
    {
      id: "gift2",
      name: "Regalo Especial #2",
      description: "Algo que habías perdido...",
      emoji: "💝",
      date: "21 de Abril del 2025, a las 9:00 pm",
      href: "21"
    },
    {
      id: "gift3",
      name: "Regalo Especial #3",
      description: "Un momento inolvidable...",
      emoji: "✨",
      date: "23 de Abril del 2025, a las 11:11 am",
      href: "23"
    }
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-10 px-4">
      {/* Background and decorative elements */}
      <Background />
      <DecorativeElements />

      {/* Content container */}
      <div className="w-full max-w-4xl mx-auto z-10 flex flex-col items-center gap-10">
        {/* Title Section */}
        <motion.div className="text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            ¡Sorpresas Especiales!
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">Una colección de regalos solo para ti</p>
        </motion.div>

        {/* Gifts Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link href={`/${gift.href ?? gift.id}`} className="block">
                <motion.div
                  className="bg-white bg-opacity-40 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04)",
                    borderColor: "rgba(236, 72, 153, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{gift.emoji}</span>
                    <h2 className="text-xl font-bold text-gray-800">{gift.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-3">{gift.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-600 font-medium">{gift.date}</span>
                    <motion.div
                      className="text-pink-500"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1
                      }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
