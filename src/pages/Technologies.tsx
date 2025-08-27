import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import tsLogo from "../assets/typescript.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/nodejs.png";
import gitLogo from "../assets/github.png";
import tailwindLogo from "../assets/tailwind_css.png";
import nextLogo from "../assets/nextjs.png";
import shadcnLogo from "../assets/shadcn.png";

const techLogos = [
  { name: "HTML", src: htmlLogo },
  { name: "CSS", src: cssLogo },
  { name: "JavaScript", src: jsLogo },
  { name: "TypeScript", src: tsLogo },
  { name: "React", src: reactLogo },
  { src: nodeLogo },
  { name: "Git", src: gitLogo },
  { name: "Tailwind", src: tailwindLogo },
  { name: "Next.js", src: nextLogo },
  { name: "Shadcn", src: shadcnLogo },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="bg-gradient-to-bl from-slate-800 via-slate-700 to-slate-900"
    >
      <div className="container mx-auto flex flex-col gap-8 pb-16">
        <h2 className="text-3xl sm:text-4xl text-center font-bold bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent mb-8">
          Technologies
        </h2>

        {/* marquee container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-20 animate-marquee">
            {techLogos.map((logo, index) => (
              <div key={index} className="flex gap-4 items-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition"
                />
                <span className="mt-2 text-xl text-white font-semibold text-center">
                  {logo.name}
                </span>
              </div>
            ))}
            {/* duplicate for infinite loop */}
            {techLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex gap-4 items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition"
                />
                <span className="mt-2 text-xl text-white font-semibold text-center">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
