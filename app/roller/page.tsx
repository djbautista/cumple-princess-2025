"use client";

import { motion } from "framer-motion";

import rollerImage from "@/public/gift3.png";
import Image from "next/image";

export default function RollerCoasterInvitation() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400">
      {/* Animated Roller Coaster Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,100 Q300,300 600,100 T1200,100 L1200,800 L0,800 Z"
            stroke="white"
            strokeWidth="8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.circle
            cx="50"
            cy="100"
            r="20"
            fill="#FF5757"
            animate={{
              cx: [50, 300, 600, 900, 1150],
              cy: [100, 300, 100, 300, 100]
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          />
        </svg>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto -translate-y-2 md:translate-y-0">
          {/* Left Side - Invitation Text */}
          <motion.div
            className="w-full md:w-1/2 p-8 rounded-3xl shadow-xl bg-white bg-opacity-20 backdrop-blur-md -translate-y-12 md:translate-y-0"
            style={{
              boxShadow: "15px 15px 30px rgba(0, 0, 0, 0.2), -15px -15px 30px rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              transform: "perspective(1000px) rotateX(10deg)"
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-400 drop-shadow-lg hidden md:block">
              ¡Nos vamos al Parque de Atracciones!
            </h1>
            <div className="text-purple-950 space-y-4 text-lg drop-shadow">
              <p>Querido amigo de Paula:</p>
              <p>¡Estás invitado a celebrar su cumpleaños en Salitre Mágico!</p>
              <p className="font-semibold">Fecha: 23 de Abril, 2025</p>
              <p className="font-semibold">Hora: 11:00 AM</p>
              <p className="font-semibold">Lugar: Salitre Mágico</p>
              <p className="italic mt-6">¡No te lo pierdas! Será un día lleno de diversión.</p>

              <motion.div
                className="flex flex-col gap-2 bg-purple-50 p-4 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <small className="text-xs text-gray-700">
                  <ul>
                    <li className="mb-2">
                      * Te enviearemos tu código de acceso al parque por QR a tu correo o teléfono. Es importante que lleves contigo
                      identificación.
                    </li>
                    <li>** La invitación incluye alimentación para que no tengas que preocuparte de nada.</li>
                    <li className="mt-2 font-semibold">*** Una vez confirmes, no podrás cambiar tu asistencia.</li>
                  </ul>
                </small>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3"
              style={{
                boxShadow: "15px 15px 30px rgba(0, 0, 0, 0.2), -15px -15px 30px rgba(255, 255, 255, 0.1)",
                border: "4px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-400 flex items-center justify-center">
                <p className="text-center p-6 text-white font-bold">
                  <Image src={rollerImage} alt="Roller Coaster" className="rounded-xl border-4 border-white" />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0 C600,120 1000,40 1200,0 L1200,120 L0,120 Z" fill="#FF85A2"></path>
          <path d="M0,40 C400,100 800,20 1200,40 L1200,120 L0,120 Z" fill="#FFA9C6"></path>
        </svg>
      </div>
      M{/* Floating Decorative Elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            backgroundColor: ["#FF85A2", "#FFDE59", "#9C51B6", "#5271FF"][Math.floor(Math.random() * 4)],
            opacity: 0.6
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
}
