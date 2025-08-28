"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function OptimizedHeader() {
  const phone = "616-540-3193"; // Replace with your phone constant
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Life at OBEDI", "#life"],
    ["Approach", "#approach"],
    ["About", "#about"],
    ["Mission & Vision", "#mission"],
    ["Values", "#values"],
    ["FAQs", "#faqs"],
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string, label: string) => {
    setActiveSection(label.toLowerCase().replace(/\s+/g, "-"));
    closeMobileMenu();

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-amber-400/95 shadow-lg border-b border-yellow-600/30"
            : "backdrop-blur-sm bg-amber-500/90 border-b border-yellow-600/20"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.a
              href="#home"
              className="flex items-center gap-2 font-semibold text-white hover:text-yellow-200 transition-colors z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home", "Home");
              }}
            >
              <motion.img
                src="/icon/obedi-icon.png"
                alt="Obedi Home"
                className="h-12 w-auto"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-lg font-bold font-fredoka tracking-widest sm:block hidden">
                OBEDI HOME
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map(([label, href]) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href, label);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === label.toLowerCase().replace(/\s+/g, "-")
                      ? "text-yellow-900 bg-yellow-200/80"
                      : "text-white hover:text-yellow-200 hover:bg-white/10"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Call Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white border-0 shadow-md font-semibold"
                >
                  <a
                    href={`tel:${phone.replaceAll("-", "")}`}
                    className="inline-flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="hidden sm:inline">Call</span>
                    <span className="sm:hidden">{phone}</span>
                  </a>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 text-white hover:text-yellow-200 hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={closeMobileMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-16 left-0 right-0 bg-amber-400/98 backdrop-blur-md border-b border-yellow-600/30 shadow-xl z-50 md:hidden"
              >
                <div className="px-4 py-6 space-y-2">
                  {navigationItems.map(([label, href], index) => (
                    <motion.a
                      key={label}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(href, label);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        activeSection ===
                        label.toLowerCase().replace(/\s+/g, "-")
                          ? "text-yellow-900 bg-yellow-200/80"
                          : "text-white hover:text-yellow-200 hover:bg-white/10"
                      }`}
                    >
                      {label}
                    </motion.a>
                  ))}

                  {/* Mobile Call Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: navigationItems.length * 0.05,
                    }}
                    className="pt-4 border-t border-yellow-600/30"
                  >
                    <Button
                      asChild
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white border-0 shadow-md font-semibold text-lg py-3"
                    >
                      <a
                        href={`tel:${phone.replaceAll("-", "")}`}
                        className="inline-flex items-center justify-center gap-2"
                        onClick={closeMobileMenu}
                      >
                        <Phone className="h-5 w-5" />
                        Call {phone}
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content jump */}
      <div className="h-16" />
    </>
  );
}
