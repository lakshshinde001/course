"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"

const features = [
  {
    title: "Complete Full-Stack Development",
    description: "Master both frontend and backend technologies with hands-on projects",
    icon: "💻",
    category: "Development",
    highlights: ["React.js", "Node.js", "MongoDB", "Express.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Project-Based Learning",
    description: "Build real-world applications that showcase your skills to employers",
    icon: "🚀",
    category: "Learning",
    highlights: ["Portfolio Projects", "Industry Standards", "Best Practices", "Code Reviews"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Modern Tech Stack",
    description: "Learn the latest technologies used by top companies worldwide",
    icon: "⚡",
    category: "Technology",
    highlights: ["Latest Frameworks", "Cloud Technologies", "DevOps Tools", "AI/ML Integration"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Mobile App Development",
    description: "Create responsive mobile applications for iOS and Android platforms",
    icon: "📱",
    category: "Mobile",
    highlights: ["React Native", "Flutter", "Progressive Web Apps", "Cross-Platform"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Authentication & Security",
    description: "Implement robust security measures and user authentication systems",
    icon: "🔐",
    category: "Security",
    highlights: ["JWT Tokens", "OAuth", "Data Encryption", "Security Best Practices"],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "API Development & Integration",
    description: "Design and integrate RESTful APIs and third-party services",
    icon: "🔗",
    category: "Integration",
    highlights: ["REST APIs", "GraphQL", "Microservices", "Third-party APIs"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Live Deployment",
    description: "Deploy applications to production environments with CI/CD pipelines",
    icon: "🌐",
    category: "Deployment",
    highlights: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Industry Certification",
    description: "Earn recognized certificates that validate your expertise",
    icon: "🏆",
    category: "Certification",
    highlights: ["Industry Recognition", "Portfolio Enhancement", "Career Advancement", "Skill Validation"],
    color: "from-yellow-500 to-orange-500",
  },
]

const categories = [
  "All",
  "Development",
  "Learning",
  "Technology",
  "Mobile",
  "Security",
  "Integration",
  "Deployment",
  "Certification",
]

const Offerings = () => {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  const filteredFeatures =
    activeCategory === "All" ? features : features.filter((feature) => feature.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            What You will Master
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Key Features
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive training program designed to make you industry-ready with cutting-edge skills and practical
            experience
          </p>
        </motion.div>

        {/* Interactive Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 backdrop-blur-sm"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div layout className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {filteredFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
              className="group relative cursor-pointer"
            >
              <div className="relative p-8 rounded-3xl bg-gray-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700/50 overflow-hidden hover:border-gray-600/50">
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: hoveredFeature === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Icon */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: hoveredFeature === index ? -5 : 0,
                    rotate: hoveredFeature === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`text-5xl p-4 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-20 backdrop-blur-sm`}
                    >
                      {feature.icon}
                    </div>
                    <motion.span
                      className={`text-xs font-bold px-3 py-2 rounded-full bg-gradient-to-r ${feature.color} text-white shadow-lg`}
                      animate={{
                        scale: hoveredFeature === index ? 1.1 : 1,
                      }}
                    >
                      {feature.category}
                    </motion.span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                  {/* Interactive Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs px-3 py-2 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-blue-900/30 hover:text-white transition-all duration-300 cursor-pointer backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedFeature === index ? "auto" : 0,
                      opacity: selectedFeature === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-600/50">
                      <p className="text-sm text-gray-400 mb-3">
                        Click to learn more about this feature and how it will benefit your career.
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push("/courses")
                        }}
                        className={`w-full py-3 rounded-xl bg-gradient-to-r ${feature.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        Explore This Feature
                      </button>
                    </div>
                  </motion.div>

                  {/* Click Indicator */}
                  <div className="flex items-center justify-center mt-4">
                    <motion.div
                      animate={{
                        rotate: selectedFeature === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-500"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-30`}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  }}
                  animate={{
                    opacity: hoveredFeature === index ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive course content and begin your transformation today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => router.push("/content")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Course Content
              </motion.button>

              <motion.button
                onClick={() => window.open("https://wa.me/7666224323", "_blank")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-900/20 transition-all duration-300 backdrop-blur-sm"
              >
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "10+", label: "Projects", color: "from-blue-500 to-cyan-500" },
            { number: "100%", label: "Hands-on", color: "from-purple-500 to-pink-500" },
            { number: "24/7", label: "Support", color: "from-green-500 to-emerald-500" },
            { number: "Industry", label: "Ready", color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-300 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Offerings
