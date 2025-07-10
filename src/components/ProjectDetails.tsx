import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const ProjectDetails = () => (
    <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
        <div className="flex flex-col gap-4 text-xs text-zinc-700 dark:text-zinc-400">
            <div className="flex gap-3"><span>Client</span><span className="ml-8">Morva Labs</span></div>
            <div className="flex gap-3"><span>Year</span><span className="ml-10">2023</span></div>
            <div className="flex gap-3"><span>Project Type</span><span>UI/UX design, Branding</span></div>
            <div className="flex gap-3"><span>Role</span><span className="ml-10">2023</span></div>
        </div>

        <div className="mt-6 flex items-center justify-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">M</div>
        </div>

        <h1 className="text-xl font-bold mt-4">Morva labs</h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-400 mt-2 mb-4">
            Enhance your company's workforce management with a cutting-edge website. Enjoy seamless user experience,
            efficient employee management, and a competitive edge.
        </p>
        <Button
            variant="outline"
            className="text-xs w-full border-zinc-700 text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-zinc-800"
        >
            VIEW WEBSITE <ArrowRight className="w-3 h-3 ml-2" />
        </Button>


        <div className="mt-4 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md overflow-hidden">
            <img src="/placeholder.svg" alt="Morva Labs Website" className="w-full h-auto" />
        </div>
    </section>
)
