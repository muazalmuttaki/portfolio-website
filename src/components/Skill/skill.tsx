 // File: components/Skills.tsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", level: "Expert", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: "Expert", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: "Advanced", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", level: "Advanced", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", level: "Intermediate", icon: <SiTypescript className="text-blue-600" /> },
  { name: "TailwindCSS", level: "Advanced", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", level: "Intermediate", icon: <FaNodeJs className="text-green-500" /> },
];

const getProgressWidth = (level: string) => {
  switch (level) {
    case "Expert":
      return "w-full";
    case "Advanced":
      return "w-4/5";
    case "Intermediate":
      return "w-3/5";
    default:
      return "w-2/5";
  }
};

const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transform transition duration-300 flex flex-col items-center"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
              <p className="text-gray-400 mb-2">{skill.level}</p>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div
                  className={`h-2 rounded-full bg-blue-500 ${getProgressWidth(
                    skill.level
                  )} transition-all duration-700`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
