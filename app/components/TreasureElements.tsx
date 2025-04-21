"use client";

import { motion } from "framer-motion";

export function Compass() {
  return (
    <motion.div
      className="absolute top-5 right-5 w-16 h-16 md:w-24 md:h-24"
      animate={{ rotate: [0, 15, -15, 0] }}
      transition={{ duration: 10, repeat: Infinity }}
    >
      <div className="w-full h-full bg-amber-100 rounded-full border-4 border-amber-800 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-amber-800 rounded-full z-10"></div>

          {/* North needle */}
          <motion.div
            className="absolute w-1 h-1/2 origin-bottom"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full flex flex-col items-center">
              <div className="w-1 h-[calc(100%-8px)] bg-red-500"></div>
              <div className="w-3 h-3 -mt-1 bg-red-500 rotate-45"></div>
            </div>
          </motion.div>

          {/* South needle */}
          <motion.div
            className="absolute w-1 h-1/2 origin-bottom rotate-180"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full flex flex-col items-center">
              <div className="w-1 h-[calc(100%-8px)] bg-amber-800"></div>
              <div className="w-3 h-3 -mt-1 bg-amber-800 rotate-45"></div>
            </div>
          </motion.div>
        </div>

        {/* Cardinal directions */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 font-bold text-amber-800 text-xs">N</div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-bold text-amber-800 text-xs">S</div>
        <div className="absolute left-1 top-1/2 -translate-y-1/2 font-bold text-amber-800 text-xs">W</div>
        <div className="absolute right-1 top-1/2 -translate-y-1/2 font-bold text-amber-800 text-xs">E</div>
      </div>
    </motion.div>
  );
}

export function Map() {
  return (
    <motion.div
      className="absolute bottom-5 right-5 w-16 h-20 md:w-20 md:h-24"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
    >
      <motion.div
        className="w-full h-full bg-amber-100 rounded-md border-2 border-amber-800 shadow-lg overflow-hidden relative"
        style={{
          backgroundImage: "url('/images/pirate-map-icon.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        animate={{ rotate: [0, 1, -1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-800/30"></div>

        {/* X marks the spot */}
        <motion.div
          className="absolute bottom-3 right-3"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="text-red-600 font-bold text-lg transform rotate-12">X</div>
        </motion.div>

        {/* Compass rose mini icon */}
        <div className="absolute top-2 left-2 w-5 h-5 opacity-70">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border border-amber-800"></div>
              <div className="absolute w-5 h-0.5 bg-amber-800 rotate-45"></div>
              <div className="absolute w-5 h-0.5 bg-amber-800 -rotate-45"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FloatingItems() {
  return (
    <>
      {/* Floating coins */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`coin-${i}`}
          className="absolute w-4 h-4 rounded-full bg-yellow-400 border border-yellow-600"
          initial={{
            x: Math.random() * 100 - 50 + i * 100,
            y: Math.random() * 100,
            opacity: 0
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 2
          }}
        />
      ))}

      {/* Floating stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-yellow-400 text-lg"
          initial={{
            x: Math.random() * 200 + i * 50,
            y: Math.random() * 300,
            opacity: 0
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 3
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Pirate-themed floating elements */}
      <motion.div
        className="absolute text-amber-800 text-2xl"
        initial={{ x: 30, y: 300, opacity: 0 }}
        animate={{
          y: [300, 270, 300],
          opacity: [0, 0.7, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 2
        }}
      >
        ⚓
      </motion.div>

      <motion.div
        className="absolute text-amber-800 text-2xl"
        initial={{ x: 80, y: 150, opacity: 0 }}
        animate={{
          y: [150, 120, 150],
          opacity: [0, 0.7, 0],
          rotate: [0, -15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 5
        }}
      >
        ⚔️
      </motion.div>

      <motion.div
        className="absolute text-amber-800 text-2xl"
        initial={{ right: 80, bottom: 150, opacity: 0 }}
        animate={{
          y: [0, -20, 0],
          opacity: [0, 0.7, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 3
        }}
      >
        🏴‍☠️
      </motion.div>
    </>
  );
}
