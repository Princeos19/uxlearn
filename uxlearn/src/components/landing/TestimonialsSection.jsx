import React from "react";
import { testimonials } from "../../data/courses";

const TestimonialsSection = () => {
  return (
    <section className="bg-[#0D0D0D] py-[72px] px-10">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-medium text-[#C8FF00] tracking-widest uppercase mb-3">
          Testimonials
        </p>
        <h2 className="font-syne font-extrabold text-[38px] tracking-tight leading-[1.1] text-[#F0EFE9] mb-10">
          Our happy{" "}
          <span className="text-[#C8FF00]">students</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map(({ initials, name, role, color, text }) => (
            <div
              key={name}
              className="bg-[#141414] border border-white/[0.08] rounded-2xl p-6"
            >
              <div className="font-syne font-extrabold text-[30px] text-[#C8FF00] leading-[0.8] mb-3">
                "
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-5">{text}</p>
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${color}`}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0EFE9]">{name}</p>
                  <p className="text-[11px] text-white/35 mt-0.5">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
