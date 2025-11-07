 import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "What kind of problem does your project solve. What kind of problem does your project solve.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    image: "/image/2.jpg",
    tech: ["TypeScript", "React", "TailwindCSS", "Node.js"],
    liveDemo: "#",
    sourceCode: "#",
    details: "#",
  },
  {
    title: "Project 2",
    description: "Another project description goes here.",
    features: ["Feature A", "Feature B", "Feature C"],
    image: "/image/images.png",
    tech: ["TypeScript", "React", "TailwindCSS", "Node.js"],
    liveDemo: "#",
    sourceCode: "#",
    details: "#",
  },
  {
    title: "Project 3",
    description: "Another project description goes here.",
    features: ["Feature A", "Feature B", "Feature C"],
    image: "/image/1.jpg",
    tech: ["TypeScript", "React", "TailwindCSS", "Node.js"],
    liveDemo: "#",
    sourceCode: "#",
    details: "#",
  }
];

const Projects: React.FC = () => {
  return (
    <section className="bg-black text-white py-14">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-rose-200 mb-5">My Projects</h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          >
            {/* Left: Project Image */}
            <div className="lg:w-1/2 w-full h-72 lg:h-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="list-disc list-inside mb-6 text-gray-300">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack / Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Three Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-blue-700 hover:bg-blue-800 rounded-full font-medium transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-gray-700 hover:bg-gray-800 rounded-full font-medium transition"
                >
                  Source Code
                </a>
                <a
                  href={project.details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-purple-700 hover:bg-purple-800 rounded-full font-medium transition"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
