import React from "react";
import { whyCards } from "../../data/courses";

const WhySection = () => {
  return (
    <section className="bg-[#0D0D0D] py-[72px] px-10">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-medium text-[#C8FF00] tracking-widest uppercase mb-3">
          Why learn with us
        </p>
        <h2 className="font-syne font-extrabold text-[38px] tracking-tight leading-[1.1] text-[#F0EFE9] mb-10">
          Built for{" "}
          <span className="text-[#C8FF00]">real designers</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyCards.map(({ icon, title, body, accent }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border ${
                accent
                  ? "bg-[#C8FF00] border-[#C8FF00]"
                  : "bg-[#141414] border-white/[0.08]"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-4 ${
                  accent ? "bg-black/10" : "bg-[#C8FF00]/10"
                }`}
              >
                {icon}
              </div>
              <h3
                className={`font-syne font-bold text-base mb-2 ${
                  accent ? "text-[#0A0A0A]" : "text-[#F0EFE9]"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  accent ? "text-black/60" : "text-white/45"
                }`}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
