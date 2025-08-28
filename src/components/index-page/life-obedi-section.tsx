import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const IMAGES_BASE = "/image";

const privateRoomFiles = [
  "IMG_6037.jpg",
  "IMG_6038.jpg",
  "IMG_6039.jpg",
  "IMG_6040.jpg",
  "IMG_6041.jpg",
  "IMG_6042.jpg",
  "IMG_6043.jpg",
  "IMG_6044.jpg",
  "IMG_6046.jpg",
  "IMG_6048.jpg",
  "IMG_6049.jpg",
];

const lifeAspects = [
  {
    title: "Private Rooms",
    description: "Comfort and privacy for every resident",
    detail:
      "Each resident enjoys their own private space with personal storage, comfortable furnishing, and individual climate control.",
    image: `${IMAGES_BASE}/${privateRoomFiles[0]}`,
    highlights: [
      "Personal space",
      "Individual climate",
      "Comfortable furnishing",
    ],
  },
  {
    title: "Home-Cooked Meals",
    description: "Nutritious meals prepared fresh daily",
    detail:
      "Our kitchen staff prepare nutritious, balanced meals daily with dietary accommodations and preferences considered.",
    image: `${IMAGES_BASE}/${privateRoomFiles[10]}`,
    highlights: [
      "Fresh daily meals",
      "Dietary accommodations",
      "Nutritious & balanced",
    ],
  },
  {
    title: "Personalized Care Plans",
    description: "Structured routines tailored to each resident",
    detail:
      "Individual care plans developed with input from residents, families, and healthcare providers to ensure optimal outcomes.",
    image: `${IMAGES_BASE}/${privateRoomFiles[2]}`,
    highlights: ["Individual plans", "Family input", "Healthcare coordination"],
  },
  {
    title: "Daily Activities",
    description: "Exercise, hygiene support, and skill-building",
    detail:
      "Structured daily activities promote physical health, personal hygiene, and life skills development in a supportive environment.",
    image: `${IMAGES_BASE}/${privateRoomFiles[3]}`,
    highlights: ["Physical health", "Life skills", "Supportive environment"],
  },
  {
    title: "Community Integration",
    description: "Outings and social opportunities",
    detail:
      "Regular community outings and social activities help residents build connections and practice social skills in real-world settings.",
    image: `${IMAGES_BASE}/${privateRoomFiles[9]}`,
    highlights: [
      "Community outings",
      "Social connections",
      "Real-world skills",
    ],
  },
];

/** Build gallery ONLY from the IMG_ files that show the current place */

const withBase = (files: string[]) => files.map((f) => `${IMAGES_BASE}/${f}`);

/** Only preview these IMG_ photos in the modal */
const galleryImages: Record<number, string[]> = {
  0: withBase(privateRoomFiles),
};

/** Preload a few images to reduce opening lag */
function usePreloadImages(urls: string[], enabled: boolean, count = 4) {
  useEffect(() => {
    if (!enabled || urls.length === 0) return;
    const imgs = urls.slice(0, count).map((src) => {
      const img = new window.Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = src;
      // Try to decode without blocking UI
      img.decode?.().catch(() => {});
      return img;
    });
    return () => imgs.forEach((i) => (i.src = ""));
  }, [enabled, urls, count]);
}

export default function LifeAtObediCarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  // Only show the IMG_ gallery set
  const currentImages = galleryImages[0] ?? [];
  const hasGallery = currentImages.length > 0;

  const prefersReducedMotion = useReducedMotion();
  usePreloadImages(currentImages, isGalleryOpen || !prefersReducedMotion);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % lifeAspects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % lifeAspects.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + lifeAspects.length) % lifeAspects.length);

  const openGallery = () => {
    if (!hasGallery) return;
    setIsGalleryOpen(true);
    setCurrentGalleryImage(0);
  };

  const nextGalleryImage = () =>
    hasGallery && setCurrentGalleryImage((p) => (p + 1) % currentImages.length);

  const prevGalleryImage = () =>
    hasGallery &&
    setCurrentGalleryImage(
      (p) => (p - 1 + currentImages.length) % currentImages.length
    );

  return (
    <section
      id="life"
      className="bg-gradient-to-br from-amber-100 to-yellow-100 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-yellow-900 mb-4">
            Life at{" "}
            <span className="font-fredoka tracking-widest text-yellow-900">
              OBEDI HOME
            </span>
          </h2>
          <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
            Living at Obedi Home means being part of a supportive male community
            focused on growth and healing
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[500px] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${
                    hasGallery ? "cursor-pointer" : ""
                  }`}
                >
                  <img
                    src={lifeAspects[currentSlide].image}
                    alt={lifeAspects[currentSlide].title}
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {hasGallery && (
                    <div
                      className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={openGallery}
                    >
                      Click to view gallery
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying((p) => !p);
                }}
                className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all backdrop-blur-sm"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {lifeAspects.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-yellow-600 w-8"
                      : "bg-yellow-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              {lifeAspects.map((aspect, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    index === currentSlide
                      ? "bg-yellow-500/20 border-yellow-400 border-2"
                      : "bg-white/40 hover:bg-white/60 border border-transparent"
                  }`}
                >
                  <div className="font-semibold text-yellow-900 text-sm">
                    {aspect.title}
                  </div>
                  <div className="text-xs text-yellow-700 mt-1">
                    {aspect.description}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent
          className={[
            // Full viewport on mobile
            "w-[100vw] max-w-none h-[100dvh] p-0 rounded-none",
            // Constrain on >= sm
            "sm:w-full sm:max-w-5xl sm:h-auto sm:max-h-[90vh] sm:p-6 sm:rounded-xl",
          ].join(" ")}
        >
          <DialogHeader className="px-4 pt-4 sm:px-0 sm:pt-0">
            <DialogTitle>Obedi Home Gallery</DialogTitle>
          </DialogHeader>

          <div className="relative px-4 pb-4 sm:px-0 sm:pb-0">
            {/* Big image area */}
            {/* Big image area */}
            <div className="relative w-full max-h-[80vh] sm:h-[60vh] bg-black flex items-center justify-center rounded-lg overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                {hasGallery ? (
                  <motion.div
                    key={currentGalleryImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={currentImages[currentGalleryImage]}
                      alt={`Gallery ${currentGalleryImage + 1}`}
                      className="max-h-[80vh] w-auto max-w-full object-contain"
                      sizes="(max-width: 768px) 100vw, 960px"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.visibility =
                          "hidden";
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-images"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center w-full h-full text-sm text-yellow-800 bg-yellow-50"
                  >
                    No images available yet for this section.
                  </motion.div>
                )}
              </AnimatePresence>

              {hasGallery && (
                <>
                  {/* Prev/Next */}
                  <button
                    onClick={prevGalleryImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    onClick={nextGalleryImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    {currentGalleryImage + 1} / {currentImages.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {hasGallery && (
              <div
                className={[
                  "flex space-x-2 mt-3 sm:mt-4 overflow-x-auto pb-2 [content-visibility:auto]",
                  // Better touch scrolling on mobile
                  "snap-x snap-mandatory [-webkit-overflow-scrolling:touch]",
                ].join(" ")}
              >
                {currentImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setCurrentGalleryImage(index)}
                    className={[
                      "flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg border-2 snap-start",
                      index === currentGalleryImage
                        ? "border-yellow-500"
                        : "border-gray-300",
                    ].join(" ")}
                    title={image}
                    aria-label={`Open image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
