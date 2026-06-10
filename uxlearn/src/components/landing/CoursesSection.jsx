import React from "react";
import { courses } from "../../data/courses";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-10 py-[72px]">
      <p className="text-xs font-medium text-[#C8FF00] tracking-widest uppercase mb-3">
        Most Popular
      </p>
      <h2 className="font-syne font-extrabold text-[38px] tracking-tight leading-[1.1] text-[#F0EFE9] mb-2">
        Our featured{" "}
        <span className="text-[#C8FF00]">courses</span>
      </h2>
      <p className="text-[15px] text-white/45 leading-relaxed max-w-[480px] mb-10">
        Structured learning paths that take you from zero to job-ready. Every
        course built by practitioners, not academics.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
