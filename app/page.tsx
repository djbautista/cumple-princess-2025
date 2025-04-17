"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Background from "./components/Background";
import DecorativeElements from "./components/DecorativeElements";
import Countdown from "./components/Countdown";
import GiftReveal from "./components/GiftReveal";

import giftImage from "@/public/gift1.png";

export default function Home() {
  // Replace with your target date for the countdown
  const targetDate = new Date("2025-04-18T00:00:00");

  // State to track if countdown is completed
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  // For development purposes, you can set this to true to simulate countdown completion
  // const [isCountdownComplete, setIsCountdownComplete] = useState(true);

  // Handle countdown completion
  const handleCountdownComplete = () => {
    setIsCountdownComplete(true);
  };

  // Handle gift reveal
  const handleRevealGift = () => {
    // You can add any additional actions to perform when the gift is revealed
    console.log("Gift revealed!");
  };

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
            ¡Sorpresa Especial!
          </motion.h1>
        </motion.div>

        {/* Countdown section */}
        <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-xl md:text-2xl text-center mb-6 text-gray-700 font-bold">Tu regalo estará disponible en:</h2>
          <Countdown targetDate={targetDate} onComplete={handleCountdownComplete} />
        </motion.div>

        {/* Gift section */}
        <motion.div className="w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <GiftReveal giftImageSrc={giftImage} isReadyToReveal={isCountdownComplete} onReveal={handleRevealGift} />
        </motion.div>
        <motion.div className="w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <div className="p-4 text-center">
            <p className="text-sm text-gray-700 font-semibold">Pista</p>
            <p className="text-base md:text-xl text-gray-700">
              Ya que el 2 y el 3 son tus números favoritos... <br /> 😌✨
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
