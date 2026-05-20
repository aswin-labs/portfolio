export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-start justify-start relative overflow-hidden"
    >
      <img
        src="https://i.ibb.co/twKwKm5H/bg1.jpg"
        alt="Hero"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 flex flex-col justify-end h-full pb-24 pl-12 md:pl-20">
        
        <h1 className="text-white font-black leading-none mb-2 text-5xl md:text-8xl">
          ASWIN K
        </h1>

        <p className="text-white/80 text-sm tracking-[0.3em] uppercase">
          Video Editor
        </p>

        {/* Collaboration Text */}
        <div className="mt-6 max-w-xl">
          <p className="text-white text-lg md:text-2xl font-medium leading-relaxed">
            Try new edits with me for free.
          </p>

          <p className="text-white/70 text-sm md:text-base mt-3 leading-relaxed">
            If you're interested, we can collaborate and create
            cinematic reels, shorts, and creative video content together.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
         

          <a
            href="#portfolio"
            className="px-12 py-2 border border-white/60 text-white text-md rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Portfolio
          </a>
           <a
            href="#contact"
            className="px-12 py-2 border border-white/60 text-white text-md rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}