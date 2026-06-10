import React from "react";
const CourseCard = ({ course }) => {
  const { title, tag, duration, rating, reviews, swatches, thumbBg, thumbLabel } = course;

  const stars = Math.round(rating);
  const reviewCount = reviews >= 1000 ? `${(reviews / 1000).toFixed(1)}k` : reviews;

  return (
    <div className="bg-[#141414] border border-white/[0.09] rounded-2xl overflow-hidden cursor-pointer hover:border-[#C8FF00]/25 hover:-translate-y-0.5 transition-all duration-200">
      {/* Thumbnail */}
      <div
        className="h-[110px] flex flex-col justify-end px-3 pb-2"
        style={{ background: thumbBg }}
      >
        {/* Swatch strip — the signature design element */}
        <div className="flex gap-[3px] mb-1">
          {swatches.map((color) => (
            <div
              key={color}
              className="h-1.5 rounded-sm flex-1"
              style={{ background: color }}
            />
          ))}
        </div>
        <span className="text-[10px] font-medium text-white/50 uppercase tracking-widest">
          {thumbLabel}
        </span>
      </div>

      {/* Body */}
      <div className="p-3.5">
        <span className="inline-block text-[10px] font-medium text-white/45 border border-white/10 rounded-full px-2.5 py-0.5 mb-2 tracking-wide">
          {tag}
        </span>

        <h3 className="font-syne font-bold text-sm text-[#F0EFE9] leading-[1.3] mb-2.5">
          {title}
        </h3>

        <p className="text-[11px] text-white/35 mb-2.5 flex items-center gap-1">
          🕐 {duration}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-white/55">
            <span className="text-[#C8FF00]">{"★".repeat(stars)}</span>{" "}
            {rating} ({reviewCount})
          </span>
          <button className="text-[11px] font-medium text-[#0A0A0A] bg-[#C8FF00] rounded-full px-3 py-1.5 hover:opacity-90 transition-opacity">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
