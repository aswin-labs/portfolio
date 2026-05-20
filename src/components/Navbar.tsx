export default function Navbar() {
  const links = ["Home", "About", "Portfolio", "Tools", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 px-8 py-4">
      <div className="flex gap-10 text-md">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="hover:text-blue-400"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
