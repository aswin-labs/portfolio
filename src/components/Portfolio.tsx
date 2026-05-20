import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Reels", "Cinematic"];

const videos = [
  {
    id: 1,
    title: "Cinematic Storytelling Edit",
    category: "Cinematic",
    duration: "7:42",
    image: "https://i.ibb.co/PsscLN3v/karnan.jpg",
    link: "https://youtu.be/OACXYq-hkJY?si=r1n5dUHRiNgvNmC5",
    description:
      "A cinematic portrayal of Karna created using AI visuals, AI voice narration, and intense sound effects for a powerful experience.",
  },
  {
    id: 2,
    title: "Instagram Reel Edit",
    category: "Reels",
    duration: "0:16",
    image: "https://i.ibb.co/fdHN4CjD/patriot.png",
    link: "https://www.instagram.com/reel/DYXVLPvSd_o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    description:
      "A clean and smooth reel edit featuring simple transitions and synced visual flow.",
  },
  {
    id: 3,
    title: "Instagram Reel Edit",
    category: "Reels",
    duration: "0:59",
    image: "https://i.ibb.co/RGt4wmYH/mulchedi.png",
    link: "https://www.instagram.com/reel/DWgHrrkkjg1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    description:
      "A cinematic movie-scene edit blended with emotional song lyrics and smooth visual storytelling.",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-black px-6 md:px-16 py-24"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
          Portfolio
        </p>

        <h2 className="text-white font-black text-4xl md:text-5xl tracking-wide mb-2">
          FEATURED WORKS
        </h2>

        <p className="text-gray-400 max-w-2xl leading-relaxed">
          A collection of cinematic edits, reels and creative video projects
          focused on storytelling, visuals, and audience engagement.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-14">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm tracking-wide
              ${
                activeCategory === category
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <motion.a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            key={video.id}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="group bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="eager"
                decoding="async"
              />

              {/* Hover Play Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center">
                  <Play className="text-black fill-black ml-1" size={28} />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                  {video.category}
                </span>
              </div>

              {/* Duration */}
              <div className="absolute bottom-4 right-4">
                <span className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                  {video.duration}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {video.title}
                </h3>

                <ExternalLink
                  size={18}
                  className="text-gray-500 group-hover:text-cyan-400 transition"
                />
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {video.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
