import { Github, Instagram, Linkedin, X } from "lucide-react";

export const ContactSection = () => (
  <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
    <h2 className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">• Contact</h2>
    <h1 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">
      Get in Touch
    </h1>

    <div className="mt-8">
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
      © 2025. All rights reserved.
    </div>
  </section>
);
