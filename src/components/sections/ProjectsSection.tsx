import { ProjectCard } from "../ProjectCard";
import { Circle } from "lucide-react";

export const ProjectsSection = () => (
  <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
    <div className="flex items-center mb-4">
      <h2 className="text-sm text-zinc-700 dark:text-zinc-400">• Projects</h2>
    </div>

    <div className="space-y-2">
      <ProjectCard
        icon={
          <Circle className="w-6 h-6 text-white bg-emerald-600 rounded-full p-1" />
        }
        title="GOM Mix Video Editor"
        description="Web-based video editor with Fabric.js, custom timelines, keyframes, and export support"
        color="emerald"
      />
      <ProjectCard
        icon={
          <Circle className="w-6 h-6 text-white bg-blue-600 rounded-full p-1" />
        }
        title="NextGen Agtech"
        description="Feedlot management system with real-time cattle health, inventory, and financials tracking"
        color="blue"
      />
      <ProjectCard
        icon={
          <Circle className="w-6 h-6 text-white bg-pink-600 rounded-full p-1" />
        }
        title="Liiingo CMS"
        description="Cross-platform content management platform built in React Native & React JS"
        color="pink"
      />
      <ProjectCard
        icon={
          <Circle className="w-6 h-6 text-white bg-yellow-600 rounded-full p-1" />
        }
        title="AEYC Mobile App"
        description="Large-scale mobile app with 300+ screens serving 30k+ educators, automated with Fastlane"
        color="yellow"
      />
    </div>
  </section>
);
