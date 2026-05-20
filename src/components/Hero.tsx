export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-start justify-start relative overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="https://i.ibb.co/twKwKm5H/bg1.jpg"
        alt="Hero"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for left side readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content — bottom-left aligned like the design */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-24 pl-12 md:pl-20">
        <h1 className="text-white font-black leading-none mb-2 text-5xl md:text-8xl">
          ASWIN K
        </h1>
        <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-8">
          Video Editor
        </p>

        {/* CTA Buttons — outlined style matching the design */}
        <div className="flex gap-4">
          <a
            href="#about"
            className="px-10 py-2 border border-white/60 text-white text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="px-10 py-2 border border-white/60 text-white text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Portofolio
          </a>
        </div>
      </div>
    </section>
  );
}
