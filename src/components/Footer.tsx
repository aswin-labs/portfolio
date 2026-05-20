// Footer.tsx

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          Contact Me
        </h2>

        <a
          href="mailto:aswinvtk2001@gmail.com"
          className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300"
        >
          <Mail size={18} />
          <span className="text-sm md:text-base">aswinvtk2001@gmail.com</span>
        </a>
      </div>
    </footer>
  );
}
