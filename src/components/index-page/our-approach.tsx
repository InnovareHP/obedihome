"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    title: "Safety & Stability",
    description: "Secure, structured environment",
  },
  {
    title: "Respect & Dignity",
    description: "Individualized support",
  },
  {
    title: "Collaboration",
    description:
      "Working closely with families, guardians, and healthcare providers",
  },
  {
    title: "Growth & Wellness",
    description: "Encouraging progress every step of the way",
  },
];

export default function OurApproachSection() {
  const phone = "616-540-3193";

  return (
    <section id="approach" className="py-16 md:py-32 bg-amber-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        {/* Animated Image */}
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
          src="/banner/our-approach.jpg"
          alt="Obedi Home trained staff providing compassionate care"
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          {/* Animated Title */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-medium text-yellow-900"
          >
            Our approach brings together safety, dignity, and compassionate
            care.
          </motion.h2>

          <div className="space-y-6">
            {/* Animated Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-yellow-700 text-lg">
                Our trained staff provide{" "}
                <strong>24/7 compassionate care</strong> focused on four core
                principles:
              </p>

              {/* Animated Approach List */}
              <div className="space-y-3">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-yellow-500 pl-4 py-2 transition-all duration-200 cursor-default"
                  >
                    <h3 className="font-semibold text-yellow-900">
                      {approach.title}
                    </h3>
                    <p className="text-sm text-yellow-700">
                      {approach.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
