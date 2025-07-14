import {
  Code2,
  Server,
  Settings,
  GitBranch,
  Hammer,
  Wrench,
  Cpu,
  Database,
} from "lucide-react";

const techPills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-4 h-4 text-white" />,
    color: "bg-blue-600",
    skills: [
      { name: "React", icon: <Code2 className="w-3 h-3" /> },
      { name: "React Native", icon: <Code2 className="w-3 h-3" /> },
      { name: "TypeScript", icon: <Hammer className="w-3 h-3" /> },
      { name: "Redux", icon: <GitBranch className="w-3 h-3" /> },
      { name: "Zustand", icon: <GitBranch className="w-3 h-3" /> },
      { name: "Tailwind", icon: <Wrench className="w-3 h-3" /> },
      { name: "Next.js", icon: <Cpu className="w-3 h-3" /> },
      { name: "Vite", icon: <Cpu className="w-3 h-3" /> },
    ],
  },
  {
    category: "Backend & APIs",
    icon: <Server className="w-4 h-4 text-white" />,
    color: "bg-green-600",
    skills: [
      { name: "Node.js", icon: <Server className="w-3 h-3" /> },
      { name: "REST", icon: <Settings className="w-3 h-3" /> },
      { name: "GraphQL", icon: <Settings className="w-3 h-3" /> },
    ],
  },
  {
    category: "CI/CD & Testing",
    icon: <Wrench className="w-4 h-4 text-white" />,
    color: "bg-yellow-600",
    skills: [
      { name: "GitHub Actions", icon: <GitBranch className="w-3 h-3" /> },
      { name: "Fastlane", icon: <Hammer className="w-3 h-3" /> },
      { name: "Jest", icon: <Hammer className="w-3 h-3" /> },
      { name: "Appium", icon: <Hammer className="w-3 h-3" /> },
    ],
  },
  {
    category: "Tools & DB",
    icon: <Database className="w-4 h-4 text-white" />,
    color: "bg-purple-600",
    skills: [
      { name: "SQLite", icon: <Database className="w-3 h-3" /> },
      { name: "Postman", icon: <Settings className="w-3 h-3" /> },
      { name: "VS Code", icon: <Code2 className="w-3 h-3" /> },
      { name: "Figma", icon: <Wrench className="w-3 h-3" /> },
    ],
  },
];

export const SkillsSection = () => (
  <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
    <div>
      <h2 className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
        • Skills
      </h2>
      <h1 className="text-xl font-bold mb-2">Technical Stack</h1>
    </div>
    <div className="space-y-4">
      {techPills.map((group, i) => (
        <div
          key={i}
          className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full ${group.color}`}
            >
              {group.icon}
            </div>
            <h3 className="font-semibold text-zinc-800 dark:text-white text-sm">
              {group.category}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill, j) => (
              <div
                key={j}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
