import React from "react";
const CTABanner = () => {
  return (
    <>
      {/* CTA */}
      <section className="max-w-[1100px] mx-auto px-10 py-16 text-center">
        <h2 className="font-syne font-extrabold text-[42px] tracking-[-1.2px] leading-[1.1] text-[#F0EFE9] mb-4">
          Start designing{" "}
          <span className="text-[#C8FF00]">today.</span>
          <br />
          No experience needed.
        </h2>
        <p className="text-[15px] text-white/45 mb-8">
          Join 100,000+ designers building real skills. First course is free.
        </p>
        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <button className="text-[15px] font-medium text-[#0A0A0A] bg-[#C8FF00] rounded-full px-7 py-3.5 hover:opacity-90 transition-opacity">
            Get started free
          </button>
          <button className="text-[15px] font-medium text-[#F0EFE9] bg-transparent border border-white/25 rounded-full px-7 py-3.5 hover:border-white/50 transition-colors">
            Browse all courses
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-10 py-7 border-t border-white/[0.07]">
        <span className="font-syne font-extrabold text-base text-[#C8FF00]">
          UXLearn
        </span>
        <div className="flex gap-5">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <span className="text-xs text-white/25">
          © 2026 UXLearn. All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default CTABanner;
