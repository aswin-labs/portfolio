export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start justify-start relative overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="https://i.ibb.co/twKwKm5H/bg1.jpg"
        alt="Hero"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-screen px-6 md:px-20 pt-20">
        {/* Name */}
        <h1 className="text-white font-black leading-none mb-3 text-4xl sm:text-5xl md:text-8xl">
          ASWIN K
        </h1>

        {/* Role */}
        <p className="text-white/80 text-xs sm:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase">
          Video Editor
        </p>

        {/* Collaboration Text */}
        <div className="mt-6 max-w-md md:max-w-xl">
          <p className="text-white text-base sm:text-lg md:text-2xl font-medium leading-relaxed">
            Try new edits with me for free.
          </p>

          <p className="text-white/70 text-sm md:text-base mt-3 leading-relaxed">
            If you're interested, we can collaborate and create cinematic reels,
            shorts, and creative video content together.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <a
            href="#portfolio"
            className="px-6 sm:px-10 py-3 border border-white/60 text-white text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-10 py-3 border border-white/60 text-white text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
