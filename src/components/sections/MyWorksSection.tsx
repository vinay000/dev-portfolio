import { ProjectCard } from "../cards/ProjectCard"
import { Circle } from "lucide-react"

export const MyWorksSection = () => (
    <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
        <h2 className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">• Portfolio</h2>
        <h1 className="text-xl font-bold mb-2">My Works</h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">
            Discover my portfolio, where purposeful creations meet captivating design. My work strives to enhance
            experience and inspire.
        </p>

        <div className="space-y-2">
            {[
                { title: "Rectangle", desc: "Product design, Icon design", color: "bg-purple-600" },
                { title: "Morva labs", desc: "UI/UX design, Branding", color: "bg-indigo-600" },
                { title: "Simply", desc: "Landing page, Illustration design", color: "bg-orange-500" },
                { title: "Glassdoor", desc: "Web design, Illustration design", color: "bg-sky-500" },
                { title: "Seven LTD.", desc: "", color: "bg-purple-500" },
            ].map((p, i) => (
                <ProjectCard
                    key={i}
                    icon={<Circle className={`w-6 h-6 text-white ${p.color} rounded-full p-1`} />}
                    title={p.title}
                    description={p.desc}
                />
            ))}
        </div>
    </section>
)
