import React from "react";
import { stats } from "../../data/courses";

const StatsSection = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div>
        <p className="text-xs font-medium text-[#C8FF00] tracking-widest uppercase mb-3">
          Consistent learning
        </p>
        <h2 className="font-syne font-extrabold text-[34px] tracking-tight leading-[1.15] text-[#F0EFE9] mb-4">
          Results that{" "}
          <span className="text-[#C8FF00]">
            speak<br />for themselves
          </span>
        </h2>
        <p className="text-sm text-white/45 leading-relaxed mb-7 max-w-[380px]">
          UXLearn students ship real work faster. Our completion rate is the
          highest in design education — because the content actually respects
          your time.
        </p>

        <div className="grid grid-cols-2 gap-5">
          {stats.map(({ num, label }) => (
            <div
              key={label}
              className="bg-[#141414] border border-white/[0.08] rounded-xl p-[18px]"
            >
              <div className="font-syne font-extrabold text-[30px] text-[#C8FF00] tracking-tight leading-none">
                {num}
              </div>
              <div className="text-xs text-white/40 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Completion card */}
      <div className="bg-[#141414] border border-white/[0.08] rounded-2xl p-8 text-center">
        <p className="text-xs text-white/35 tracking-widest uppercase">
          Average completion rate
        </p>
        <div className="font-syne font-extrabold text-[64px] text-[#C8FF00] tracking-[-3px] leading-none my-4">
          87%
        </div>
        <p className="text-sm text-white/45 mb-6">Industry average is 12%</p>

        {/* Progress bar */}
        <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
          <div className="h-full w-[87%] bg-[#C8FF00] rounded-full" />
        </div>
        <p className="text-[11px] text-white/30 mt-2.5">
          Based on 50,000+ enrolled students · 2024
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
