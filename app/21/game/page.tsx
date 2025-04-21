"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { levels } from "@/app/21/game/levels";
import SuccessEffect from "@/app/components/SuccessEffect";
import { Compass, FloatingItems, Map } from "@/app/components/TreasureElements";
import PirateMapBackground from "@/app/components/PirateMapBackground";

// Treasure chest image
import TreasureOpenImg from "@/public/images/final.png";

export default function TreasureHuntGame() {
  const [currentLevel, setCurrentLevel] = useState(6);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);
  const [showGameComplete, setShowGameComplete] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (error) setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const solution = levels[currentLevel].nextLevelKey;
    const isCorrect = inputValue.trim().toLowerCase() === solution.toLowerCase();

    if (isCorrect) {
      setSuccess(true);
      setError(false);

      setTimeout(() => {
        if (currentLevel === levels.length - 1) {
          // Game completed
          setShowGameComplete(true);
        } else {
          // Move to next level
          setCurrentLevel((prev) => prev + 1);
          setInputValue("");
          setSuccess(false);
        }
      }, 1500);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <PirateMapBackground />
      <Compass />
      {currentLevel >= 5 && <Map />}
      <FloatingItems />

      {success && <SuccessEffect />}

      <div className="container mx-auto max-w-2xl pt-12 pb-24 px-4">
        <AnimatePresence mode="wait">
          {!showGameComplete ? (
            <motion.div
              key="game"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-amber-200"
            >
              <div className="text-center mb-8">
                <motion.h1
                  className="text-3xl font-bold text-amber-800"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Búsqueda del Tesoro
                </motion.h1>
                <motion.div
                  className="text-amber-600 mt-2 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Nivel {currentLevel + 1} de {levels.length}
                </motion.div>
              </div>

              <motion.div
                className="mb-8 bg-amber-50 p-4 rounded-lg border-2 border-amber-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-xl font-bold text-amber-700 mb-3">{levels[currentLevel].hintTitle}</h2>
                <p className="text-amber-800 mb-4">{levels[currentLevel].hint}</p>

                {levels[currentLevel].hintImage && (
                  <div className="flex justify-center my-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-lg border-2 border-amber-300 shadow-md"
                    >
                      <Image src={levels[currentLevel].hintImage} alt="Pista" width={300} height={200} className="object-contain" />
                    </motion.div>
                  </div>
                )}
              </motion.div>

              <form onSubmit={handleSubmit} className="text-center">
                <div className="relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Escribe tu respuesta aquí"
                    className={`w-full px-4 py-3 rounded-lg border-2 
                      ${error ? "border-red-400 bg-red-50" : "border-amber-300 bg-white"} 
                      ${success ? "border-green-400 bg-green-50" : ""}
                      focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500 mt-2 text-sm"
                      >
                        ¡Esa no es la respuesta correcta! Intenta de nuevo.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comprobar
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
              <motion.div
                className="bg-amber-50/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border-4 border-amber-800 relative overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-2 bg-amber-800"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-full h-2 bg-amber-800"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                <motion.h1
                  className="text-4xl font-bold text-amber-800 mb-6"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ¡Felicidades, mi amor!
                </motion.h1>

                <motion.p
                  className="text-amber-700 text-xl mb-8"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Has completado todas las pruebas y has descubierto el mapa del tesoro.
                </motion.p>

                <motion.div
                  className="relative w-80 h-80 mx-auto -z-10"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-yellow-300/30 blur-xl z-20"
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <Image src={TreasureOpenImg} alt="Tesoro abierto" width={400} height={400} className="object-contain relative" />
                </motion.div>

                <motion.div
                  className="mt-8 bg-amber-100 border-2 border-amber-700 p-4 rounded-lg max-w-md mx-auto z-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <h3 className="text-xl font-bold text-amber-800 mb-2">Mensaje del Capitán:</h3>
                  <p className="text-amber-700 italic">
                    &ldquo;Ahora... recuerda, lo que perdiste no es una cadena; es el recordar siempre lo que vales. Por eso te regalo este
                    tesoro, que es solamente una pequeña ventana al verdadero tesoro que es tu corazón.
                  </p>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  🏴‍☠️
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
