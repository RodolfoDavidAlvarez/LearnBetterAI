import { motion } from "framer-motion";
import { useState } from "react";

const Showcase = () => {
  const [imageLoadError, setImageLoadError] = useState<Record<string, boolean>>({});

  const showcaseItems = [
    {
      title: "Zone 9 Solar Solutions",
      description: "Professional off-grid solar solutions with over 40 years of expertise. Starting at $4,200 with quick installation.",
      timeToComplete: "30 min",
      image: "/images/Zone 9 Solar Website.jpeg",
      features: ["Off-grid solutions", "Quick installation", "Landscape expertise", "Starting at $4,200"],
      color: "blue",
      link: "#",
    },
    {
      title: "Nurturing Nature",
      description: "Transform your space with unique upcycled plant centerpieces. Sustainable and eco-friendly home decor solutions.",
      timeToComplete: "25 min",
      image: "/images/Nurturing Nature Website.jpeg",
      features: ["Upcycled products", "Plant centerpieces", "Sustainable design", "Custom solutions"],
      color: "green",
      link: "#",
    },
    {
      title: "Fun Things Apparel",
      description: "Custom clothing crafted for your unique style. 100% personalized apparel with modern designs and quality materials.",
      timeToComplete: "30 min",
      image: "/images/Fun Things Apparel Boutique Website.jpeg",
      features: ["Custom designs", "100% Personalized", "Quality materials", "Modern style"],
      color: "red",
      link: "#",
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById("register-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="showcase" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stunning Websites, Built in Minutes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our AI-powered approach. Get a professional website that stands out and converts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <a href={item.link} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-4 right-4 ${
                      item.color === "blue" ? "bg-blue-600" : item.color === "green" ? "bg-emerald-600" : "bg-red-600"
                    } text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                  >
                    {item.timeToComplete}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <svg
                          className={`w-5 h-5 mr-2 ${
                            item.color === "blue" ? "text-blue-500" : item.color === "green" ? "text-emerald-500" : "text-red-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={scrollToForm}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Your Free Guide
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
