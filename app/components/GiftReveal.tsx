"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface GiftRevealProps {
  giftImageSrc: StaticImageData;
  isReadyToReveal: boolean;
  onReveal: () => void;
}

export default function GiftReveal({ giftImageSrc, isReadyToReveal, onReveal }: GiftRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    onReveal();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <AnimatePresence mode="wait">
        {isRevealed ? (
          <motion.div
            key="gift"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full max-w-lg aspect-square relative rounded-lg overflow-hidden shadow-xl"
          >
            <Image src={giftImageSrc} alt="Regalo especial" fill className="object-cover" priority />
          </motion.div>
        ) : (
          <motion.div
            key="giftBox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-md flex justify-center"
          >
            <motion.div
              className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center"
              animate={{
                rotate: [0, 5, -5, 5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="text-white text-5xl">🎁</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isRevealed && (
        <motion.button
          onClick={handleReveal}
          disabled={!isReadyToReveal}
          className={`px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all
                    ${
                      isReadyToReveal
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white cursor-pointer"
                        : "bg-gradient-to-r from-pink-200 to-purple-200 text-gray-700 cursor-not-allowed"
                    }`}
          whileHover={isReadyToReveal ? { scale: 1.05 } : {}}
          whileTap={isReadyToReveal ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {isReadyToReveal ? "¡Revelar mi regalo!" : "Esperando..."}
        </motion.button>
      )}
    </div>
  );
}
