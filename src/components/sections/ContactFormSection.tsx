import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Linkedin, X } from "lucide-react"
import React from "react"

export const ContactFormSection: React.FC = () => {
    return (
        <section className="p-6 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-400">• Hire Me</h2>
                <Badge
                    variant="outline"
                    className="text-xs text-emerald-400 border-emerald-400/20 bg-emerald-400/10"
                >
                    AVAILABLE FOR PROJECTS
                </Badge>
            </div>

            <h1 className="text-2xl font-semibold text-zinc-800 dark:text-white mb-4">Design Inquiry</h1>
            <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-6">
                Got an idea and need design help? Here's our time.
            </p>

            {/* Contact Form */}
            <form className="space-y-4">
                <Input
                    placeholder="Name"
                    className="dark:bg-zinc-900 dark:border-zinc-700 border-zinc-300 text-zinc-800 dark:text-zinc-300 placeholder:text-zinc-500 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-400"
                />
                <Input
                    placeholder="Email"
                    className="dark:bg-zinc-900 dark:border-zinc-700 border-zinc-300 text-zinc-800 dark:text-zinc-300 placeholder:text-zinc-500 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-400"
                />
                <Textarea
                    placeholder="Message"
                    className="dark:bg-zinc-900 dark:border-zinc-700 border-zinc-300 text-zinc-800 dark:text-zinc-300 placeholder:text-zinc-500 min-h-[100px] rounded-md shadow-sm focus:ring-2 focus:ring-emerald-400"
                />
                <div className="flex flex-col items-center text-center">
                    <Button variant="outline"
                        className=" items-centertext-xs border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-900 mb-6">
                        Submit Inquiry
                    </Button>
                </div>
            </form>

            {/* Social Links */}
            <div className="mt-8">
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2">• Follow Me</p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="#"
                        className="text-zinc-700 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
                        aria-label="X"
                    >
                        <X className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="text-zinc-700 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="text-zinc-700 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
                        aria-label="Github"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="text-zinc-700 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
                        aria-label="Linkedin"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
                © 2023 Brian Do. All rights reserved.
                <div className="mt-1">
                    <span>No Tracking - </span>
                    <span>Minimalist</span>
                </div>
            </div>
        </section>
    )
}
