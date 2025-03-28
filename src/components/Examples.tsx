import React from "react";
import { motion } from "framer-motion";

const examples = [
  {
    title: "Freelancer Portfolio",
    description: "A modern portfolio showcasing creative work with AI-powered project recommendations.",
    image: "/images/portfolio-example.jpg",
    features: ["Responsive Design", "Project Showcase", "Contact Form", "AI Recommendations"],
  },
  {
    title: "Service Business Website",
    description: "Professional business website with automated lead generation and service booking.",
    image: "/images/business-example.jpg",
    features: ["Service Catalog", "Booking System", "Testimonials", "Lead Capture"],
  },
  {
    title: "Personal Brand Site",
    description: "Engaging personal brand website with blog integration and social proof.",
    image: "/images/personal-example.jpg",
    features: ["Blog Section", "Social Media Integration", "Newsletter Signup", "Testimonials"],
  },
];

const Examples = () => {
  return (
    <section id="examples" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4"
          >
            Real Examples
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Here are three websites built with this exact method. Each showcases different features and use cases.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img src={example.image} alt={example.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{example.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
