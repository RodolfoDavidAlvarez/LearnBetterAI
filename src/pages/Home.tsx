import React from "react";
import { motion } from "framer-motion";

const websites = [
  {
    title: "Zone 9 Solar Solutions",
    description:
      "A modern website for an Arizona-based solar solutions company, featuring clean design, intuitive navigation, and compelling visuals that showcase their sustainable energy solutions.",
    category: "Energy Sector",
    features: ["Responsive Design", "Clean UI", "Fast Loading"],
    rating: "4.9/5",
    colors: {
      badge: "blue",
      features: ["blue", "green", "orange"],
    },
    image: "/images/Zone 9 Solar Website.png",
  },
  {
    title: "Nurturing Nature",
    description:
      "An eco-friendly e-commerce platform specializing in upcycled plant centerpieces, combining sustainability with beautiful design to transform living spaces.",
    category: "Eco-Commerce",
    features: ["Sustainable Design", "E-commerce", "Nature-Inspired"],
    rating: "4.8/5",
    colors: {
      badge: "green",
      features: ["green", "emerald", "lime"],
    },
    image: "/images/Nurturing Nature Website.png",
  },
  {
    title: "Fun Things Apparel Boutique",
    description:
      "A stylish and modern e-commerce website for a boutique clothing store, featuring an elegant design that showcases their unique fashion collection with seamless shopping experience.",
    category: "Fashion Retail",
    features: ["E-commerce", "Visual Appeal", "User Experience"],
    rating: "4.7/5",
    colors: {
      badge: "purple",
      features: ["purple", "pink", "rose"],
    },
    image: "/images/Fun Things Apparel Boutique Website.png",
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Download Button */}
      <div className="fixed top-4 right-4 z-50">
        <a
          href="/register-download"
          className="btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Download Guide
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] bg-primary-200 dark:bg-primary-900/30 rounded-full blur-3xl animate-float"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[70%] bg-primary-100 dark:bg-primary-800/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto z-10 px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="heading-1 mb-6">Build Beautiful Websites with AI - Easier Than Ever Before</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Create stunning, modern websites in minutes using AI tools. No coding experience needed.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center gap-8 mt-12"
            >
              <a href="/register-download" className="flex flex-col items-center gap-2 group">
                <span className="text-xl font-semibold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300">
                  Download Guide Here
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 animate-bounce text-primary-600 dark:text-primary-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#features" className="flex flex-col items-center gap-2 group">
                <span className="text-xl font-semibold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300">
                  Or Watch Presentation Here
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 animate-bounce text-primary-600 dark:text-primary-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Showcase Section - Moved to Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {websites.map((website, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="showcase-card group relative"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <img src={website.image} alt={website.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div
                    className={`absolute top-4 right-4 py-1 px-3 rounded-full text-white text-sm font-medium glass-effect bg-${website.colors.badge}-600`}
                  >
                    {website.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 gradient-text">{website.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{website.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {website.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`px-3 py-1 bg-${website.colors.features[featureIndex]}-100 text-${website.colors.features[featureIndex]}-800 rounded-full text-sm dark:bg-${website.colors.features[featureIndex]}-900 dark:text-${website.colors.features[featureIndex]}-200`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">★</span>
                      <span className="text-gray-600 dark:text-gray-400">{website.rating}</span>
                    </div>
                    <button className="btn-secondary text-sm">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,197.3C672,181,768,139,864,117.3C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="dark:fill-gray-900"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4 dark:bg-primary-900 dark:text-primary-200">
                Our Features
              </span>
              <h2 className="heading-2 mb-4">Why Choose Our Guide?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We've combined cutting-edge AI tools with design expertise to help you build websites faster than ever
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "AI-Powered Development",
                description:
                  "Leverage cutting-edge AI tools to write code, generate designs, and develop websites with unprecedented speed and efficiency",
              },
              {
                icon: "💡",
                title: "Modern Design Principles",
                description: "Learn how to create beautiful, responsive websites that follow current design trends and best practices",
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                description: "Follow industry standards for fast-loading, SEO-friendly websites that keep visitors engaged",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="feature-card"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4 dark:bg-primary-900 dark:text-primary-200">
                Testimonials
              </span>
              <h2 className="heading-2 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover why developers and designers love our AI website building guide
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "This guide completely changed how I approach web development. The AI tools saved me countless hours of work.",
                name: "Sarah Johnson",
                title: "Frontend Developer",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
              },
              {
                quote: "As a designer with limited coding experience, this guide helped me create professional websites without writing much code.",
                name: "Michael Chen",
                title: "UI/UX Designer",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                quote: "The performance optimization tips alone were worth the price. My website's loading time improved by 70%!",
                name: "Emily Rodriguez",
                title: "Web Developer",
                image: "https://randomuser.me/api/portraits/women/14.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="testimonial-card"
              >
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold gradient-text">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
                Get the latest updates and resources delivered straight to your inbox
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Guide Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-center text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} LearnBetterAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
