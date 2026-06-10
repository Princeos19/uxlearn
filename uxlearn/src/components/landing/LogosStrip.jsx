import React from "react";
import { logos } from "../../data/courses";

const LogosStrip = () => {
  return (
    <div className="border-t border-b border-white/[0.06] bg-[#0D0D0D] py-8 px-10">
      <p className="text-center text-xs text-white/30 tracking-widest uppercase mb-5">
        Trusted by designers at
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {logos.map((name) => (
          <span
            key={name}
            className="font-syne font-bold text-base tracking-tight text-white/[0.18]"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogosStrip;
