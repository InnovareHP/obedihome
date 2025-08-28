"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ImprovedHeroSection() {
  const phone = "616-540-3193"; // Replace with your actual phone constant

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/banner/obedi-banner.png')] bg-cover bg-center bg-no-repeat scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Headlines */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-7xl font-bold text-white leading-tight"
              >
                OBEDI HOME
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <h2 className="relative text-2xl sm:text-4xl font-bold text-amber-200">
                  A Safe Place for Healing and Growth
                </h2>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl"
            >
              Welcome to Obedi Home, an all-male residential facility providing
              24/7 care for individuals with behavioral health needs. We create
              a structured, compassionate environment where residents feel safe,
              respected, and supported in their daily lives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-semibold text-lg px-8 py-4 shadow-xl"
                >
                  <a
                    href={`tel:${phone.replaceAll("-", "")}`}
                    className="inline-flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Call {phone}
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="secondary" size="lg">
                  <a href="#about" className="inline-flex items-center gap-2">
                    Learn More <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 lg:justify-self-end"
          ></motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-center"
        >
          <ArrowRight className="h-6 w-6 mx-auto rotate-90" />
          <div className="text-sm mt-2">Scroll to explore</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
