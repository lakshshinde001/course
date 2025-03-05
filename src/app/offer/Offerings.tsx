"use client"
import { motion } from "framer-motion"
import { LampContainer } from "../components/ui/lamp"
import { Button } from "../components/ui/moving-border"
import { useRouter } from "next/navigation"

const features = [
  "Complete Full-Stack Development",
  "Project-Based Learning",
  "Modern Tech Stack",
  "Mobile App Development",
  "Authentication & Security",
  "API Development & Integration",
  "Live Deployment ",
  " Completion Certificate",
]

const Offerings = () => {
  const router = useRouter()
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen ">
      <LampContainer className="relative z-10"> 
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 relative top-[300px] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Key Features
        </motion.h1>

        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative top-[280px] z-10 mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-6 md:px-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 rounded-2xl border border-gray-700 shadow-lg bg-gray-900 text-white text-lg"
          >
            {feature}
          </motion.div>
        ))}
      </motion.div>
<div className="relative top-[300px]"> 
<Button onClick={()=> router.push("/content")}> 
          View Course Content
        </Button>
</div>
        

      </LampContainer>

      
    </div>
  )
}

export default Offerings
