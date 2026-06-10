import React from "react";
const Hero = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-10 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left — Copy */}
      <div>
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-[#C8FF00] text-xs font-medium tracking-widest uppercase border border-[#C8FF00]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
          Design learning platform
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold text-5xl leading-[1.05] tracking-[-1.5px] text-[#F0EFE9] mb-5">
          Learn UI/UX<br />
          design{" "}
          <span className="text-[#C8FF00]">
            from<br />scratch.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base leading-relaxed text-white/55 mb-9 max-w-[420px]">
          Hands-on courses built by working designers. No Powerpoint. No fluff.
          Just real skills you can put to work — from Figma basics to full
          product systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3.5">
          <button className="text-[15px] font-medium text-[#0A0A0A] bg-[#C8FF00] rounded-full px-7 py-3.5 hover:opacity-90 transition-opacity">
            Explore courses
          </button>
          <button className="text-[15px] font-medium text-[#F0EFE9] bg-transparent border border-white/25 rounded-full px-7 py-3.5 hover:border-white/50 transition-colors">
            Join bootcamp
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-11 pt-8 border-t border-white/[0.08]">
          {[
            { num: "500K+", label: "Designers trained" },
            { num: "150+", label: "Countries" },
            { num: "4.9★", label: "Avg. rating" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-syne font-bold text-[26px] text-[#F0EFE9]">
                {num}
              </div>
              <div className="text-xs text-white/45 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Visual Cards */}
      <div className="flex flex-col gap-3">
        {/* Big card */}
        <div className="bg-[#161616] border border-white/10 rounded-2xl overflow-hidden">
          {/* Thumbnail */}
          <div
            className="h-[120px] flex items-end px-4 pb-2.5"
            style={{ background: "linear-gradient(135deg,#1A2A0A,#0D1A05)" }}
          >
            <div className="flex gap-2 w-full mb-1">
              {["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#C77DFF"].map(
                (c) => (
                  <div
                    key={c}
                    className="h-12 rounded-md flex-1"
                    style={{ background: c }}
                  />
                )
              )}
            </div>
          </div>
          {/* Body */}
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm font-medium text-[#F0EFE9]">
                Color Theory & Systems
              </p>
              <p className="text-xs text-white/40 mt-0.5">Beginner · 2h 30min</p>
            </div>
            <button className="text-xs font-medium text-[#0A0A0A] bg-[#C8FF00] rounded-full px-3 py-1.5">
              Enroll now
            </button>
          </div>
        </div>

        {/* Small cards row */}
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: "⊞",
              iconColor: "#C8FF00",
              bg: "bg-[#C8FF00]/10",
              title: "Layout & Grids",
              sub: "Master spacing, columns, and visual rhythm",
            },
            {
              icon: "👥",
              iconColor: "#FF6B6B",
              bg: "bg-[#FF6B6B]/10",
              title: "User Research",
              sub: "Interviews, surveys, and synthesis methods",
            },
          ].map(({ icon, iconColor, bg, title, sub }) => (
            <div
              key={title}
              className="bg-[#161616] border border-white/10 rounded-2xl p-4"
            >
              <div
                className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center text-base mb-2.5`}
              >
                {icon}
              </div>
              <p className="text-xs font-medium text-[#F0EFE9] mb-1">{title}</p>
              <p className="text-[11px] text-white/40 leading-[1.5]">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
