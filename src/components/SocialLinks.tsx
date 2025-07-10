// components/SocialLinks.tsx
import { Github, Instagram, Linkedin, X } from "lucide-react"

export default function SocialLinks() {
    return (
        <div className="flex gap-3">
            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white"><X className="w-4 h-4" /></a>
            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white"><Github className="w-4 h-4" /></a>
            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white"><Linkedin className="w-4 h-4" /></a>
        </div>
    )
}
