import { Button } from "@/components/ui/button"
import { ProjectCard } from "../ProjectCard"
import { Circle } from "lucide-react"

export const ProjectsSection = () => (
    <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm text-zinc-700 dark:text-zinc-400">• Projects</h2>
            <Button variant="link" className="text-xs text-zinc-700 dark:text-zinc-400 p-0">
                View All →
            </Button>
        </div>

        <div className="space-y-2">
            <ProjectCard
                icon={<Circle className="w-6 h-6 text-white bg-purple-600 rounded-full p-1" />}
                title="Rectangle"
                description="Product design, Icon design"
                color="purple"
            />
            <ProjectCard
                icon={<Circle className="w-6 h-6 text-white bg-indigo-600 rounded-full p-1" />}
                title="Morva labs"
                description="UI/UX design, Branding"
                color="indigo"
            />
            <ProjectCard
                icon={<Circle className="w-6 h-6 text-white bg-orange-500 rounded-full p-1" />}
                title="Simply"
                description="Landing page, Illustration design"
                color="orange"
            />
        </div>
    </section>
)
