import { Code2, Palette, Smartphone, Globe } from "lucide-react";

const About = () => {
  const skills = [
    {
      Icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern frameworks and libraries.",
    },
    {
      Icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive designs that enhance user experience.",
    },
    {
      Icon: Smartphone,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications with React Native.",
    },
    {
      Icon: Globe,
      title: "Full-Stack Development",
      description:
        "Building complete web applications from frontend to backend.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-bl from-slate-800 via-slate-700 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience in
            creating exceptional digital experiences. I love turning ideas into
            reality through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-300 mb-6">
              My Journey
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I started my journey in web development over 5 years ago, and I've
              been fascinated by the endless possibilities of creating digital
              solutions. My expertise spans across modern web technologies, from
              crafting pixel-perfect user interfaces to building robust backend
              systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I believe in writing clean, maintainable code and creating user
              experiences that are not just functional, but delightful. When I'm
              not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Next.js",
                "Tailwind CSS",
                "MongoDB",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-300 text-slate-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#45556C] p-6 rounded-xl shadow-sm border border-slate-300 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-300 mb-2">
                  {title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
