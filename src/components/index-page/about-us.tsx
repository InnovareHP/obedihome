"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Home, Shield, Users } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-32 bg-gradient-to-br from-amber-50 to-yellow-50"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl text-4xl font-medium text-yellow-900 lg:text-5xl"
        >
          AT <strong className="font-bold">OBEDI HOMES</strong>
        </motion.h2>

        <div className="relative">
          {/* Content Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-30 space-y-4 md:w-1/2"
          >
            <p className="text-yellow-700 text-lg">
              We believe every <strong>male resident</strong> deserves dignity,
              safety, and compassion.{" "}
              <span className="font-medium">
                Our name, symbolized by the light of a lamp, represents
                guidance, warmth, and care
              </span>
              —the essence of what we provide.
            </p>

            <p className="text-yellow-700">
              Founded to create a safe, structured home for males with
              behavioral health needs, Obedi Home focuses on:
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <HeartHandshake className="size-4 text-yellow-600" />
                  <h3 className="text-sm font-medium text-yellow-900">
                    Personalized Care
                  </h3>
                </div>
                <p className="text-yellow-700 text-sm">
                  Tailored to each resident
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-yellow-600" />
                  <h3 className="text-sm font-medium text-yellow-900">
                    Structure and Stability
                  </h3>
                </div>
                <p className="text-yellow-700 text-sm">For daily living</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-yellow-600" />
                  <h3 className="text-sm font-medium text-yellow-900">
                    Collaboration
                  </h3>
                </div>
                <p className="text-yellow-700 text-sm">
                  With families, guardians, and healthcare providers
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Home className="size-4 text-yellow-600" />
                  <h3 className="text-sm font-medium text-yellow-900">
                    A Homelike Environment
                  </h3>
                </div>
                <p className="text-yellow-700 text-sm">
                  That prioritizes privacy, comfort, and safety
                </p>
              </motion.div>
            </div>

            {/* Closing Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-yellow-700 font-medium pt-4 border-t border-yellow-200/50"
            >
              We honor each resident's humanity, celebrate progress, and walk
              with them toward stability and dignity.
            </motion.p>
          </motion.div>

          {/* Background Image */}
          <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            {/* Gradient Overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-gradient-to-r from-amber-50 via-amber-50/80 to-transparent to-75% z-20 md:block"
            />

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative  border-yellow-200/50 border-dotted p-2 backdrop-blur-md"
            >
              <div className="rounded-[12px] overflow-hidden shadow-md">
                <img
                  src="/image/about-us.jpg"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  alt="Obedi Home - Safe, structured environment for behavioral health residents"
                  loading="lazy"
                />
              </div>

              {/* Floating Stats/Info Cards */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
