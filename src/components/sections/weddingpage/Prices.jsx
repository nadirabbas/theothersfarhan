"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Check, Camera, Landmark } from "lucide-react";

export const Prices = () => {
  const pricingPlans = [
    {
      name: "💍 Basic Package",
      price: "PKR 40,000",
      period: "(Fixed)",
      description: "Available only for Islamabad & Rawalpindi.",
      features: [
        "1 Videographer",
        "1 Photographer",
        "No Drone Coverage",
        "200–300 Edited Event Photos",
        "1 Highlight Video (2–4 minutes)",
        "1 Full Event Video",
        "No Couple Shoot",
        "Delivery Time: 7 to 10 days",
        "Note: This package is available only for Islamabad & Rawalpindi.",
      ],
      popular: false,
    },
    {
      name: "🎥 Standard Package",
      price: "PKR 70,000",
      period: "",
      description: "Comprehensive wedding coverage.",
      features: [
        "1 Videographer",
        "1 Photographer",
        "1 Drone (Aerial Coverage)",
        "200–300 Wedding Photos",
        "1 Highlight Video (3–5 minutes)",
        "1 Full Event Video",
        "Couple Shoot Included",
        "No Album",
        "Delivery Time: 10-15 days",
        "Note: This package is available only for Islamabad & Rawalpindi.",
      ],
      popular: false,
    },
    {
      name: "✨ Gold Package",
      price: "PKR 100,000",
      period: "",
      description: "Premium wedding experience.",
      features: [
        "2 Videographers",
        "1 Photographer",
        "1 Drone Operator",
        "1 Wedding Album",
        "300+ Edited Photos",
        "1 Highlight Video",
        "2 Short Reels (Instagram/Facebook)",
        "Couple Shoot Included",
        "Delivery Time: 10 to 15 days",
        "Note: This package is available only for Islamabad & Rawalpindi.",
      ],
      popular: true,
    },
    {
      name: "🎬 Diamond Package (Wedding Film Experience)",
      price: "PKR 150,000",
      period: "",
      description: "Full wedding film production with cinematic storytelling.",
      features: [
        "A full Wedding Film Production, not a typical shoot",
        "Pre-wedding and post-wedding interviews with the couple",
        "Behind-the-scenes coverage and cinematic storytelling",
        "2 Videographers",
        "2 Photographers",
        "1 Storyteller/Director",
        "1 Drone Operator",
        "1 Wedding Album",
        "1 Full Wedding Movie",
        "1 Creative Wedding Film",
        "300+ Photos",
        "2 Highlight Videos",
        "2 Reels",
        "Delivery Time: 20-30 days",
        "Note: This package is available only for Islamabad & Rawalpindi.",
      ],
      popular: false,
    },
  ];

  return (
    <section id="prices" className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="w-full">
        {/* Section Title with side note */}
        <SectionTitle titleColor="text-[#D4AF37] font-great-vibes">Prices</SectionTitle>

        {/* Test paragraph to validate font */}
        <p className="text-center text-3xl font-great-vibes text-[#D4AF37] mb-4">Investment in Forever Memories</p>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F5DC] backdrop-blur-sm border border-[#D4AF37] rounded-2xl p-8 md:p-12 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Landmark className="w-16 h-16 text-[#D4AF37]" />
            </div>
            <p className="text-lg text-gray-800 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              We offer the <span className="text-[#D4AF37] font-semibold">best reasonable prices</span> that cover
              professional lighting, industry-standard tools, and a team of highly skilled videographers with
              exceptional experience. Our passion for the
              <span className="text-[#D4AF37] font-semibold"> art of videography</span> ensures we deliver cinematic
              masterpieces that capture every precious moment beautifully. Your vision, our expertise—let's create
              something unforgettable together!
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-full flex justify-center">
          <div className="grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  plan.popular
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30"
                    : "border-[#D4AF37]/20 hover:border-[#D4AF37]/60"
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#D4AF37] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-lg font-bold text-[#5C4033] mb-4 min-h-[3rem]">{plan.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#5C4033]">{plan.price}</span>
                  <span className="text-[#8B7355] text-sm">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-[#8B7355] text-sm mb-6 min-h-[2.5rem]">{plan.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-[#5C4033] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/923491520391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? "bg-[#D4AF37] text-white hover:bg-[#C19A2E] shadow-md"
                      : "bg-white border-2 border-[#D4AF37]/40 text-[#5C4033] hover:bg-[#F5F5DC] hover:border-[#D4AF37]"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
