// Tools.tsx

import premierePro from "../assets/images/premiere-pro.png";
import capcut from "../assets/images/capcut.png";
import photoshop from "../assets/images/photoshop.png";

const tools = [
  {
    name: "Adobe Premiere Pro",
    image: premierePro,
    description: "Professional video editing and cinematic storytelling.",
  },
  {
    name: "CapCut",
    image: capcut,
    description: "Fast-paced reels, shorts, and social media edits.",
  },
  {
    name: "Adobe Photoshop",
    image: photoshop,
    description: "Creative thumbnails, posters, and visual design work.",
  },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-black/20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Tools I Use
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Professional editing and design tools used to create
            cinematic content and engaging visuals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 md:p-8 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white/10 mb-5 md:mb-6">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {tool.name}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}