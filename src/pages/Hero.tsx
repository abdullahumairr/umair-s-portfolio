import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-400 to-slate-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-700 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AU</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
                Abdullah Umair
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Full-Stack Developer & UI/UX Designer passionate about creating
              exceptional digital experiences
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              I craft modern web applications with cutting-edge technologies and
              focus on clean, scalable code and beautiful user interfaces.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="flex items-center gap-2 border-2 border-slate-400 text-slate-300 hover:text-white hover:border-slate-200 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "#", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-slate-400 hover:text-white transition-colors duration-300 p-3 rounded-full hover:bg-slate-600/20"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
