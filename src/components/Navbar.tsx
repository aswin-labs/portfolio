export default function Navbar() {
  const links = ["Home", "About", "Portfolio", "Tools", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-start gap-5 md:gap-10 overflow-x-auto scrollbar-hide">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm sm:text-base whitespace-nowrap text-white hover:text-blue-400 transition-colors duration-300"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}