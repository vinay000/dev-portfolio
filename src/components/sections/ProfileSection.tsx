import { Images } from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Circle } from "lucide-react";

export const ProfileSection = () => (
  <section className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-sm text-zinc-500 dark:text-zinc-400">
          • Senior Software Engineer
        </h2>
        <h1 className="text-2xl font-semibold text-zinc-800 dark:text-white mt-1">
          I'm Vinay Kumar Yadav
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Building fast, scalable Web & Mobile Apps with React and Node.js.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Leading frontend at In Time Tec, Bengaluru.
        </p>

        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <Circle className="w-3 h-3 fill-zinc-300 dark:fill-zinc-400" />
            5+ yrs experience
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <Circle className="w-3 h-3 fill-zinc-300 dark:fill-zinc-400" />
            React/React Native
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <Badge
          variant="outline"
          className="text-[10px] px-2 py-0.5 text-emerald-600 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-400/10 dark:border-emerald-400/20"
        >
          AVAILABLE FOR WORK
        </Badge>
        <Avatar className="w-16 h-16 mt-3 border-2 border-zinc-200 dark:border-zinc-800 shadow-sm">
          <AvatarImage src={Images.avatarImage} alt="Vinay Yadav" />
          <AvatarFallback>VY</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </section>
);
