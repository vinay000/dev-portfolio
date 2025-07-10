import { Circle } from "lucide-react"
import { ProjectCard } from "../ProjectCard"

export const PortfolioSection = () => {
    return (
        <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
            <h2 className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">• Portfolio</h2>
            <h1 className="text-xl font-bold mb-2">My Works</h1>
            <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">
                Discover my portfolio, where purposeful creations meet captivating design. My work strives to enhance
                experience and inspire.
            </p>

            {/* Projects */}
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
                <ProjectCard
                    icon={<Circle className="w-6 h-6 text-white bg-sky-500 rounded-full p-1" />}
                    title="Glassdoor"
                    description="Web design, Illustration design"
                    color="sky"
                />
                <ProjectCard
                    icon={<Circle className="w-6 h-6 text-white bg-purple-500 rounded-full p-1" />}
                    title="Seven LTD."
                    description=""
                    color="purple"
                />
            </div>
        </section>
    )
}
