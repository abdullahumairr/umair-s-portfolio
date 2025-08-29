import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import kodenSch from "../assets/projects/koden-sch.png";
import notesaApp from "../assets/projects/notes.png";
import weatherApp from "../assets/projects/weather-app.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "School Profile",
      description:
        "A School Profile Web that create for Sekolah Developer Indonesia with modern design and update feature.",
      image: kodenSch,
      technologies: ["React", "TypeScript", "NextJs", "Tailwind CSS", "Vercel"],
      githubUrl: "#",
      liveUrl: "https://www.kodein.sch.id/",
      category: "Frontend",
    },
    {
      id: 2,
      title: "notesApp",
      description:
        "A Todo list website that making it easier for users to manage schedules.",
      image: notesaApp,
      technologies: ["React", "Javascript", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "https://notes-app-kappa-snowy.vercel.app/",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that provides real-time weather data, forecasts, and interactive maps with beautiful data visualizations.",
      image: weatherApp,
      technologies: ["React", "Tailwind CSS", "Openweathermap API"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Social Media API",
      description:
        "A RESTful API for a social media platform with user authentication, post management, real-time messaging, and file uploads.",
      image:
        "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      category: "",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Frontend",
    },
    {
      id: 6,
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI API.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Full Stack",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Multimedia"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my recent work spanning web applications, mobile apps,
            and full-stack solutions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className=" flex flex-col gap-10 py-5">
            <span className="flex gap-3 sm:pl-0 pl-5 text-3xl sm:text-4xl font-semibold items-center text-gray-300">
              {activeCategory !== "All" ? activeCategory : ""} Projects{" "}
              <Code size={48} strokeWidth={3} className="pt-2"/>  
            </span>
            <span className=" text-xl sm:text-2xl  font-medium text-gray-400 ">I haven't created any backend{" "}
            {activeCategory !== "All" ? activeCategory : ""} projects yet.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#45556C] rounded-xl shadow-sm border border-slate-300 overflow-hidden hover:shadow-xl hover:border-slate-400 transition-all duration-300"
              >
                {/* Project Image - Now clickable */}
                <div className="relative overflow-hidden">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github size={16} className="text-slate-700" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={16} className="text-slate-700" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-slate-200 text-slate-800 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title - Now clickable */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold text-gray-300 mb-2 hover:text-slate-200 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </a>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
