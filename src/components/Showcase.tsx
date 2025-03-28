import { motion } from "framer-motion";

const Showcase = () => {
  const showcaseItems = [
    {
      title: "Zone 9 Solar Solutions",
      description: "Professional solar company website with modern design and clear value proposition.",
      timeToComplete: "30 minutes",
      features: ["Clean, professional design", "Clear pricing display", "Product showcase", "Call-to-action optimization"],
      image: "/screenshots/zone9.jpg",
    },
    {
      title: "Nurturing Nature",
      description: "Elegant plant and sustainability focused e-commerce website.",
      timeToComplete: "25 minutes",
      features: ["Beautiful hero section", "Product navigation", "Shopping cart integration", "Nature-inspired design"],
      image: "/screenshots/nurturing-nature.jpg",
    },
    {
      title: "Fun Things Apparel",
      description: "Custom clothing e-commerce platform with personalization features.",
      timeToComplete: "30 minutes",
      features: ["Product customization", "E-commerce functionality", "Featured products section", "Modern UI/UX design"],
      image: "/photos/fun-things.png",
    },
  ];

  return (
    <section id="showcase" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Websites Built in Minutes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are actual examples of professional websites created using our AI-powered approach. Each website was built in 30 minutes or less.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 bg-[#6366F1] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {item.timeToComplete}
                </div>
                <img src={item.image} alt={item.title} className="w-full aspect-video object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-[#6366F1] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
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
            onClick={() => {
              const form = document.getElementById("register-form");
              if (form) {
                form.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-[#6366F1] text-white rounded-lg text-lg font-semibold hover:bg-[#4F46E5] transition-colors shadow-lg"
          >
            Get Your Free Guide
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
