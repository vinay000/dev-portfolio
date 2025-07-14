import { GraduationCap } from "lucide-react";

const educationList = [
  {
    degree: "B.Tech in Computer Science",
    university: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2015 – 2019",
    minor: "Minor in IoT & Embedded Systems",
    color: "bg-purple-600",
  },
];

export const EducationSection = () => (
  <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
    <div>
      <h2 className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
        • Education
      </h2>
      <h1 className="text-xl font-bold mb-2">Academic Background</h1>
    </div>

    <div className="space-y-4">
      {educationList.map((edu, i) => (
        <div
          key={i}
          className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full ${edu.color}`}
            >
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {edu.university} · {edu.location}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {edu.duration}
              </p>
            </div>
          </div>

          {edu.minor && (
            <p className="text-sm text-zinc-700 dark:text-zinc-400 mt-1">
              {edu.minor}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
);
