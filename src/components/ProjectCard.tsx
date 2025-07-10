import React from "react"

interface ProjectCardProps {
    icon: React.ReactNode
    title: string
    description?: string
    color?: string // can be used for future enhancements
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    icon,
    title,
    description,
}) => (
    <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:scale-105 transition-transform">
            {icon}
        </div>

        <div className="flex flex-col">
            <h3 className="font-semibold text-zinc-800 dark:text-white text-sm">{title}</h3>
            {description && (
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-snug">{description}</p>
            )}
        </div>
    </div>
)
