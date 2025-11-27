"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useState } from "react";

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    {
      q: "Do you offer any discounts for long-term contracts?",
      a: "Yes, we offer special pricing for clients who commit to long-term contracts of at least one month. Please contact us to discuss the specifics of your project and contract duration.",
    },
    {
      q: "What is the typical process for starting a project with The Other's Farhan?",
      a: "Once you contact us, we’ll start with a consultation to understand your goals. After agreeing on the project scope, we’ll finalize the contract and request a setup fee with a 10% advance. We’ll then assign a project manager and add you to our project management software, where you can easily track progress and stay updated as we bring your vision to life.",
    },
    {
      q: "What tools and software do you use?",
      a: "We primarily use Adobe After Effects for our motion graphics and video editing, but we are also proficient in other industry-standard tools like Adobe Premiere Pro, Photoshop, and Illustrator to ensure high-quality results.",
    },
    {
      q: "How do you ensure the quality of the videos?",
      a: "Quality is our top priority. We have a team of experienced editors who carefully craft each video, paying close attention to detail. We also maintain an open line of communication with our clients throughout the project to ensure the final product meets or exceeds expectations.",
    },
    {
      q: "Do you offer hourly pricing?",
      a: "Yes, we offer hourly pricing for clients who need flexibility and pay only for the time spent on their project.",
    },
    {
      q: "Why not hire your own editor?",
      a: "At The Other's Farhan, we make your experience smooth and hassle-free. Hiring us means you get a team of experts without the overhead of managing in-house staff, allowing you to focus on your core business while we take care of your video needs.",
    },
    {
      q: "Can I request revisions?",
      a: "Yes, we offer revisions to ensure you are fully satisfied with the final product. The number of revisions included will depend on the terms of your contract, which we’ll discuss upfront.",
    },
    {
      q: "What is your refund policy?",
      a: "We are committed to your satisfaction. If at any point you are unsatisfied with our services, we offer a full refund, no questions asked. Your trust and satisfaction are our top priorities, and we stand behind the quality of our work.",
    },
    {
      q: "How do I get started with The Other's Farhan?",
      a: "Simply reach out to us via our contact form or email, and we’ll get in touch with you to discuss your project and how we can help you achieve your goals.",
    },
  ];
  return (
    <section id="faq" className="py-16 px-4 md:px-6 lg:px-8">
      <SectionTitle>FAQ</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto mt-6"
      >
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
          >
            <div className=" mb-3 overflow-hidden rounded-lg border border-gray-600/40 bg-[#121212]/60 backdrop-blur-sm">
              <button
                className="hover:text-[#00c2c9] cursor-pointer flex w-full items-center justify-between px-4 py-3 text-left text-base md:text-lg lg:text-xl font-medium text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c2c9]"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span>{item.q}</span>
                <ChevronUpIcon
                  className={`${
                    openIdx === i ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-200 transition-transform duration-200`}
                />
              </button>
              {openIdx === i && (
                <div className="px-4 pb-4 pt-1 text-sm md:text-base lg:text-lg text-gray-300 bg-gradient-to-t from-[#00c2c9]/70 to-transparent">
                  {item.a}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
