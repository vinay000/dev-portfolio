import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"
import SocialLinks from "./SocialLinks"

export const TopNav = () => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <header className="dark:bg-zinc-950 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
                <SocialLinks />

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
            </div>
        </header>
    )
}
