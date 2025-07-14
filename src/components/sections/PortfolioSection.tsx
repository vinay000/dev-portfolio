import { Circle } from "lucide-react";
import { ProjectCard } from "../ProjectCard";

export const PortfolioSection = () => {
  return (
    <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
      <h2 className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">
        • Portfolio
      </h2>
      <h1 className="text-xl font-bold mb-2">My Works</h1>
      <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">
        Explore a selection of web and mobile applications I’ve engineered to
        solve real-world problems, optimize performance, and scale with user
        demand.
      </p>
      <div className="space-y-2">
        <ProjectCard
          icon={
            <Circle className="w-6 h-6 text-white bg-emerald-600 rounded-full p-1" />
          }
          title="GOM Mix Video Editor"
          description="Web-based editor with Fabric.js, timeline/keyframe support, export features, and shader rendering."
          color="emerald"
        />
        <ProjectCard
          icon={
            <Circle className="w-6 h-6 text-white bg-blue-600 rounded-full p-1" />
          }
          title="NextGen Agtech"
          description="Cattle feedlot management platform handling health, inventory, and transactions for large-scale farms."
          color="blue"
        />
        <ProjectCard
          icon={
            <Circle className="w-6 h-6 text-white bg-pink-600 rounded-full p-1" />
          }
          title="Liiingo CMS"
          description="Cross-platform content delivery system with optimized media handling and unified codebase."
          color="pink"
        />
        <ProjectCard
          icon={
            <Circle className="w-6 h-6 text-white bg-yellow-600 rounded-full p-1" />
          }
          title="AEYC Mobile App"
          description="React Native app for 30k+ early educators. 300+ screens, Fastlane CI/CD, feedback-driven UX iterations."
          color="yellow"
        />
        <ProjectCard
          icon={
            <Circle className="w-6 h-6 text-white bg-indigo-600 rounded-full p-1" />
          }
          title="Simplex MLM"
          description="Refactored legacy React components to improve load speed, accessibility, and user engagement."
          color="indigo"
        />
      </div>
    </section>
  );
};
