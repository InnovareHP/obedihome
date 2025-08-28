import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  BedDouble,
  Car,
  ChevronDown,
  Dumbbell,
  HeartHandshake,
  Home,
  MessageSquare,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Utensils,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "daily-living",
    icon: <BedDouble className="h-8 w-8" />,
    title: "Daily Living & Household Care",
    description:
      "Complete support for daily living needs in a clean, comfortable environment",
    color: "bg-amber-500",
    accentColor: "amber",
    items: [
      {
        icon: <Utensils className="h-5 w-5" />,
        title: "Nutritious Meals",
        description: "Prepared daily by our trained staff",
      },
      {
        icon: <Home className="h-5 w-5" />,
        title: "Daily Cleaning",
        description: "Bedrooms and shared spaces maintained",
      },
      {
        icon: <BedDouble className="h-5 w-5" />,
        title: "Laundry Services",
        description: "Complete housekeeping support",
      },
    ],
  },
  {
    id: "personal-care",
    icon: <Sparkles className="h-8 w-8" />,
    title: "Personal Care & Hygiene",
    description: "Professional grooming and personal care assistance",
    color: "bg-blue-500",
    accentColor: "blue",
    items: [
      {
        icon: <Scissors className="h-5 w-5" />,
        title: "Grooming Services",
        description: "Haircuts, beard trims, and nail care",
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Hygiene Support",
        description: "Showers and personal care assistance",
      },
    ],
  },
  {
    id: "medical-support",
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Medical & Behavioral Health Support",
    description:
      "Comprehensive healthcare coordination and medication management",
    color: "bg-green-500",
    accentColor: "green",
    items: [
      {
        icon: <Stethoscope className="h-5 w-5" />,
        title: "Medication Management",
        description: "Supervision and administration by trained staff",
      },
      {
        icon: <HeartHandshake className="h-5 w-5" />,
        title: "Healthcare Coordination",
        description: "Working with doctors and therapists",
      },
      {
        icon: <Car className="h-5 w-5" />,
        title: "Transportation",
        description: "To medical and community appointments",
      },
    ],
  },
  {
    id: "community-wellness",
    icon: <Users className="h-8 w-8" />,
    title: "Community & Wellness",
    description: "Engaging activities and community integration",
    color: "bg-purple-500",
    accentColor: "purple",
    items: [
      {
        icon: <Dumbbell className="h-5 w-5" />,
        title: "Exercise Programs",
        description: "Structured wellness activities",
      },
      {
        icon: <Users className="h-5 w-5" />,
        title: "Community Outings",
        description: "Safe and enjoyable social experiences",
      },
      {
        icon: <HeartHandshake className="h-5 w-5" />,
        title: "Social Engagement",
        description: "Supportive environment for connection",
      },
    ],
  },
  {
    id: "family-communication",
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Family & Caseworker Communication",
    description: "Transparent communication with families and care teams",
    color: "bg-orange-500",
    accentColor: "orange",
    items: [
      {
        icon: <MessageSquare className="h-5 w-5" />,
        title: "Regular Updates",
        description: "For parents, guardians, and case workers",
      },
      {
        icon: <Phone className="h-5 w-5" />,
        title: "Collaborative Care",
        description: "Ensuring safety, stability, and satisfaction",
      },
    ],
  },
];

export default function InteractiveServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-yellow-50 to-amber-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-yellow-900 mb-4">
            Comprehensive Care Services
          </h2>
          <p className="text-xl text-yellow-700 max-w-3xl mx-auto">
            At Obedi Home, we provide <strong>comprehensive care</strong>{" "}
            tailored to male residents with behavioral health needs
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card
                className={`
                  cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl h-44
                  ${
                    activeService === service.id
                      ? "ring-2 ring-yellow-400 shadow-2xl scale-105 h-auto"
                      : "hover:scale-102"
                  }
                  ${hoveredService === service.id ? "shadow-xl" : ""}
                  bg-white/90 backdrop-blur-sm border-yellow-200/50
                `}
                onClick={() => handleServiceClick(service.id)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          p-3 rounded-xl ${service.color} text-white shadow-lg
                          ${hoveredService === service.id ? "shadow-xl" : ""}
                        `}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-yellow-900 leading-tight">
                          {service.title}
                        </CardTitle>
                        <p className="text-sm text-yellow-700 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: activeService === service.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 ml-2"
                    >
                      <ChevronDown className="h-5 w-5 text-yellow-600" />
                    </motion.div>
                  </div>
                </CardHeader>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <CardContent className="pt-0">
                        <div className="border-t border-yellow-200 pt-4">
                          <div className="space-y-3">
                            {service.items.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: itemIndex * 0.1,
                                }}
                                className="flex items-start space-x-3 p-3 rounded-lg bg-yellow-50/50 hover:bg-yellow-100/50 transition-colors"
                              >
                                <div
                                  className={`p-2 rounded-lg bg-${service.accentColor}-100 text-${service.accentColor}-600`}
                                >
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-yellow-900 text-sm">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-yellow-700 mt-1">
                                    {item.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>

              {/* Hover Effect - Floating Badge */}
              <AnimatePresence>
                {hoveredService === service.id &&
                  activeService !== service.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-2 -right-2 z-10"
                    >
                      <Badge className="bg-yellow-500 text-yellow-900 shadow-lg">
                        Click to expand
                      </Badge>
                    </motion.div>
                  )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
