import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Sparkles, Rocket } from "lucide-react";
import ProfilePic from "/image/1.png"; // আপনার ইমেজ পাথ

export default function AboutMe() {
  return (
    <section className="bg-gradient-to-br from-[#1B1F3B] via-[#222840] to-[#2A2E4C] text-white py-15 px-6 md:px-12">
         <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center mb-8">
            About Me
          </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-70 h-60 rounded-2xl bg-[#2A2E4C] shadow-xl shadow-purple-500/20 border border-purple-400/40 overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={ProfilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-gray-300 leading-relaxed mb-6 max-w-[60ch]">
            I'm a passionate Frontend Developer who loves crafting clean, fast, and user-friendly experiences on the web. I enjoy building reusable UI components, solving logic problems, and improving performance with modern tools like React & Shadcn UI.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-purple-300">
              <Code className="w-5 h-5" /> Modern UI Development
            </div>
            <div className="flex items-center gap-3 text-purple-300">
              <Rocket className="w-5 h-5" /> Constant Skill Growth
            </div>
            <div className="flex items-center gap-3 text-purple-300">
              <Sparkles className="w-5 h-5" /> Clean & Reusable Components
            </div>
          </div>

          <Button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-lg shadow-lg shadow-purple-500/30 text-italic font-semibold">
            Know More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}