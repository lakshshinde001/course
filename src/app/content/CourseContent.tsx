"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

const courseModules = [
  {
    id: 1,
    title: "🌐 Web Fundamentals",
    duration: "Weeks 1-2",
    level: "Beginner",
    description: "Build a solid foundation with modern web technologies",
    skills: [
      "HTML5 Semantic Structure & Best Practices",
      "CSS3 Advanced Styling & Animations",
      "Flexbox & Grid Layouts Mastery",
      "Responsive Design & Mobile-First Approach",
      "Tailwind CSS Framework",
      "CSS Animations & Transitions",
    ],
    projects: ["Responsive Portfolio Website", "Interactive Landing Page"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-900/20 to-cyan-900/20",
    icon: "🌐",
  },
  {
    id: 2,
    title: "⚡ Master JavaScript",
    duration: "Weeks 3-4",
    level: "Intermediate",
    description: "Deep dive into modern JavaScript and ES6+ features",
    skills: [
      "JavaScript Fundamentals & Advanced Concepts",
      "ES6+ Features (Arrow Functions, Destructuring)",
      "Asynchronous Programming (Promises, Async/Await)",
      "DOM Manipulation & Event Handling",
      "Closures & Higher-Order Functions",
      "Object-Oriented Programming in JS",
    ],
    projects: ["Interactive To-Do App", "Weather Dashboard", "Quiz Application"],
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-900/20 to-orange-900/20",
    icon: "⚡",
  },
  {
    id: 3,
    title: "🔧 Backend Development",
    duration: "Weeks 5-7",
    level: "Intermediate",
    description: "Build robust server-side applications with Node.js",
    skills: [
      "Node.js Runtime & Event Loop",
      "Express.js Framework Mastery",
      "RESTful API Design & Development",
      "Authentication (JWT, OAuth, Sessions)",
      "MongoDB & Mongoose ODM",
      "Database Design & Relationships",
    ],
    projects: ["Authentication System", "Blog API", "E-commerce Backend"],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-900/20 to-emerald-900/20",
    icon: "🔧",
  },
  {
    id: 4,
    title: "⚛️ Master React",
    duration: "Weeks 8-9",
    level: "Intermediate",
    description: "Build dynamic user interfaces with React.js",
    skills: [
      "React Components & JSX Mastery",
      "Props, State & Component Lifecycle",
      "React Hooks (useState, useEffect, Custom Hooks)",
      "Context API & Global State Management",
      "Redux Toolkit for Complex State",
      "React Router for Navigation",
    ],
    projects: ["Social Media Dashboard", "E-commerce Frontend", "Task Management App"],
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-900/20 to-indigo-900/20",
    icon: "⚛️",
  },
  {
    id: 5,
    title: "📘 Learn TypeScript",
    duration: "Week 10",
    level: "Intermediate",
    description: "Add type safety to your JavaScript applications",
    skills: [
      "TypeScript Fundamentals & Type System",
      "Interfaces, Types & Generics",
      "TypeScript with React Components",
      "Advanced Type Patterns",
      "Type Guards & Utility Types",
      "Configuration & Build Tools",
    ],
    projects: ["TypeScript Weather App", "Typed React Components"],
    color: "from-blue-600 to-blue-400",
    bgColor: "from-blue-900/20 to-blue-800/20",
    icon: "📘",
  },
  {
    id: 6,
    title: "🔗 Full Stack Integration",
    duration: "Weeks 11-12",
    level: "Advanced",
    description: "Connect frontend and backend for complete applications",
    skills: [
      "Frontend-Backend Integration",
      "API Communication & Error Handling",
      "State Management Across Stack",
      "Authentication Flow Implementation",
      "Deployment Strategies (Vercel, Railway)",
      "CI/CD Pipeline Setup",
    ],
    projects: ["Full-Stack Social Platform", "Real-time Chat Application"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-900/20 to-pink-900/20",
    icon: "🔗",
  },
  {
    id: 7,
    title: "📱 React Native",
    duration: "Weeks 13-14",
    level: "Advanced",
    description: "Build cross-platform mobile applications",
    skills: [
      "React Native Fundamentals",
      "Mobile UI Components & Styling",
      "Navigation Patterns (Stack, Tab, Drawer)",
      "State Management in Mobile Apps",
      "API Integration & Offline Support",
      "Native Device Features (Camera, GPS)",
    ],
    projects: ["Medication Reminder App", "Fitness Tracker", "Social Mobile App"],
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-900/20 to-cyan-900/20",
    icon: "📱",
  },
  {
    id: 8,
    title: "🎯 Final Capstone Project",
    duration: "Weeks 15-16",
    level: "Expert",
    description: "Build a production-ready full-stack application",
    skills: [
      "Project Planning & Architecture",
      "Full-Stack Application Development",
      "Advanced Testing Strategies",
      "Performance Optimization",
      "Security Implementation",
      "Deployment & DevOps",
    ],
    projects: ["Complete MERN Stack Application", "Mobile App with Backend"],
    color: "from-red-500 to-rose-500",
    bgColor: "from-red-900/20 to-rose-900/20",
    icon: "🎯",
  },
]

export default function CourseContent() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)
  const [hoveredModule, setHoveredModule] = useState<number | null>(null)
  const router = useRouter()

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "text-green-400 bg-green-900/30"
      case "Intermediate":
        return "text-yellow-400 bg-yellow-900/30"
      case "Advanced":
        return "text-orange-400 bg-orange-900/30"
      case "Expert":
        return "text-red-400 bg-red-900/30"
      default:
        return "text-gray-400 bg-gray-900/30"
    }
  }

  return (
    <div className="w-full space-y-8">
      {/* Course Overview Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            16
          </div>
          <div className="text-sm text-gray-400">Weeks Training</div>
        </div>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            8
          </div>
          <div className="text-sm text-gray-400">Core Modules</div>
        </div>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            15+
          </div>
          <div className="text-sm text-gray-400">Live Projects</div>
        </div>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            100%
          </div>
          <div className="text-sm text-gray-400">Job Support</div>
        </div>
      </motion.div>

      {/* Learning Path Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 hidden md:block"></div>

        {/* Module Cards */}
        <div className="space-y-8">
          {courseModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${index % 2 === 0 ? "md:ml-20" : "md:ml-20 md:mr-20"}`}
              onMouseEnter={() => setHoveredModule(module.id)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-gray-900 hidden md:block"></div>

              {/* Module Card */}
              <div
                className={`bg-gradient-to-br ${module.bgColor} backdrop-blur-sm rounded-2xl border border-gray-700/30 overflow-hidden transition-all duration-500 ${
                  hoveredModule === module.id ? "scale-105 shadow-2xl" : "shadow-xl"
                }`}
              >
                {/* Card Header */}
                <div className="p-6 border-b border-gray-700/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${module.color} bg-opacity-20`}>
                        {module.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{module.title}</h3>
                        <p className="text-gray-300 text-sm">{module.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(module.level)}`}>
                        {module.level}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{module.duration}</div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>📚 {module.skills.length} Skills</span>
                    <span>🚀 {module.projects.length} Projects</span>
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedModule === module.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 space-y-6">
                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">🎯 Key Skills</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${module.color} rounded-full`}></div>
                            <span className="text-sm text-gray-200">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        🚀 Hands-on Projects
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {module.projects.map((project, projectIndex) => (
                          <span
                            key={projectIndex}
                            className={`px-4 py-2 bg-gradient-to-r ${module.color} bg-opacity-20 rounded-full text-sm font-medium text-white border border-gray-600/30`}
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card Footer */}
                <div className="p-4 border-t border-gray-700/30 flex justify-between items-center">
                  <button
                    onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    {expandedModule === module.id ? "Show Less" : "Show Details"}
                    <motion.svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{ rotate: expandedModule === module.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </button>

                  <div className="text-sm text-gray-400">
                    Module {module.id} of {courseModules.length}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful developers who transformed their careers with our comprehensive MERN stack
            program
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => router.push("/join")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🚀 Start Your Journey
            </motion.button>

            <motion.button
              onClick={() => window.open("https://wa.me/7666224323", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-600/50 text-gray-300 font-semibold rounded-xl hover:bg-gray-800/30 hover:border-gray-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              💬 Get Free Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
