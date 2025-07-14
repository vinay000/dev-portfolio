import { Circle } from "lucide-react";

const experiences = [
  {
    company: "In Time Tec",
    role: "Senior Software Engineer",
    location: "Bengaluru, India",
    duration: "Jan 2024 – Present",
    color: "bg-blue-600",
    points: [
      "Leading 4–5 developers on scalable mobile and web applications.",
      "Automated deployments with GitHub Actions and Fastlane.",
      "Improved test coverage using Jest and Appium (35% boost).",
    ],
  },
  {
    company: "In Time Tec",
    role: "Software Engineer",
    location: "Bengaluru, India",
    duration: "Nov 2021 – Dec 2023",
    color: "bg-sky-600",
    points: [
      "Delivered high-quality features as an individual contributor.",
      "Enhanced performance and stability through rigorous testing.",
      "Collaborated with design and backend for seamless integration.",
    ],
  },
  {
    company: "Simplex MLM",
    role: "Software Engineer",
    location: "Bengaluru, India",
    duration: "Jun 2020 – Apr 2021",
    color: "bg-indigo-600",
    points: [
      "Refactored components reducing load time by 25%.",
      "Boosted accessibility compliance and user engagement.",
      "Launched 4 major features in 6 months via Agile sprints.",
    ],
  },
];

export const ExperienceSection = () => (
  <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
    <div>
      <h2 className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
        • Experience
      </h2>
      <h1 className="text-xl font-bold mb-2">Work History</h1>
    </div>

    <div className="space-y-4">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full ${exp.color}`}
            >
              <Circle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-white">
                {exp.company} — {exp.role}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {exp.duration} · {exp.location}
              </p>
            </div>
          </div>

          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-400">
            {exp.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
