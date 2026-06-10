import React from "react";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-[18px] border-b border-white/[0.08] bg-[#0A0A0A]/90 backdrop-blur-xl">
      {/* Logo */}
      <div className="flex items-center gap-2 font-syne font-extrabold text-xl text-[#C8FF00] tracking-tight">
        <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
        UXLearn
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-7 list-none">
        {["Courses", "Bootcamps", "Community", "Pricing"].map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-white/70 px-4 py-2 hover:text-white transition-colors">
          Sign in
        </button>
        <button className="text-sm font-medium text-[#0A0A0A] bg-[#C8FF00] rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
