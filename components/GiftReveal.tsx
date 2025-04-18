"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface GiftRevealProps {
  giftImageSrc: StaticImageData;
  isReadyToReveal: boolean;
  onReveal: () => void;
  emoji?: string;
}

export default function GiftReveal({ giftImageSrc, isReadyToReveal, onReveal, emoji = "🎁" }: GiftRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReveal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsRevealed(true);
      onReveal();
    }, 300); // Small delay to allow animation to start
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <AnimatePresence mode="wait">
        {isRevealed ? (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              key="gift"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                position: "fixed",
                top: "8px",
                left: "8px",
                right: "8px",
                bottom: "8px",
                zIndex: 50
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl flex items-center justify-center"
              style={{ maxWidth: "calc(100vw - 16px)", maxHeight: "calc(100vh - 16px)" }}
            >
              <div className="relative w-full h-full">
                <Image src={giftImageSrc} alt="Regalo especial" fill className="object-contain" priority />
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            key="giftBox"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: isAnimating ? [1, 0.8] : 1
            }}
            exit={{ opacity: 0 }}
            className="w-full max-w-md flex justify-center"
          >
            <motion.div
              className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center"
              animate={{
                rotate: isAnimating ? 0 : [0, 5, -5, 5, 0],
                scale: isAnimating ? [1, 1.2, 0] : [1, 1.02, 1]
              }}
              transition={{
                duration: isAnimating ? 0.5 : 2,
                repeat: isAnimating ? 0 : Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="text-white text-5xl">{emoji}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isRevealed && (
        <motion.button
          onClick={handleReveal}
          disabled={!isReadyToReveal || isAnimating}
          className={`px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all
                    ${
                      isReadyToReveal && !isAnimating
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white cursor-pointer"
                        : "bg-gradient-to-r from-pink-200 to-purple-200 text-gray-700 cursor-not-allowed"
                    }`}
          whileHover={isReadyToReveal && !isAnimating ? { scale: 1.05 } : {}}
          whileTap={isReadyToReveal && !isAnimating ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {isAnimating ? "Revelando..." : isReadyToReveal ? "¡Revelar mi regalo!" : "Esperando..."}
        </motion.button>
      )}
    </div>
  );
}
