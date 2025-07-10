import { Circle } from "lucide-react"
import { Button } from "../ui/button"

export const MorvaLabsSection = () => {
    return (
        <section className="p-4 mb-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg shadow-sm">
            {/* Project Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 text-xs text-zinc-600 dark:text-zinc-400 mb-6">
                <div>
                    <p className="font-medium text-zinc-500 dark:text-zinc-500">Client</p>
                    <p className="mt-1">Morva Labs</p>
                </div>
                <div>
                    <p className="font-medium text-zinc-500 dark:text-zinc-500">Year</p>
                    <p className="mt-1">2023</p>
                </div>
                <div>
                    <p className="font-medium text-zinc-500 dark:text-zinc-500">Project Type</p>
                    <p className="mt-1">UI/UX Design, Branding</p>
                </div>
                <div>
                    <p className="font-medium text-zinc-500 dark:text-zinc-500">Role</p>
                    <p className="mt-1">UI/UX Designer</p>
                </div>
            </div>

            {/* Logo and Title */}
            <div className="flex flex-col items-center text-center mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold shadow-sm">
                    M
                </div>
                <h1 className="text-xl font-semibold text-zinc-800 dark:text-white mt-2">Morva Labs</h1>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Enhance your company's workforce management with a cutting-edge website. Enjoy seamless user experience, efficient employee management, and a competitive edge.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center text-center">
                <Button
                    variant="outline"
                    className=" items-centertext-xs border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-900 mb-6"
                >
                    VIEW WEBSITE
                    <Circle className="w-3 h-3 ml-2" />
                </Button>
            </div>


            {/* Image */}
            <div className="mt-4 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md overflow-hidden">
                <img
                    src="/placeholder.svg" // replace with actual image of the project
                    alt="Morva Labs Website"
                    width={400}
                    height={200}
                    className="w-full h-auto"
                />
            </div>


        </section>
    )
}
