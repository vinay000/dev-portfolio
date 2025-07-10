import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Instagram, Linkedin, X } from "lucide-react"

export const NotFoundSection = () => (
    <section className="p-4 w-full  bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-md p-6 text-center">
        <h2 className="text-sm text-zinc-700 dark:text-zinc-400 mb-6">• Oops! 404</h2>

        <div className="flex flex-col items-center justify-center">
            <Avatar className="w-20 h-20 border-2 border-zinc-300 dark:border-zinc-800 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Brian Do" />
                <AvatarFallback>BD</AvatarFallback>
            </Avatar>

            <h1 className="text-xl font-bold mb-2">Page not found.</h1>
            <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">The page you're looking for does not exist.</p>

            <div className="flex gap-3">
                <Button variant="outline" className="text-xs border-zinc-700 text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-zinc-800">
                    Back to Home
                </Button>
                <Button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white">
                    Go to My Work <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
            </div>
        </div>

        <div className="mt-6">
            <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">• Follow Me</p>
            <div className="flex gap-3 flex justify-center items-center">
                {[X, Instagram, Github, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white"><Icon className="w-4 h-4" /></a>
                ))}
            </div>
        </div>
    </section>
)
